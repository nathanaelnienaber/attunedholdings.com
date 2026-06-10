type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  className = "",
  dark = false,
}: SectionIntroProps) {
  return (
    <div className={className}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.25em] ${
          dark ? "text-sky-300" : "text-sky-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-3xl text-lg leading-8 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
