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
      <p className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      <h2 className={`mt-4 ${dark ? "heading-dark" : "heading"}`}>{title}</h2>
      {description ? (
        <p className={`mt-5 ${dark ? "body-dark" : "body"}`}>{description}</p>
      ) : null}
    </div>
  );
}
