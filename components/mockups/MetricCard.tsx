import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Activity, ShieldCheck } from "lucide-react";

export function MetricCard({ className }: { className?: string }) {
  return (
    <GlassCard elevated className={className}>
      <div className="flex items-center justify-between pb-3 mb-3 shadow-[inset_0_-1px_0_0_rgba(186,215,247,0.08)]">
        <div className="flex items-center gap-2">
          <Activity size={15} strokeWidth={1.5} className="text-[#d1e4fa]" />
          <span className="font-mono text-[12px] font-medium text-[#d1e4fa]">
            SYSTEM TELEMETRY
          </span>
        </div>
        <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#c7d3ea]">
          <ShieldCheck size={12} strokeWidth={1.5} className="text-[#98c0ef]" />
          HEALTHY
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-[11px] font-mono text-[#9da7ba] uppercase tracking-wider">
            Throughput (Req/sec)
          </div>
          <div className="text-[28px] font-mono font-medium text-[#d8ecf8] tabular-nums mt-0.5">
            184,920
          </div>
        </div>

        {/* Abstract sparkline / bar chart */}
        <div className="h-12 flex items-end gap-1.5 pt-2">
          {[40, 55, 35, 70, 65, 85, 90, 75, 95, 88, 92, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-[rgba(186,214,247,0.15)] rounded-[2px] transition-all hover:bg-[rgba(186,214,247,0.4)]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)] font-mono text-[11px]">
          <div>
            <span className="text-[#9da7ba] block">P99 LATENCY</span>
            <span className="text-[#d8ecf8] font-medium tabular-nums">4.18 ms</span>
          </div>
          <div>
            <span className="text-[#9da7ba] block">ERROR RATE</span>
            <span className="text-[#d8ecf8] font-medium tabular-nums">0.0001%</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
