import type { LucideIcon } from "lucide-react";
import { CheckCircle2, Users } from "lucide-react";

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
  { href: "#story", label: "Story", sectionId: sectionIds.story },
  { href: "#capital", label: "Capital", sectionId: sectionIds.capital },
  { href: "#approach", label: "Approach", sectionId: sectionIds.approach },
  { href: "#contact", label: "Contact", sectionId: sectionIds.contact },
];

export const dealProfileRows = [
  { label: "Geography", value: "Washington State (Seattle / Bellevue metro preferred)" },
  { label: "Revenue", value: "$1M to $15M+ annual revenue" },
  { label: "EBITDA / SDE", value: "$250K to $2M earnings" },
  { label: "Deployable Capital", value: "$1.5M+ equity" },
  { label: "Pre-Qualification", value: "Up to $8M acquisition size" },
  { label: "Closing Readiness", value: "30 to 45 days from LOI" },
] as const;

export const idealSituations = [
  {
    title: "Outdated IT",
    description:
      "Legacy systems create drag but the underlying business and customer relationships are strong.",
  },
  {
    title: "Manual Processes",
    description:
      "Heavy paper workflows and tribal knowledge that can be systematized without disrupting service delivery.",
  },
  {
    title: "Founder Retirement",
    description:
      "A planned transition where continuity for employees and customers matters as much as valuation.",
  },
  {
    title: "Existing Management",
    description:
      "A leadership team already in place that can run day to day operations through transition.",
  },
  {
    title: "Recurring Revenue",
    description:
      "Contract or repeat revenue that supports long term planning and stable employment.",
  },
] as const;

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

export const afterCloseOutcomes = [
  "Your team stays intact. Upgrades are sequenced around trust and continuity, not disruption.",
  "Systems modernize in phases. Cloud, ERP, and automation only where they reduce friction, not for their own sake.",
  "The founder's legacy is honored. Customers keep the relationships they trust while the business gets stronger.",
] as const;

export const approachSummary =
  "I bring enterprise transformation experience, founder operating grit, and a technologist's eye for practical systems. Improvements are measured by business continuity, team trust, and operating outcomes, not change for its own sake.";

export const credentials =
  "MBA from Northwest University. PMP. Former founder, owner and operator. Technologist.";

export const trustSignals = [
  "Former founder and operator",
  "Family business roots",
  "Former Boeing",
  "MBA",
  "PMP",
  "$1.5M+ deployable capital",
  "SBA pre qualified up to $8M",
  "Attuned Holdings LLC",
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const essentialIndustries = [
  "Fire & life safety services",
  "Compliance and inspection services",
  "Managed IT services (MSPs)",
  "Commercial field services and technical maintenance businesses",
  "Adjacent B2B service categories with recurring revenue characteristics",
];

export const dealDetailCards: Feature[] = [
  {
    title: "Ideal Pain Points",
    description: "Outdated IT, manual processes, founder retirement, and modernization needs.",
    icon: CheckCircle2,
  },
  {
    title: "Business Profile",
    description:
      "Existing management layer, recurring or repeat revenue, and a business that can run without the owner for short periods.",
    icon: Users,
  },
];

export const aboutTimeline = [
  {
    title: "Family business",
    description: "Grew up in a blue collar family business, doing whatever the day required.",
  },
  {
    title: "Georgia-Pacific",
    description: "Built early operating discipline in industrial environments and process oriented teams.",
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
