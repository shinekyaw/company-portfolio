export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      code?: string;
      bullets?: string[];
    }[];
    conclusion: string;
  };
}

export const blogContent = {
  eyebrow: "ENGINEERING JOURNAL",
  heading: "Architectural insights & field notes",
  subheading:
    "Deep technical essays on distributed systems, Next.js optimization, deterministic AI pipelines, and design token mathematics.",
  posts: [
    {
      slug: "zero-layout-shift-server-components",
      title: "Zero Layout Shift in Complex React Server Component Layouts",
      excerpt: "How we eliminate Cumulative Layout Shift (CLS) in high-throughput data dashboards using CSS grid containment and streaming boundaries.",
      date: "2026-09-14",
      readingTime: "6 min read",
      category: "Frontend Architecture",
      author: {
        name: "Kaelen Chen",
        role: "Principal Frontend Engineer",
      },
      content: {
        intro:
          "Cumulative Layout Shift (CLS) is one of the most frustrating performance regressions in modern client-rendered interfaces. When streaming React Server Components (RSC) across variable network conditions, layout instability often creeps in unless strict dimensional reservations and containment boundaries are established at the root CSS layer.",
        sections: [
          {
            heading: "The Root Problem with Variable RSC Stream Payloads",
            body: "When Server Components stream in out of order, the browser layout engine recalculates the DOM geometry dynamically. Without explicit aspect ratios and CSS container containment, card boundaries reflow, triggering perceptible jumps.",
            code: `/* Enforcing strict layout containment on streamed slots */
.stream-slot {
  contain-intrinsic-size: auto 340px;
  content-visibility: auto;
  contain: layout paint;
}`,
            bullets: [
              "Always set `contain-intrinsic-size` on deferred skeleton placeholders",
              "Use CSS Grid template areas to anchor slot coordinates",
              "Prevent font-swap layout shifts with `next/font` size-adjust metrics",
            ],
          },
          {
            heading: "Mathematical Design Tokens and Fixed Aspect Ratios",
            body: "By defining strict spatial dimensions in the Tailwind `@theme` configuration, our components inherit non-collapsible containers before any server data payload resolves over the wire.",
          },
        ],
        conclusion:
          "By combining Next.js 15 streaming boundaries with CSS containment, we guarantee a 0.00 CLS score even on throttled 3G cellular connections.",
      },
    },
    {
      slug: "deterministic-vector-search-ast",
      title: "Building Deterministic Code Search with Tree-sitter and pgvector",
      excerpt: "Moving beyond imprecise naive semantic search by coupling AST grammar extraction with dense vector embeddings.",
      date: "2026-08-28",
      readingTime: "8 min read",
      category: "AI & Distributed Systems",
      author: {
        name: "Mira Thorne",
        role: "Lead AI & Data Architect",
      },
      content: {
        intro:
          "Naive vector search frequently fails in enterprise software codebases because embeddings capture vague semantic relationships without respecting strict syntactic scopes, typed declarations, or lexical hierarchy.",
        sections: [
          {
            heading: "Dual-Stage AST & Embedding Pipeline",
            body: "We process source code through Tree-sitter parsers to extract semantic tokens, function signatures, and dependency call graphs prior to generating high-dimensional vectors.",
            code: `// Schema for deterministic code embedding chunking
interface AstVectorNode {
  nodeType: "function_declaration" | "interface_definition";
  scope: string[];
  signature: string;
  embedding: number[]; // 1536-dim vector
  astHash: string;
}`,
          },
          {
            heading: "Query Routing and Lexical Reranking",
            body: "Hybrid reciprocal rank fusion (RRF) combines exact keyword matches with cosine distance vectors, ensuring that variable names and function signatures take precedence over generic descriptions.",
          },
        ],
        conclusion:
          "The combination of syntactic grammar verification and hybrid vector retrieval delivers a 98.4% precision rate on multi-repository enterprise code discovery.",
      },
    },
    {
      slug: "ebpf-multi-region-routing",
      title: "Sub-Millisecond Multi-Region Traffic Balancing with eBPF and Cilium",
      excerpt: "Replacing traditional reverse proxies with kernel-level eBPF routing programs for ultra-low latency failovers.",
      date: "2026-07-19",
      readingTime: "7 min read",
      category: "Cloud & DevOps",
      author: {
        name: "Astrid Lindholm",
        role: "Head of Systems & DevOps",
      },
      content: {
        intro:
          "Traditional L7 reverse proxies add significant overhead in high-frequency packet routing. By programming the Linux kernel directly using eBPF, we achieve near wire-speed packet redirection and automatic failover across cloud regions.",
        sections: [
          {
            heading: "Bypassing Userspace Socket Traversal",
            body: "Cilium's eBPF map routing short-circuits socket traversals, directing TCP packets directly between network interfaces without context switching between kernel space and user space.",
          },
          {
            heading: "Automated BGP Anycast Health Probing",
            body: "Kernel-level health check hooks detect node failures in under 100 milliseconds, updating anycast routing tables before client connection timeouts trigger.",
          },
        ],
        conclusion:
          "eBPF routing reduces p99 connection handshake times by 42% while providing cryptographically authenticated mTLS mesh security across all cloud zones.",
      },
    },
  ] as BlogPost[],
};
