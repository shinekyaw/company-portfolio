export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  activities: string[];
}

export const processContent = {
  eyebrow: "HOW WE WORK",
  heading: "Predictable engineering with zero ambiguity",
  subheading:
    "We replace vague estimates and bloated ceremonies with mathematical precision, continuous integration, and transparent architectural artifacts.",
  steps: [
    {
      step: "PHASE 01",
      number: "01",
      title: "Discover",
      description:
        "Deep technical immersion. We deconstruct your requirements, audit legacy bottlenecks, and map performance budgets and security boundaries.",
      activities: ["System architecture mapping", "Constraint & SLA definition", "Threat model analysis", "Tech stack ratification"],
    },
    {
      step: "PHASE 02",
      number: "02",
      title: "Design",
      description:
        "Architecture before code. We deliver formal RFCs, typed schema specifications, and interactive glass design system prototypes.",
      activities: ["Formal RFC documentation", "Data model & API contracts", "Figma design token sync", "Benchmark test plan"],
    },
    {
      step: "PHASE 03",
      number: "03",
      title: "Build",
      description:
        "Precision execution. Daily mainbranch merges, strict TypeScript compilation, automated unit/e2e testing, and live preview staging environments.",
      activities: ["Test-driven development", "Automated CI/CD pipelines", "Daily preview deployments", "Performance budget gates"],
    },
    {
      step: "PHASE 04",
      number: "04",
      title: "Scale",
      description:
        "Production hardening. Zero-downtime rolling deployment, distributed load testing, telemetry dashboards, and comprehensive engineering handover.",
      activities: ["Load & chaos testing", "Telemetry & alert setup", "Runbooks & documentation", "Zero-downtime cutover"],
    },
  ] as ProcessStep[],
};
