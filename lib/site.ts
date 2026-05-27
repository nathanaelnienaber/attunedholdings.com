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
  entityType: "C-Corp",
  email: "nathanaelnienaber@protonmail.com",
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
];

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
  "ROBS Ready",
  "Legal Vehicle: Attuned Holdings C-Corp",
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const criteriaCards: Feature[] = [
  {
    title: "Industries",
    description: "Manufacturing, Environmental Services, Infrastructure, and Construction.",
    icon: Factory,
  },
  {
    title: "Geography",
    description: "Washington State, with preference for Seattle and Bellevue metro businesses.",
    icon: MapPin,
  },
  {
    title: "Revenue",
    description: "$2.5M - $10M in annual revenue with durable customer relationships.",
    icon: LineChart,
  },
  {
    title: "EBITDA / SDE",
    description: "$400K - $1.2M in earnings with room for disciplined operational growth.",
    icon: BadgeDollarSign,
  },
  {
    title: "Deal Structure",
    description:
      "$1M+ equity via ROBS through Attuned Holdings with openness to SBA and seller financing.",
    icon: Handshake,
  },
  {
    title: "Ideal Pain Points",
    description: "Outdated IT, manual processes, founder retirement, and modernization needs.",
    icon: CheckCircle2,
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
    description: "Digital marketing systems, sales scaling, customer visibility, and data-driven decisions.",
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
    description: "Spent 8+ years as an Analytic Chief of Staff at VP level and led modernization of 30+ year legacy systems.",
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
      "Manufacturing acquisitions",
      "Environmental services",
      "IT modernization",
      "Zero Trust Architecture",
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
