import type { LucideIcon } from "lucide-react";

export const site = {
  name: "Nathanael Nienaber",
  founder: "Nathanael Nienaber",
  entity: "Attuned Holdings",
  entityType: "LLC",
  email: "nathanael@attunedholdings.com",
  phone: "+1-425-563-5652",
  location: "Bellevue, WA",
  url: "https://attunedholdings.com",
};

export const socialLinks = [
  {
    label: "Searchfunder",
    href: "https://searchfunder.com/profile/nathanael-nienaber",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nnienaber/",
  },
  {
    label: "nathanaelnienaber.com",
    href: "https://nathanaelnienaber.com",
  },
];

export const booking = {
  username: "nathanaelnienaber",
  baseUrl: "https://cal.com/nathanaelnienaber",
  eventTypes: [
    {
      id: "video-call",
      label: "Video call",
      description: "Zoom, Teams, Google Meet, or similar.",
      calLink: "nathanaelnienaber/video-call",
    },
    {
      id: "phone-call",
      label: "Phone call",
      description: "No video needed.",
      calLink: "nathanaelnienaber/phone-call",
    },
    {
      id: "in-person",
      label: "In person",
      description: "Meet in Bellevue, WA.",
      calLink: "nathanaelnienaber/in-person",
    },
  ],
} as const;

export const sectionIds = {
  fit: "fit",
  story: "story",
  capital: "capital",
  approach: "approach",
  contact: "contact",
} as const;

export const navItems = [
  { href: "#fit", label: "Fit", sectionId: sectionIds.fit },
  { href: "#story", label: "Background", sectionId: sectionIds.story },
  { href: "#capital", label: "Capital", sectionId: sectionIds.capital },
  { href: "#contact", label: "Contact", sectionId: sectionIds.contact },
];

export const dealProfileRows = [
  { label: "Buyer type", value: "Self-funded searcher / owner-operator" },
  { label: "Geography", value: "Within ~2 hours of Bellevue, WA" },
  { label: "Ideal earnings", value: "$750K–$1M SDE (self-funded)" },
  { label: "Larger deals", value: "$1M–$2M EBITDA (post-LOI investors)" },
  { label: "Industry", value: "Industry agnostic" },
] as const;

export const fitIntroDescription =
  "Self-funded searcher pursuing an owner-operator acquisition. Pre-qualified to purchase up to $8M individually. For larger opportunities, I can bring in post-LOI investors after fit is established.";

export const financingStructures = [
  { label: "SBA 7(a)", hint: "Efficient leverage for qualified lower middle market deals" },
  { label: "Conventional Bank Debt", hint: "Senior financing where terms and profile are the best fit" },
  {
    label: "ROBS",
    hint: "Rollover for Business Startups. Retirement funds into the acquisition when it fits.",
  },
  { label: "Seller Note", hint: "Aligns interests and can improve overall terms" },
  { label: "Earnout", hint: "Performance based upside tied to agreed milestones" },
  { label: "Rollover Equity", hint: "Minority upside for owners who want to stay invested" },
  { label: "Hybrid Structures", hint: "Debt, seller paper, earnout, and equity combined" },
] as const;

export const capitalCoInvestNote =
  "For the right opportunity, I'm open to a small number of passive investors who fit a long term operator model. Patient capital, clear governance, and no pressure to flip the business.";

export const capitalIntroDescription =
  "I have $1.5M+ in deployable capital and lender pre qualification up to $8M. I have access to investors post-LOI for larger deals.";

export const afterCloseOutcomes = [
  "Your team stays intact. Upgrades are sequenced around trust and continuity, not disruption.",
  "Systems modernize in phases. Cloud, ERP, and automation only where they reduce friction, not for their own sake.",
  "The founder's legacy is honored. Customers keep the relationships they trust while the business gets stronger.",
] as const;

export const credentials =
  "Former founder, owner and operator. I know how to deal with employees with grease on their hands and employees with PhDs on their resumes.";

export const trustSignals = [
  "Former founder and operator",
  "Former Boeing",
  "$1.5M+ deployable capital",
  "SBA pre qualified up to $8M",
];

export const heroDescription =
  "I'm Nathanael Nienaber, a former founder and operator acquiring a Washington service business through Attuned Holdings LLC. I'm not a fund flipping assets — I'm here to protect what works, strengthen the team, and build something that lasts.";

export const storyIntro =
  "I grew up in a small business with the goal of starting and growing one myself. I took a sidetrack into venture-backed companies, and now I'm getting back to my roots by combining my blue-collar and white-collar skills.";

export const contactIntroDescription =
  "Founder, broker, lender, and advisor conversations are welcomed. NDA review is available before sensitive materials are exchanged.";

export const footerTagline =
  "Operator buyer pursuing enduring Washington essential service businesses with a focus on durable teams and long term continuity.";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const idealIndustries = [
  "Fire & Life Safety Services",
  "Broader Compliance & Inspection Services",
] as const;

export const secondaryIndustries = [
  "Commercial Security Systems",
  "Commercial HVAC (commercial maintenance only)",
] as const;

export const aboutTimeline = [
  {
    title: "Family business",
    description: "Grew up in a blue collar family business, doing whatever the day required.",
  },
  {
    title: "Medical and Manufacturer Sales",
    description: "Purposefully developed B2B sales skills in medical, then manufacturing.",
  },
  {
    title: "Ghostruck",
    description: "Founded and operated the company. Raised $3M and scaled to 18 cities.",
  },
  {
    title: "Boeing",
    description:
      "Spent 5+ years as a Technical Product Manager, Chief of Staff for CDO, and led modernization of 30+ year legacy systems.",
  },
];

export const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.founder,
    jobTitle: "Acquisition Entrepreneur",
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bellevue",
      addressRegion: "WA",
      addressCountry: "US",
    },
    worksFor: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.entity,
    },
    sameAs: [site.url, ...socialLinks.map((link) => link.href)],
    alumniOf: "Northwest University",
    knowsAbout: [
      "Fire and life safety services",
      "Compliance and inspection services",
      "Managed IT services",
      "Commercial field services",
      "Business acquisitions",
      "IT modernization",
      "Operational automation",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.entity,
    legalName: `${site.entity} ${site.entityType}`,
    founder: {
      "@id": `${site.url}/#person`,
      name: site.founder,
    },
    parentOrganization: {
      "@id": `${site.url}/#person`,
      name: site.founder,
    },
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bellevue",
      addressRegion: "WA",
      addressCountry: "US",
    },
  },
];
