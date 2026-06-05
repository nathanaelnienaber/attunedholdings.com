"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  role: "Broker" | "Founder" | "";
  businessName: string;
  revenue: string;
  message: string;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      role: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitError(result.error ?? "Unable to send your message right now. Please try again.");
        return;
      }

      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Unable to send your message right now. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl bg-white p-6 shadow-xl lg:p-8">
      {submitted ? (
        <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
          Thank you. Your message has been received and will be reviewed promptly.
        </div>
      ) : null}

      {submitError ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
          {submitError}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            className="form-input"
            {...register("name", { required: "Name is required." })}
            autoComplete="name"
          />
        </Field>

        <Field label="Email" error={errors.email?.message}>
          <input
            className="form-input"
            type="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
            autoComplete="email"
          />
        </Field>

        <Field label="Phone" error={errors.phone?.message}>
          <input
            className="form-input"
            type="tel"
            {...register("phone")}
            autoComplete="tel"
          />
        </Field>

        <Field label="Role" error={errors.role?.message}>
          <select
            className="form-input"
            {...register("role", { required: "Please select a role." })}
          >
            <option value="">Select one</option>
            <option value="Broker">Broker</option>
            <option value="Founder">Founder</option>
          </select>
        </Field>

        <Field label="Business Name" error={errors.businessName?.message}>
          <input
            className="form-input"
            {...register("businessName", { required: "Business name is required." })}
          />
        </Field>

        <Field label="Revenue" error={errors.revenue?.message}>
          <input
            className="form-input"
            placeholder="$2.5M - $10M"
            {...register("revenue")}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" error={errors.message?.message}>
          <textarea
            className="form-input min-h-36 resize-y"
            {...register("message", { required: "Message is required." })}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-slate-950 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        Submit Confidential Inquiry
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <div className="mt-2">{children}</div>
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
