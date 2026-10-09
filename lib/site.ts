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
  faq: "faq",
  contact: "contact",
} as const;

export const navItems = [
  { href: "#fit", label: "Fit", sectionId: sectionIds.fit },
  { href: "#story", label: "Background", sectionId: sectionIds.story },
  { href: "#capital", label: "Capital", sectionId: sectionIds.capital },
  { href: "#faq", label: "FAQ", sectionId: sectionIds.faq },
  { href: "#contact", label: "Contact", sectionId: sectionIds.contact },
];

export const dealProfileRows = [
  { label: "Buyer type", value: "Self-funded searcher / owner-operator" },
  { label: "Geography", value: "Within ~2 hours of Bellevue, WA" },
  { label: "Ideal earnings", value: "$750K–$1M SDE (self-funded)" },
  { label: "Larger deals", value: "$1M–$2M SDE (post-LOI investors)" },
  { label: "Industry", value: "Industry agnostic" },
] as const;

export const fitIntroDescription =
  "Self-funded searcher pursuing an owner-operator acquisition. Pre-qualified to purchase up to $8M individually. For larger opportunities, I can bring in post-LOI investors after fit is established.";

export const capitalIntroDescription =
  "I have $1.5M+ in deployable capital and lender pre qualification up to $8M. I have access to investors post-LOI for larger deals.";

export const afterCloseOutcomes = [
  "Your team stays intact. Upgrades are sequenced around trust and continuity, not disruption.",
  "Systems modernize in phases. Cloud, ERP, and automation only where they reduce friction, not for their own sake.",
  "The founder's legacy is honored. Customers keep the relationships they trust while the business gets stronger.",
] as const;

export const credentials = [
  "Former founder, owner and operator. I know how to deal with employees with grease on their hands and employees with PhDs on their resumes.",
  "My superpower is admitting I don't know it all and empowering those who do.",
] as const;

export const heroDescription =
  "I'm Nathanael Nienaber, a former founder and operator, looking to acquire a small to medium sized business (SMB) in the Seattle Metro Area.";

export const storyIntro =
  "I grew up in a small business with the goal of starting and growing one myself. I took a sidetrack into venture-backed companies, and now I'm getting back to my roots by combining my blue-collar and white-collar skills.";

export const footerTagline =
  "Buyer pursuing industry agnostic Seattle Metro business between $750K-$1M SDE.";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

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
    description: "Founded a tech startup in a blue-collar industry. Managed 30+ employees, investors, and scaled to 18 cities.",
  },
  {
    title: "Boeing",
    description:
      "Learned and then led transformation team in ivory towers and manufacturing floor as Technical PM and Chief of Staff for CDO.",
  },
];

export const faqItems = [
  {
    question: "What size business is Nathanael looking to acquire?",
    answer:
      "The self funded target is a business with $750K to $1M in SDE. For larger opportunities, in the $1M to $2M SDE range, Nathanael can bring in investors after an LOI is signed, once fit is established.",
  },
  {
    question: "What geography do you buy in?",
    answer:
      "The search is focused on businesses located within about 2 hours of Bellevue, Washington, in the Seattle Metro Area.",
  },
  {
    question: "Does the acquisition need to be in a specific industry?",
    answer:
      "No, the search is industry agnostic. The priority is the fit of the business and the people in it, not a specific sector.",
  },
  {
    question: "How is the deal financed?",
    answer:
      "Nathanael has $1.5M or more in deployable capital and lender pre qualification up to $8M, including a broker issued SBA pre approval letter for up to $8M. That letter supports early stage diligence conversations with owners, brokers, and advisors evaluating transaction readiness and close certainty. For larger deals, he has access to investors after an LOI is signed.",
  },
  {
    question: "Who is actually buying the business?",
    answer:
      "Nathanael Nienaber, a former founder, owner, and operator, is acquiring through Attuned Holdings LLC as a self funded searcher who will own and operate the business, not a private equity fund or holding company looking to flip the business.",
  },
  {
    question: "What happens to employees and culture after close?",
    answer:
      "The team stays intact. Upgrades are sequenced around trust and continuity, not disruption. Systems modernize in phases, with cloud, ERP, and automation adopted only where they reduce friction, not for their own sake. The founder's legacy is honored, and customers keep the relationships they trust while the business gets stronger.",
  },
  {
    question: "Will the business be run hands on after the transition?",
    answer:
      "Yes. Nathanael is an owner and operator buyer, meaning he intends to run the business directly after close, not install an outside manager or hold it as a passive investment.",
  },
  {
    question: "What is Nathanael's background as an operator?",
    answer:
      "He is a former founder, owner, and operator who has worked with employees with grease on their hands and employees with PhDs on their resumes. He grew up in a small business, built B2B sales experience in medical and manufacturing, founded and scaled a startup called Ghostruck to 30 plus employees and 18 cities, and later led a transformation team at Boeing as Technical PM and Chief of Staff for the CDO.",
  },
  {
    question: "How do I start a conversation about a business?",
    answer:
      "Book a video call, phone call, or in person meeting in Bellevue, Washington directly on the site, or use the contact form to reach out. Owners, brokers, and advisors are welcome to start the conversation early, even before a deal is formally on the market.",
  },
] as const;

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
