export const capabilitiesContent = {
  eyebrow: "SYSTEM CAPABILITIES",
  heading: "Your stack. Your rules.",
  subheading:
    "We adapt seamlessly to your technical constraints, compliance frameworks, and deployment targets without compromising velocity.",
  codeSnippet: `// oldbutgold.config.ts
import { defineStudioConfig } from "@oldbutgold/core";

export default defineStudioConfig({
  engine: "nextjs-15-app-router",
  assuranceLevel: "mission-critical",
  infrastructure: {
    target: "multi-region-edge",
    failover: "automated-anycast",
    telemetry: "opentelemetry",
  },
  compliance: ["SOC2-TypeII", "GDPR", "HIPAA-ready"],
  performanceBudget: {
    lcp: "< 0.8s",
    inp: "< 50ms",
    cls: 0.0,
  },
});`,
  inspectors: {
    deployTarget: {
      label: "Deploy Target",
      value: "Multi-Region Edge (Vercel / AWS / GCP)",
      status: "Active (Global)",
    },
    techStack: {
      label: "Selected Stack",
      tags: ["Next.js 15+", "TypeScript", "Tailwind CSS", "Rust", "ClickHouse", "Kubernetes"],
    },
    timezoneOverlap: {
      label: "Timezone Overlap",
      value: "8 hrs / day",
      range: "US & EU Core Hours",
    },
    teamSize: {
      label: "Engineering Squad",
      size: "2–6 Senior Engineers",
      sprintVelocity: "100% Dedicated",
    },
  },
};
