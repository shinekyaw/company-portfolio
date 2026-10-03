"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudiesContent, CaseStudy } from "@/content/caseStudies";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Cpu, Network, Database } from "lucide-react";
import { cn } from "@/lib/utils";

function AbstractMockup({ type }: { type: CaseStudy["mockupType"] }) {
  if (type === "telemetry") {
    return (
      <div className="w-full h-48 rounded-[12px] bg-[rgba(5,6,15,0.7)] p-4 shadow-hairline flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#9da7ba]">
          <span className="flex items-center gap-1.5">
            <Cpu size={13} className="text-[#98c0ef]" /> 150k STREAMS / SEC
          </span>
          <span className="text-[#98c0ef]">STABLE · 0.00% DROP</span>
        </div>
        {/* Abstract SVG waveform lines */}
        <div className="h-24 w-full relative flex items-center">
          <svg className="w-full h-full" viewBox="0 0 400 80" fill="none" preserveAspectRatio="none">
            <path
              d="M0 50 Q 50 20, 100 45 T 200 30 T 300 60 T 400 25"
              stroke="#98c0ef"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M0 60 Q 60 30, 120 55 T 240 40 T 320 50 T 400 35"
              stroke="rgba(186,215,247,0.3)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
        <div className="flex items-center justify-between text-[11px] font-mono text-[#c7d3ea] shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)] pt-2">
          <span>INGESTION: RUST / CLICKHOUSE</span>
          <span className="text-[#d8ecf8]">4.2ms P99</span>
        </div>
      </div>
    );
  }

  if (type === "cluster") {
    return (
      <div className="w-full h-48 rounded-[12px] bg-[rgba(5,6,15,0.7)] p-4 shadow-hairline flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#9da7ba]">
          <span className="flex items-center gap-1.5">
            <Network size={13} className="text-[#98c0ef]" /> K8S MULTI-REGION TOPOLOGY
          </span>
          <span className="text-[#98c0ef]">eBPF ACTIVE</span>
        </div>
        {/* Node topology grid */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          {["US-East", "EU-Central", "AP-East"].map((region, i) => (
            <div
              key={region}
              className="rounded-[6px] bg-[rgba(186,214,247,0.05)] p-2 shadow-hairline text-center font-mono"
            >
              <div className="text-[10px] text-[#9da7ba]">{region}</div>
              <div className="text-[12px] text-[#d8ecf8] font-medium mt-0.5">
                {i === 0 ? "PRIMARY" : "REPLICA"}
              </div>
              <div className="text-[9px] text-[#98c0ef] mt-1">● SYNCED</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[11px] font-mono text-[#c7d3ea] shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)] pt-2">
          <span>AUTO-FAILOVER: ANYCAST</span>
          <span className="text-[#d8ecf8]">0.00s RTO</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-48 rounded-[12px] bg-[rgba(5,6,15,0.7)] p-4 shadow-hairline flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#9da7ba]">
        <span className="flex items-center gap-1.5">
          <Database size={13} className="text-[#98c0ef]" /> AST HYBRID VECTOR INDEX
        </span>
        <span className="text-[#98c0ef]">40M LINES</span>
      </div>
      <div className="font-mono text-[11px] text-[#c7d3ea] space-y-1 my-auto">
        <div className="text-[#98c0ef]">query: &quot;deterministic_parser_v2&quot;</div>
        <div className="text-[#9da7ba]">├─ AST match: 0.998 [TypeScript]</div>
        <div className="text-[#9da7ba]">└─ Cosine dist: 0.042 (48ms)</div>
      </div>
      <div className="flex items-center justify-between text-[11px] font-mono text-[#c7d3ea] shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)] pt-2">
        <span>PGVECTOR + TREE-SITTER</span>
        <span className="text-[#d8ecf8]">98.4% ACC</span>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="py-20 md:py-28 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader
            eyebrow={caseStudiesContent.eyebrow}
            heading={caseStudiesContent.heading}
            body={caseStudiesContent.subheading}
          />
        </motion.div>

        {/* 3 Case Study Cards: first is full width, next two are 2-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {caseStudiesContent.items.map((study, index) => {
            const isFullWidth = index === 0;
            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className={cn(isFullWidth && "md:col-span-2")}
              >
                <GlassCard interactive className="h-full p-8 flex flex-col justify-between">
                  <div>
                    {/* Tags row */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    <div className={cn("grid gap-8", isFullWidth ? "lg:grid-cols-2" : "grid-cols-1")}>
                      <div>
                        <span className="font-mono text-[12px] text-[#9da7ba] uppercase tracking-wider block mb-1">
                          {study.client} · {study.year}
                        </span>
                        <h3
                          className="text-[24px] sm:text-[28px] font-medium leading-[1.2] text-[#d8ecf8]"
                          style={{
                            fontFamily: "var(--font-space-grotesk), sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          {study.title}
                        </h3>
                        <p className="mt-4 text-[16px] leading-relaxed text-[#c7d3ea]">
                          {study.summary}
                        </p>
                      </div>

                      {/* Abstract Mockup */}
                      <div className="flex flex-col justify-center">
                        <AbstractMockup type={study.mockupType} />
                      </div>
                    </div>
                  </div>

                  {/* Metrics & Action Row */}
                  <div className="mt-8 pt-6 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="grid grid-cols-3 gap-6 sm:gap-8">
                      {study.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-mono text-[20px] sm:text-[24px] font-medium text-[#d8ecf8] tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-[11px] font-mono text-[#9da7ba] mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" href={`/work/${study.slug}`}>
                      <span>Read case study</span>
                      <ArrowRight size={14} className="ml-1.5" />
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
