import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GitCommit, Radio } from "lucide-react";

export function DeployStatusCard({ className }: { className?: string }) {
  return (
    <GlassCard elevated className={className}>
      <div className="flex items-center justify-between pb-3 mb-3 shadow-[inset_0_-1px_0_0_rgba(186,215,247,0.08)]">
        <div className="flex items-center gap-2">
          <Radio size={14} strokeWidth={1.5} className="text-[#98c0ef] animate-pulse" />
          <span className="font-mono text-[12px] font-medium text-[#d1e4fa]">
            DEPLOYMENT: PROD
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#9da7ba]">
          v2.14.0
        </span>
      </div>

      <div className="space-y-3 font-mono text-[12px]">
        <div className="flex items-center justify-between">
          <span className="text-[#9da7ba] flex items-center gap-1.5">
            <GitCommit size={14} strokeWidth={1.5} className="text-[#c7d3ea]" />
            commit: 7f3b89a
          </span>
          <span className="text-[#d8ecf8]">main</span>
        </div>

        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#c7d3ea]">iad1 (US-East)</span>
            <span className="text-[#d8ecf8] tabular-nums">1.2ms · 100%</span>
          </div>
          <div className="w-full bg-[rgba(186,214,247,0.1)] h-1 rounded-full overflow-hidden">
            <div className="bg-[#98c0ef] h-full w-full" />
          </div>

          <div className="flex items-center justify-between text-[11px] pt-1">
            <span className="text-[#c7d3ea]">fra1 (EU-Central)</span>
            <span className="text-[#d8ecf8] tabular-nums">1.8ms · 100%</span>
          </div>
          <div className="w-full bg-[rgba(186,214,247,0.1)] h-1 rounded-full overflow-hidden">
            <div className="bg-[#98c0ef] h-full w-full" />
          </div>

          <div className="flex items-center justify-between text-[11px] pt-1">
            <span className="text-[#c7d3ea]">hnd1 (AP-Northeast)</span>
            <span className="text-[#d8ecf8] tabular-nums">2.4ms · 100%</span>
          </div>
          <div className="w-full bg-[rgba(186,214,247,0.1)] h-1 rounded-full overflow-hidden">
            <div className="bg-[#98c0ef] h-full w-full" />
          </div>
        </div>

        <div className="pt-2 text-[11px] text-[#9da7ba] flex items-center justify-between shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)]">
          <span>ANYCAST FAILOVER</span>
          <span className="text-[#98c0ef]">STANDBY (0s)</span>
        </div>
      </div>
    </GlassCard>
  );
}
