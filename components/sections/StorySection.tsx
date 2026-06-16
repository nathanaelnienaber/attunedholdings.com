import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";
import { Timeline } from "@/components/Timeline";
import { aboutTimeline, credentials, sectionIds } from "@/lib/site";

export function StorySection() {
  return (
    <section
      id={sectionIds.story}
      className="scroll-mt-24 bg-white px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Story"
          title="A technologist and former founder and operator with enterprise transformation experience."
          description="I am establishing Attuned Holdings LLC to acquire and operate one enduring Washington business for the next 20 years."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative h-[420px] overflow-hidden rounded-5 shadow-xl lg:sticky lg:top-28">
            <Image
              src="/IMG_4193.jpg"
              alt="Professional leadership meeting"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">
              Why acquisition?
            </h3>
            <p className="mt-5 leading-8 text-slate-600">
              I grew up in a blue collar family business, doing whatever the day required.
              I founded and operated Ghostruck, then spent years at Boeing leading
              transformation on legacy systems. I am not building a faceless fund. I am
              preparing to be the owner and operator who shows up in the business, works
              with the team, and protects what already works.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              My goal is to buy a legacy business where the founder, employees, and
              customers can trust that continuity matters as much as modernization.
            </p>

            <div className="mt-10">
              <Timeline items={aboutTimeline} />
            </div>

            <p className="mt-10 text-sm font-semibold text-slate-700">{credentials}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
