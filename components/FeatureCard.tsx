import type { Feature } from "@/lib/site";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="rounded-5 border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-5 bg-sky-50 text-sky-600">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950">{feature.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
    </article>
  );
}
