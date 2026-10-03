export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SiteConfig {
  name: string;
  wordmark: string;
  establishedYear: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  responseTimeNote: string;
  nav: NavItem[];
  clients: string[];
  footer: {
    columns: FooterColumn[];
    copyright: string;
    description: string;
  };
}

export const siteContent: SiteConfig = {
  name: "Old But Gold",
  wordmark: "OLD BUT GOLD",
  establishedYear: "2021",
  tagline: "Calm, precision engineering for high-assurance software.",
  description:
    "An elite engineering studio crafting mission-critical platforms, distributed cloud systems, and high-performance digital products with mathematical rigor.",
  url: "https://oldbutgold.engineering",
  email: "hello@oldbutgold.engineering",
  responseTimeNote: "We review inquiries within 24 hours. Engagements typically start within 2–4 weeks.",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  clients: [
    "AETHER DYNAMICS",
    "MERIDIAN LABS",
    "SYNAPSE CLOUD",
    "HYPERION SYS",
    "VORTEX DATA",
    "NEXUS QUANTUM",
  ],
  footer: {
    description:
      "A calm, precision software engineering studio. We design and build high-assurance web platforms, cloud architecture, and intelligent systems.",
    columns: [
      {
        title: "Company",
        links: [
          { label: "About Studio", href: "/about" },
          { label: "Selected Work", href: "/work" },
          { label: "Engineering Process", href: "/#process" },
          { label: "Careers", href: "/about#careers" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Web Platforms", href: "/services#web" },
          { label: "Mobile Systems", href: "/services#mobile" },
          { label: "Cloud & DevOps", href: "/services#cloud" },
          { label: "AI Integration", href: "/services#ai" },
          { label: "Design Systems", href: "/services#design" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Engineering Blog", href: "/blog" },
          { label: "Open Source", href: "https://github.com" },
          { label: "Architecture Notes", href: "/blog" },
          { label: "Security & Audits", href: "/about#security" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/legal/privacy" },
          { label: "Terms of Service", href: "/legal/terms" },
          { label: "Security Disclosure", href: "/legal/security" },
        ],
      },
    ],
    copyright: "© 2026 OLD BUT GOLD ENGINEERING STUDIO INC. ALL RIGHTS RESERVED.",
  },
};
