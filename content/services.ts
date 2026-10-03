export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: "Globe" | "Smartphone" | "Cloud" | "Sparkles" | "Layers" | "Users";
  deliverables: string[];
  capabilities: string[];
}

export const servicesContent = {
  eyebrow: "WHAT WE BUILD",
  heading: "High-assurance systems engineered for scale",
  subheading:
    "We partner with ambitious teams to architect, engineer, and deploy mission-critical software systems that operate under extreme demands.",
  items: [
    {
      id: "web-platforms",
      number: "01",
      title: "Web Platforms",
      shortDescription: "Ultra-fast, fault-tolerant web applications built on Next.js, React Server Components, and distributed edge architectures.",
      fullDescription:
        "We build web applications that load in milliseconds, scale effortlessly to millions of concurrent users, and maintain zero regression under rigorous production testing.",
      icon: "Globe",
      deliverables: [
        "Distributed Next.js & React architectures",
        "Sub-100ms global latency edge rendering",
        "Type-safe tRPC and GraphQL data layers",
        "Comprehensive automated E2E & integration test suites",
      ],
      capabilities: ["Next.js App Router", "TypeScript", "Tailwind CSS", "WebAssembly", "Edge Middleware"],
    },
    {
      id: "mobile-apps",
      number: "02",
      title: "Mobile Apps",
      shortDescription: "Native and high-fidelity cross-platform mobile experiences with fluid 120fps gesture-driven interfaces.",
      fullDescription:
        "Engineered for deep platform integration, seamless offline synchronization, and frictionless biometric security across iOS and Android.",
      icon: "Smartphone",
      deliverables: [
        "High-performance React Native & Swift architectures",
        "Offline-first sync engines with conflict resolution",
        "Biometric security and encrypted on-device storage",
        "Fluid 120fps physics-based animations",
      ],
      capabilities: ["React Native", "SwiftUI", "Kotlin", "SQLite / WatermelonDB", "Push Notifications"],
    },
    {
      id: "cloud-devops",
      number: "03",
      title: "Cloud & DevOps",
      shortDescription: "Immutable infrastructure, automated CI/CD pipelines, and multi-region Kubernetes deployments.",
      fullDescription:
        "Infrastructure as code designed for zero-downtime rolling releases, automated self-healing clusters, and military-grade telemetry monitoring.",
      icon: "Cloud",
      deliverables: [
        "Terraform & Pulumi infrastructure blueprints",
        "Hardened multi-region Kubernetes clusters",
        "Sub-3 minute CI/CD pipeline automation",
        "Real-time OpenTelemetry and Grafana monitoring",
      ],
      capabilities: ["AWS / GCP", "Kubernetes", "Terraform", "Docker", "OpenTelemetry"],
    },
    {
      id: "ai-integration",
      number: "04",
      title: "AI Integration",
      shortDescription: "Deterministic LLM pipelines, vector search retrieval (RAG), and custom agentic orchestration systems.",
      fullDescription:
        "Moving beyond fragile wrappers to build resilient, guardrailed AI workflows with verifiable outputs, semantic indexing, and private model deployments.",
      icon: "Sparkles",
      deliverables: [
        "Hybrid dense/sparse vector retrieval engines",
        "Deterministic agentic workflow orchestrators",
        "Token-efficient semantic caching layers",
        "On-premise and private VPC model hosting",
      ],
      capabilities: ["pgvector", "LangChain / LlamaIndex", "Local LLM Serving", "Semantic Caching", "Guardrails"],
    },
    {
      id: "design-systems",
      number: "05",
      title: "Design Systems",
      shortDescription: "Mathematical design tokens, accessible component primitives, and unified multi-platform UI libraries.",
      fullDescription:
        "Bridging Figma design tokens to executable TypeScript components with strict WCAG AA compliance, dark-first aesthetics, and zero layout shift.",
      icon: "Layers",
      deliverables: [
        "Multi-tier token architectures (Figma to CSS)",
        "Fully accessible WCAG 2.2 AA component suites",
        "Interactive Storybook component documentation",
        "Automated visual regression testing pipelines",
      ],
      capabilities: ["Design Tokens", "Radix Primitives", "Tailwind CSS", "Storybook", "Framer Motion"],
    },
    {
      id: "team-augmentation",
      number: "06",
      title: "Team Augmentation",
      shortDescription: "Principal and staff engineers embedded directly into your sprints to elevate architecture and velocity.",
      fullDescription:
        "Senior engineering talent that integrates seamlessly into your git workflow, mentoring your team, establishing best practices, and unblocking critical milestones.",
      icon: "Users",
      deliverables: [
        "Immediate senior/staff engineering capacity",
        "Code quality and architectural audit reviews",
        "Engineering culture and tooling acceleration",
        "Knowledge transfer and documentation ownership",
      ],
      capabilities: ["Tech Leadership", "Architecture Review", "Pair Programming", "Sprint Delivery"],
    },
  ] as ServiceItem[],
};
