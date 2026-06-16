"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldError, setFieldError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    setFieldError(null);

    const trimmedEmail = email.trim();

    if (!trimmedEmail || !emailPattern.test(trimmedEmail)) {
      setFieldError("Enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitError(result.error ?? "Unable to send your message right now. Please try again.");
        return;
      }

      setSubmitted(true);
      setEmail("");
    } catch {
      setSubmitError("Unable to send your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-5 bg-white p-6 shadow-xl lg:p-8">
      {submitted ? (
        <div className="mb-6 rounded-5 border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
          Thank you. I&apos;ll follow up at the email address you provided.
        </div>
      ) : null}

      {submitError ? (
        <div className="mb-6 rounded-5 border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
          {submitError}
        </div>
      ) : null}

      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Email</span>
        <input
          className="form-input mt-2"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          placeholder="you@company.com"
        />
        {fieldError ? <span className="mt-2 block text-sm text-red-600">{fieldError}</span> : null}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-5 bg-slate-950 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        Start a Conversation
      </button>

      <p className="mt-4 text-center text-sm text-slate-600">
        or simply email{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-sky-700 hover:text-sky-600">
          {site.email}
        </a>
      </p>
    </form>
  );
}
