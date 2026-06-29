import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";
import { Timeline } from "@/components/Timeline";
import { aboutTimeline, credentials, sectionIds, storyIntro } from "@/lib/site";

export function StorySection() {
  return (
    <section id={sectionIds.story} className="section section-y scroll-mt-24 bg-bg">
      <div className="container">
        <SectionIntro title="Background" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h3 className="subheading">Why acquisition?</h3>
            <p className="prose-narrow body mt-5">{storyIntro}</p>

            <div className="mt-10">
              <Timeline items={aboutTimeline} />
            </div>

            <div className="mt-10 space-y-2">
              {credentials.map((line) => (
                <p key={line} className="text-sm font-semibold text-slate-700">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-5 shadow-xl lg:sticky lg:top-28">
            <Image
              src="/IMG_4193.jpg"
              alt="Professional leadership meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
