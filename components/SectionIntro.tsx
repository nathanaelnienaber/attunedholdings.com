type SectionIntroProps = {
  eyebrow?: string;
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
      {eyebrow ? (
        <p className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2 className={`${eyebrow ? "mt-4" : ""} ${dark ? "heading-dark" : "heading"}`}>{title}</h2>
      {description ? (
        <p className={`prose-narrow mt-5 ${dark ? "body-dark" : "body"}`}>{description}</p>
      ) : null}
    </div>
  );
}
