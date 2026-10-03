"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { capabilitiesContent } from "@/content/capabilities";
import { Sliders, Server, Clock, Users, Check } from "lucide-react";

export function BrowserFrame() {
  const { codeSnippet, inspectors } = capabilitiesContent;
  const [overlapHours, setOverlapHours] = useState(8);
  const [squadSize, setSquadSize] = useState(4);

  return (
    <div className="relative w-full max-w-[1040px] mx-auto my-12">
      {/* Main Browser Window Frame */}
      <div className="rounded-[16px] bg-[rgba(5,6,15,0.95)] shadow-glass-modal overflow-hidden">
        {/* Chrome header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[rgba(186,214,247,0.03)] shadow-[inset_0_-1px_0_0_rgba(186,215,247,0.08)]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#2f343e]" />
            <span className="w-3 h-3 rounded-full bg-[#2f343e]" />
            <span className="w-3 h-3 rounded-full bg-[#2f343e]" />
          </div>
          <div className="rounded-[6px] bg-[rgba(199,211,234,0.06)] px-4 py-1 text-[12px] font-mono text-[#9da7ba] shadow-hairline">
            oldbutgold.config.ts · Studio Orchestration
          </div>
          <div className="w-12 text-right">
            <span className="inline-block w-2 h-2 rounded-full bg-[#98c0ef] animate-pulse" />
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 md:p-8 font-mono text-[13px] md:text-[14px] leading-relaxed text-[#c7d3ea] overflow-x-auto">
          <pre className="text-[#c7d3ea]">
            <code>
              {codeSnippet.split("\n").map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[#9da7ba]/40 select-none w-6 text-right shrink-0">
                    {i + 1}
                  </span>
                  <span>
                    {line.includes("//") ? (
                      <span className="text-[#9da7ba]">{line}</span>
                    ) : line.includes("import") || line.includes("export default") ? (
                      <span className="text-[#b6d9fc]">{line}</span>
                    ) : line.includes(":") ? (
                      <span>
                        <span className="text-[#d8ecf8]">
                          {line.split(":")[0]}
                        </span>
                        :
                        <span className="text-[#98c0ef]">
                          {line.split(":").slice(1).join(":")}
                        </span>
                      </span>
                    ) : (
                      line
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>

      {/* 4 Floating Inspector Panels (Design-tool workspace aesthetic) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* Panel 1: Tech Stack */}
        <GlassCard elevated className="p-4 space-y-2.5">
          <div className="flex items-center gap-2 text-[12px] font-mono text-[#d1e4fa]">
            <Sliders size={14} strokeWidth={1.5} className="text-[#98c0ef]" />
            <span>{inspectors.techStack.label}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {inspectors.techStack.tags.map((t) => (
              <Badge key={t} className="text-[11px]">
                {t}
              </Badge>
            ))}
          </div>
        </GlassCard>

        {/* Panel 2: Deploy Target */}
        <GlassCard elevated className="p-4 space-y-2.5">
          <div className="flex items-center justify-between text-[12px] font-mono text-[#d1e4fa]">
            <span className="flex items-center gap-2">
              <Server size={14} strokeWidth={1.5} className="text-[#98c0ef]" />
              {inspectors.deployTarget.label}
            </span>
            <span className="inline-flex items-center text-[10px] text-[#98c0ef]">
              <Check size={11} className="mr-0.5" /> LIVE
            </span>
          </div>
          <p className="text-[12px] text-[#c7d3ea] font-mono">
            {inspectors.deployTarget.value}
          </p>
          <div className="text-[11px] font-mono text-[#9da7ba]">
            Status: {inspectors.deployTarget.status}
          </div>
        </GlassCard>

        {/* Panel 3: Timezone Overlap */}
        <GlassCard elevated className="p-4 space-y-2.5">
          <div className="flex items-center justify-between text-[12px] font-mono text-[#d1e4fa]">
            <span className="flex items-center gap-2">
              <Clock size={14} strokeWidth={1.5} className="text-[#98c0ef]" />
              {inspectors.timezoneOverlap.label}
            </span>
            <span className="text-[12px] font-mono text-[#d8ecf8] tabular-nums">
              {overlapHours}h
            </span>
          </div>
          <input
            type="range"
            min="4"
            max="12"
            value={overlapHours}
            onChange={(e) => setOverlapHours(Number(e.target.value))}
            className="w-full h-1 bg-[rgba(186,214,247,0.15)] rounded-lg appearance-none cursor-pointer accent-[#98c0ef]"
          />
          <div className="text-[11px] font-mono text-[#9da7ba]">
            {inspectors.timezoneOverlap.range}
          </div>
        </GlassCard>

        {/* Panel 4: Team Size Stepper */}
        <GlassCard elevated className="p-4 space-y-2.5">
          <div className="flex items-center justify-between text-[12px] font-mono text-[#d1e4fa]">
            <span className="flex items-center gap-2">
              <Users size={14} strokeWidth={1.5} className="text-[#98c0ef]" />
              {inspectors.teamSize.label}
            </span>
            <div className="flex items-center gap-1.5 font-mono">
              <button
                type="button"
                onClick={() => setSquadSize(Math.max(2, squadSize - 1))}
                className="w-5 h-5 rounded-[4px] bg-[rgba(199,211,234,0.1)] text-white flex items-center justify-center text-[12px] hover:bg-[rgba(199,211,234,0.2)] shadow-hairline"
              >
                -
              </button>
              <span className="text-[12px] text-[#d8ecf8] tabular-nums px-1">
                {squadSize}
              </span>
              <button
                type="button"
                onClick={() => setSquadSize(Math.min(8, squadSize + 1))}
                className="w-5 h-5 rounded-[4px] bg-[rgba(199,211,234,0.1)] text-white flex items-center justify-center text-[12px] hover:bg-[rgba(199,211,234,0.2)] shadow-hairline"
              >
                +
              </button>
            </div>
          </div>
          <p className="text-[12px] text-[#c7d3ea] font-mono">
            {squadSize} Senior Engineers
          </p>
          <div className="text-[11px] font-mono text-[#9da7ba]">
            {inspectors.teamSize.sprintVelocity}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
