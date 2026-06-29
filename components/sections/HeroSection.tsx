import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroDescription } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="section relative overflow-hidden bg-dark">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=80"
          alt="Commercial field service technician at work"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="container relative py-24 lg:py-32">
        <p className="eyebrow-dark">Washington operator buyer</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Building a company where people can grow old in.
        </h1>
        <p className="prose-narrow mt-6 text-xl leading-relaxed text-slate-200">
          {heroDescription}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#fit" className="btn-primary">
            View Acquisition Fit
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#contact" className="btn-secondary">
            Discuss a Business
          </a>
        </div>
      </div>
    </section>
  );
}
