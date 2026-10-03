export interface Metric {
  value: string;
  label: string;
  change?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  year: string;
  tagline: string;
  summary: string;
  category: "Web Platforms" | "Cloud & Infrastructure" | "AI & Systems";
  tags: string[];
  metrics: Metric[];
  challenge: string;
  solution: string;
  result: string;
  architectureNotes: string[];
  mockupType: "editor" | "telemetry" | "cluster";
}

export const caseStudiesContent = {
  eyebrow: "SELECTED WORK",
  heading: "Engineered for high-stakes environments",
  subheading: "A detailed breakdown of architectural decisions, systems built, and measurable engineering outcomes.",
  categories: ["All", "Web Platforms", "Cloud & Infrastructure", "AI & Systems"],
  items: [
    {
      slug: "aether-core",
      title: "Real-time Telemetry & Asset Coordination for Aether Dynamics",
      client: "Aether Dynamics",
      year: "2025",
      tagline: "Sub-millisecond WebSocket streaming for 150,000 concurrent IoT telemetry streams.",
      summary:
        "Architected an ultra-low-latency web telemetry console and distributed Rust/WebSocket pipeline, replacing a legacy system with zero packet loss and 99.999% availability.",
      category: "Web Platforms",
      tags: ["Next.js App Router", "Rust", "WebSockets", "ClickHouse", "Tailwind CSS"],
      metrics: [
        { value: "4.2ms", label: "P99 Telemetry Ingestion" },
        { value: "150k", label: "Concurrent Edge Streams" },
        { value: "99.999%", label: "Uptime SLA Achieved" },
      ],
      challenge:
        "Aether's legacy telemetry portal struggled under high load, causing UI freezes, buffer overflows, and 800ms latencies during critical asset operations.",
      solution:
        "We designed a zero-copy data ingestion pipeline backed by ClickHouse, combined with WebAssembly-accelerated charting in Next.js that renders 60fps canvas visualizations without CPU throttling.",
      result:
        "Latency dropped from 800ms to 4.2ms at the 99th percentile. Infrastructure compute spend decreased by 64% due to optimized binary protocol streaming.",
      architectureNotes: [
        "Binary Protobuf serialization over TLS-encrypted WebSockets",
        "OffscreenCanvas rendering worker for 60fps timeline scrubbing",
        "Partitioned ClickHouse columnar storage handling 2B rows/day",
      ],
      mockupType: "telemetry",
    },
    {
      slug: "meridian-cloud",
      title: "Multi-Region Kubernetes Cloud Fabric for Meridian Labs",
      client: "Meridian Labs",
      year: "2025",
      tagline: "Automated multi-region failover and zero-downtime deployment pipelines.",
      summary:
        "Re-engineered a mission-critical financial ledger from monolithic VMs to multi-region immutable Kubernetes clusters with automated BGP anycast failover.",
      category: "Cloud & Infrastructure",
      tags: ["Kubernetes", "Terraform", "Go", "eBPF / Cilium", "AWS"],
      metrics: [
        { value: "0.00s", label: "Failover Downtime" },
        { value: "3.2m", label: "Full Cluster Spin-Up" },
        { value: "-58%", label: "Cloud Compute Cost" },
      ],
      challenge:
        "Single-region vulnerability and manual 4-hour deployment windows created significant operational risks for high-volume transactions across Europe and North America.",
      solution:
        "Implemented GitOps-managed multi-region active-active clusters with eBPF-based service mesh routing and automated canary validation.",
      result:
        "Achieved automated sub-second traffic routing during regional outages with zero manual intervention and an immediate 58% cloud cost reduction.",
      architectureNotes: [
        "Cilium service mesh with mTLS encryption everywhere",
        "Terraform-driven immutable infrastructure with drift detection",
        "Automated chaos engineering suites executed on every staging build",
      ],
      mockupType: "cluster",
    },
    {
      slug: "synapse-ai",
      title: "Deterministic Code Analysis & Vector Search for Synapse",
      client: "Synapse Cloud",
      year: "2026",
      tagline: "Semantic code search across 40M lines with verifiable AST-based validation.",
      summary:
        "Engineered an enterprise semantic code retrieval platform using hybrid vector-lexical indexing, custom AST parsers, and verifiable LLM code synthesis.",
      category: "AI & Systems",
      tags: ["TypeScript", "Python / FastAPI", "pgvector", "Tree-sitter", "Docker"],
      metrics: [
        { value: "48ms", label: "Hybrid Search Latency" },
        { value: "40M+", label: "Lines Indexed in Real-Time" },
        { value: "98.4%", label: "AST Synthesis Accuracy" },
      ],
      challenge:
        "Engineers faced hallucination and syntax errors from standard LLM completions when querying proprietary multi-language enterprise repositories.",
      solution:
        "Built a dual-stage pipeline combining Tree-sitter AST validation with pgvector semantic similarity, enforcing strict deterministic syntax guarantees prior to output generation.",
      result:
        "Syntax validation accuracy surged to 98.4%, while developer code discovery time decreased by 78% across 1,200 active enterprise developers.",
      architectureNotes: [
        "Tree-sitter grammar parsers for real-time syntax tree generation",
        "Quantized embedding models hosted on private NVMe-backed instances",
        "Token-optimized hierarchical semantic windowing algorithms",
      ],
      mockupType: "editor",
    },
  ] as CaseStudy[],
};
