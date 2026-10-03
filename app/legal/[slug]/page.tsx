import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const legalDocs: Record<
  string,
  { title: string; lastUpdated: string; sections: { heading: string; body: string }[] }
> = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "October 2026",
    sections: [
      {
        heading: "1. Data Collection & Usage",
        body: "We collect only information submitted directly through our inquiry forms and engagement channels. We do not sell, rent, or monetize client or visitor data.",
      },
      {
        heading: "2. Telemetry & Analytics",
        body: "Our web platforms use privacy-respecting, zero-cookie telemetry solely to measure aggregate system performance, Core Web Vitals, and uptime SLAs.",
      },
      {
        heading: "3. Confidentiality",
        body: "All architectural diagrams, code repositories, and project discussions are handled under strict mutual confidentiality protocols.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "October 2026",
    sections: [
      {
        heading: "1. Professional Services",
        body: "Old But Gold provides custom software architecture, distributed systems engineering, and team augmentation under formal Statements of Work (SOW).",
      },
      {
        heading: "2. Intellectual Property",
        body: "Unless specified otherwise in an executed master services agreement, all bespoke software code and deliverables created for clients become the exclusive intellectual property of the client upon final payment.",
      },
    ],
  },
  security: {
    title: "Security Disclosure Policy",
    lastUpdated: "October 2026",
    sections: [
      {
        heading: "1. Responsible Disclosure",
        body: "We welcome reports from security researchers. If you discover a vulnerability in our public systems, please disclose it to security@oldbutgold.engineering.",
      },
      {
        heading: "2. Safe Harbor",
        body: "We will not pursue legal action against researchers acting in good faith in accordance with responsible disclosure guidelines.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(legalDocs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocs[slug];
  if (!doc) return { title: "Document Not Found" };
  return {
    title: `${doc.title} — Legal`,
  };
}

export default async function LegalDocPage({ params }: Props) {
  const { slug } = await params;
  const doc = legalDocs[slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-[#c7d3ea] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to home</span>
          </Link>
        </div>

        <div className="max-w-[800px] space-y-8">
          <Eyebrow flanked={false} className="justify-start">
            LEGAL &amp; COMPLIANCE · {doc.lastUpdated}
          </Eyebrow>

          <h1
            className="font-display font-medium text-3xl sm:text-4xl md:text-[44px] leading-[1.16] tracking-tight text-skywash"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 500,
            }}
          >
            {doc.title}
          </h1>

          <div className="space-y-6 pt-6">
            {doc.sections.map((sec, i) => (
              <GlassCard key={i} className="p-6 sm:p-8">
                <h2 className="text-[20px] font-medium text-[#d8ecf8] mb-3">
                  {sec.heading}
                </h2>
                <p className="text-[15px] leading-relaxed text-[#c7d3ea]">
                  {sec.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
