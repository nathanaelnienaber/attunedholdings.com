import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  Handshake,
  LineChart,
  MapPin,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

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
      label: "In-person",
      description: "Meet in Bellevue, WA.",
      calLink: "nathanaelnienaber/in-person",
    },
  ],
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/criteria", label: "Criteria" },
  { href: "/financing", label: "Financing" },
  { href: "/value-add", label: "Value Add" },
  { href: "/contact", label: "Contact" },
];

export const trustSignals = [
  "Ex-Boeing",
  "MBA",
  "PMP",
  "Cloud Genius",
  "$1.5M+ Deployable Capital",
  "SBA Pre-Qualified Up To $8M",
  "Legal Vehicle: Attuned Holdings LLC",
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const industryFocusIntro =
  "We concentrate on essential, service-based industries, including:";

export const essentialIndustries = [
  "Fire & life safety services",
  "Compliance and inspection services",
  "Managed IT services (MSPs)",
  "Commercial field services and technical maintenance businesses",
  "Adjacent B2B service categories with recurring revenue characteristics",
];

export const criteriaCards: Feature[] = [
  {
    title: "Industries",
    description:
      "Essential service-based businesses: fire & life safety, compliance & inspection, MSPs, commercial field services, and adjacent B2B services with recurring revenue.",
    icon: Factory,
  },
  {
    title: "Geography",
    description: "Washington State, with preference for Seattle and Bellevue metro businesses.",
    icon: MapPin,
  },
  {
    title: "Revenue",
    description: "$1M - $15M+ in annual revenue with durable customer relationships.",
    icon: LineChart,
  },
  {
    title: "EBITDA / SDE",
    description: "$250K - $2M in earnings with room for disciplined operational growth.",
    icon: BadgeDollarSign,
  },
  {
    title: "Deal Structure",
    description:
      "$1.5M+ deployable capital with lender pre-qualification up to $8M. Open to SBA, bank debt, seller notes, earnouts, and hybrid structures.",
    icon: Handshake,
  },
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

export const valueAddCards: Feature[] = [
  {
    title: "IT Modernization",
    description: "Cloud migration, ERP implementation, Zero Trust Architecture, and secure infrastructure.",
    icon: ShieldCheck,
  },
  {
    title: "Operations",
    description: "Process automation, lean methodologies, supply chain optimization, and workflow clarity.",
    icon: Cpu,
  },
  {
    title: "Growth",
    description:
      "Digital marketing systems, customer visibility, and data-driven decisions that strengthen the business.",
    icon: Network,
  },
  {
    title: "Culture",
    description: "I honor the founder's legacy. Your team stays intact.",
    icon: Users,
  },
];

export const aboutTimeline = [
  {
    title: "Georgia-Pacific",
    description: "Built early operating discipline in industrial environments and process-oriented teams.",
  },
  {
    title: "Ghostruck Founder",
    description: "Raised $3M and scaled the logistics platform to 18 cities.",
  },
  {
    title: "Boeing Transformation Leader",
    description: "Spent 5+ years as a Technical Product Manager, Chief of Staff for CDO and led modernization of 30+ year legacy systems.",
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

export const IconBriefcase = BriefcaseBusiness;
export const IconBuilding = Building2;
