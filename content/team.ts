export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  specialty: string;
  bio: string;
}

export interface StudioValue {
  number: string;
  title: string;
  description: string;
}

export interface StudioMilestone {
  year: string;
  title: string;
  description: string;
}

export const aboutContent = {
  eyebrow: "ABOUT THE STUDIO",
  heading: "Engineered with architectural discipline",
  subheading:
    "We are a selective team of senior engineers and systems architects focused exclusively on high-complexity software.",
  mission: {
    eyebrow: "OUR MISSION",
    heading: "Crafting software as durable infrastructure",
    description:
      "Modern software is too often built with brittle assumptions and rushed deadlines. We operate as a high-precision engineering studio, treating code as long-term architectural infrastructure with mathematical rigor, deterministic tests, and zero aesthetic compromise.",
  },
  values: [
    {
      number: "01",
      title: "Clarity over Cleverness",
      description: "We write explicit, verifiable, and maintainable code that remains transparent to any engineer on day one.",
    },
    {
      number: "02",
      title: "Performance by Default",
      description: "Speed is not an afterthought. We enforce strict sub-100ms budgets and zero layout shifts on every pull request.",
    },
    {
      number: "03",
      title: "Mathematical Aesthetics",
      description: "Interface polish and backend architecture are one discipline. Every pixel and micro-interaction is intentionally crafted.",
    },
    {
      number: "04",
      title: "Autonomous Ownership",
      description: "We don't need micromanagement. We take full architectural ownership from initial RFC to multi-region production rollout.",
    },
  ] as StudioValue[],
  team: [
    {
      name: "Soren Vance",
      role: "Founder & Lead Architect",
      initials: "SV",
      specialty: "Distributed Systems & Next.js",
      bio: "Former staff architect at distributed cloud infrastructure startups with 14 years experience building fault-tolerant systems.",
    },
    {
      name: "Astrid Lindholm",
      role: "Head of Systems & DevOps",
      initials: "AL",
      specialty: "Kubernetes & eBPF",
      bio: "Specializes in multi-region cloud resilience, zero-downtime cluster topology, and low-level Linux networking.",
    },
    {
      name: "Kaelen Chen",
      role: "Principal Frontend Engineer",
      initials: "KC",
      specialty: "Design Systems & WebGL",
      bio: "Obsessed with mathematical UI token systems, sub-millisecond interaction frames, and accessible web standards.",
    },
    {
      name: "Mira Thorne",
      role: "Lead AI & Data Architect",
      initials: "MT",
      specialty: "Vector Indexing & LLM Systems",
      bio: "Researches deterministic verification models, AST code synthesis pipelines, and low-latency embeddings.",
    },
  ] as TeamMember[],
  timeline: [
    {
      year: "2021",
      title: "Studio Founded",
      description: "Founded as a boutique systems consultancy specializing in Next.js and distributed cloud topologies.",
    },
    {
      year: "2023",
      title: "High-Assurance Practice",
      description: "Expanded focus to enterprise telemetry, zero-trust infrastructure, and precision design systems.",
    },
    {
      year: "2025",
      title: "AI & Vector Architecture",
      description: "Pioneered deterministic LLM verification pipelines and hybrid vector search for technical enterprises.",
    },
    {
      year: "2026",
      title: "Global Production Scale",
      description: "Over 50 mission-critical client systems deployed globally, processing billions of daily transactions.",
    },
  ] as StudioMilestone[],
};
