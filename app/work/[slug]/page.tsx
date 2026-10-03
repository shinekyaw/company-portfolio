import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudiesContent } from "@/content/caseStudies";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesContent.items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesContent.items.find((item) => item.slug === slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const studyIndex = caseStudiesContent.items.findIndex(
    (item) => item.slug === slug
  );

  if (studyIndex === -1) {
    notFound();
  }

  const study = caseStudiesContent.items[studyIndex];
  const nextStudy =
    caseStudiesContent.items[(studyIndex + 1) % caseStudiesContent.items.length];

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[14px] text-[#c7d3ea] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to selected work</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="max-w-[900px] space-y-6">
          <Eyebrow flanked={false} className="justify-start">
            {study.client} · {study.year} · {study.category}
          </Eyebrow>

          <h1
            className="font-display font-medium text-3xl sm:text-4xl md:text-[44px] leading-[1.16] tracking-tight text-skywash"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 500,
            }}
          >
            {study.title}
          </h1>

          <p className="text-[18px] sm:text-[20px] text-[#c7d3ea] leading-relaxed">
            {study.tagline}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {study.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Hero Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-16">
          {study.metrics.map((m) => (
            <GlassCard key={m.label} elevated className="p-6 text-center">
              <div className="font-mono text-3xl sm:text-4xl font-medium text-[#d8ecf8] tabular-nums">
                {m.value}
              </div>
              <div className="text-[13px] font-mono text-[#9da7ba] mt-2">
                {m.label}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Deep Dive Breakdown: Challenge, Solution, Result */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Challenge */}
          <GlassCard className="p-8">
            <div className="font-mono text-[12px] text-[#9da7ba] uppercase tracking-wider mb-2">
              01 · The Challenge
            </div>
            <h2 className="text-[20px] font-medium text-[#d8ecf8] mb-4">
              Operational Fragility &amp; Bottlenecks
            </h2>
            <p className="text-[15px] leading-relaxed text-[#c7d3ea]">
              {study.challenge}
            </p>
          </GlassCard>

          {/* Solution */}
          <GlassCard className="p-8">
            <div className="font-mono text-[12px] text-[#9da7ba] uppercase tracking-wider mb-2">
              02 · The Solution
            </div>
            <h2 className="text-[20px] font-medium text-[#d8ecf8] mb-4">
              Architectural Refactoring
            </h2>
            <p className="text-[15px] leading-relaxed text-[#c7d3ea]">
              {study.solution}
            </p>
          </GlassCard>

          {/* Result */}
          <GlassCard className="p-8">
            <div className="font-mono text-[12px] text-[#9da7ba] uppercase tracking-wider mb-2">
              03 · The Outcome
            </div>
            <h2 className="text-[20px] font-medium text-[#d8ecf8] mb-4">
              Measurable Production Impact
            </h2>
            <p className="text-[15px] leading-relaxed text-[#c7d3ea]">
              {study.result}
            </p>
          </GlassCard>
        </div>

        {/* Architecture Notes */}
        <GlassCard elevated className="p-8 md:p-10 mb-16">
          <h2 className="font-mono text-[13px] uppercase tracking-wider text-[#98c0ef] mb-6">
            Architectural Implementation Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.architectureNotes.map((note, i) => (
              <div key={i} className="flex items-start gap-3 text-[14px] text-[#d1e4fa]">
                <CheckCircle2 size={18} className="text-[#98c0ef] shrink-0 mt-0.5" />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Next Project Link */}
        <div className="pt-8 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.12)] flex items-center justify-between">
          <Link
            href="/work"
            className="text-[14px] text-[#9da7ba] hover:text-[#d1e4fa] transition-colors"
          >
            ← All Case Studies
          </Link>

          <Link
            href={`/work/${nextStudy.slug}`}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#d1e4fa] hover:text-white transition-colors"
          >
            <span>Next Project: {nextStudy.client}</span>
            <ArrowRight size={16} className="text-[#98c0ef]" />
          </Link>
        </div>
      </Container>

      {/* Exactly one primary CTA button on this page */}
      <div className="mt-20">
        <CtaBand isPrimary={true} />
      </div>
    </div>
  );
}
