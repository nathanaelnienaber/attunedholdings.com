"use client";

import { useState } from "react";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactFormToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="text-base font-semibold text-accent hover:text-sky-600"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? "Hide email form" : "Prefer email instead?"}
      </button>
      {isOpen ? (
        <div className="mt-6">
          <ContactForm />
        </div>
      ) : null}
    </div>
  );
}
