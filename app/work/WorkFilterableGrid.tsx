"use client";

import React, { useState } from "react";
import { caseStudiesContent, CaseStudy } from "@/content/caseStudies";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Cpu, Network, Database } from "lucide-react";

function MockupPreview({ type }: { type: CaseStudy["mockupType"] }) {
  if (type === "telemetry") {
    return (
      <div className="w-full h-40 rounded-[12px] bg-[rgba(5,6,15,0.7)] p-4 shadow-hairline flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#9da7ba]">
          <span className="flex items-center gap-1">
            <Cpu size={12} className="text-[#98c0ef]" /> 150k STREAMS
          </span>
          <span className="text-[#98c0ef]">4.2ms P99</span>
        </div>
        <div className="h-16 flex items-end gap-1 pt-2">
          {[30, 50, 45, 80, 70, 90, 85, 95, 60, 85, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-[rgba(186,214,247,0.2)] rounded-[1px]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="text-[10px] font-mono text-[#c7d3ea]">
          INGESTION: RUST · ZERO LOSS
        </div>
      </div>
    );
  }

  if (type === "cluster") {
    return (
      <div className="w-full h-40 rounded-[12px] bg-[rgba(5,6,15,0.7)] p-4 shadow-hairline flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#9da7ba]">
          <span className="flex items-center gap-1">
            <Network size={12} className="text-[#98c0ef]" /> MULTI-REGION K8S
          </span>
          <span className="text-[#98c0ef]">0.00s RTO</span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto font-mono text-center">
          <div className="p-1.5 rounded-[4px] bg-[rgba(186,214,247,0.06)] text-[10px] text-[#d8ecf8]">
            US-East
          </div>
          <div className="p-1.5 rounded-[4px] bg-[rgba(186,214,247,0.06)] text-[10px] text-[#d8ecf8]">
            EU-Central
          </div>
          <div className="p-1.5 rounded-[4px] bg-[rgba(186,214,247,0.06)] text-[10px] text-[#d8ecf8]">
            AP-East
          </div>
        </div>
        <div className="text-[10px] font-mono text-[#c7d3ea]">
          eBPF CILIUM MESH ROUTING
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-40 rounded-[12px] bg-[rgba(5,6,15,0.7)] p-4 shadow-hairline flex flex-col justify-between">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#9da7ba]">
        <span className="flex items-center gap-1">
          <Database size={12} className="text-[#98c0ef]" /> PGVECTOR + AST
        </span>
        <span className="text-[#98c0ef]">98.4% ACC</span>
      </div>
      <div className="font-mono text-[11px] text-[#c7d3ea] space-y-0.5 my-auto">
        <div className="text-[#98c0ef]">AST match: 0.998</div>
        <div className="text-[#9da7ba]">Latency: 48ms</div>
      </div>
      <div className="text-[10px] font-mono text-[#c7d3ea]">
        DETERMINISTIC CODE EMBEDDINGS
      </div>
    </div>
  );
}

export function WorkFilterableGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? caseStudiesContent.items
      : caseStudiesContent.items.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div>
      {/* Category Filter Pills */}
      <div
        role="group"
        aria-label="Filter case studies by category"
        className="flex flex-wrap items-center justify-center gap-2 mb-12"
      >
        {caseStudiesContent.categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedCategory(category)}
              className="cursor-pointer focus:outline-none"
            >
              <Badge
                active={isSelected}
                className="px-4 py-2 text-[13px] rounded-[999px]"
              >
                {category}
              </Badge>
            </button>
          );
        })}
      </div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((study) => (
          <GlassCard
            key={study.slug}
            interactive
            className="p-8 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              <div className="font-mono text-[12px] text-[#9da7ba] uppercase tracking-wider mb-1">
                {study.client} · {study.year}
              </div>

              <h2
                className="text-[22px] sm:text-[26px] font-medium leading-[1.2] text-[#d8ecf8]"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 500,
                }}
              >
                {study.title}
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-[#c7d3ea]">
                {study.summary}
              </p>

              <div className="my-6">
                <MockupPreview type={study.mockupType} />
              </div>
            </div>

            <div className="pt-6 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="grid grid-cols-3 gap-4">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-[18px] font-medium text-[#d8ecf8] tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-mono text-[#9da7ba]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" href={`/work/${study.slug}`}>
                <span>View project</span>
                <ArrowRight size={14} className="ml-1.5" />
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
