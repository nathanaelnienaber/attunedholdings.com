"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, sectionIds, site } from "@/lib/site";

const observedSections = Object.values(sectionIds);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const elements = observedSections
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  function handleNavClick() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#"
          className="flex min-w-0 flex-col sm:flex-row sm:items-baseline sm:gap-3"
          onClick={handleNavClick}
        >
          <span className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
            {site.name}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 sm:text-[0.7rem]">
            Operating as {site.entity}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition hover:text-sky-600 ${
                  isActive ? "text-sky-600" : "text-slate-700"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden rounded-5 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 lg:inline-flex"
        >
          Discuss a Business
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-5 p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 shadow-sm lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-5 px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-5 bg-slate-950 px-3 py-2 text-center text-base font-semibold text-white hover:bg-sky-600"
              onClick={handleNavClick}
            >
              Discuss a Business
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
