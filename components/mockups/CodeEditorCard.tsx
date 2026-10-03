import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Terminal } from "lucide-react";

export function CodeEditorCard({ className }: { className?: string }) {
  return (
    <GlassCard elevated className={className}>
      <div className="flex items-center justify-between pb-3 mb-3 shadow-[inset_0_-1px_0_0_rgba(186,215,247,0.08)]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2f343e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2f343e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2f343e]" />
          <span className="ml-2 font-mono text-[11px] text-[#9da7ba]">
            pipeline.worker.ts
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#c7d3ea]">
          <Terminal size={13} strokeWidth={1.5} className="text-[#9da7ba]" />
          <span>TypeScript · 4.2ms</span>
        </div>
      </div>
      <div className="font-mono text-[12px] leading-relaxed text-[#c7d3ea] space-y-1 select-none">
        <div className="flex gap-3">
          <span className="text-[#9da7ba]/50 w-4 text-right">1</span>
          <span>
            <span className="text-[#b6d9fc]">export async function</span>{" "}
            <span className="text-[#d8ecf8]">streamTelemetry</span>(
            <span className="text-[#c7d3ea]">event: IngestEvent</span>
          ) &#123;
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-[#9da7ba]/50 w-4 text-right">2</span>
          <span className="pl-4">
            <span className="text-[#9da7ba]">// Zero-copy binary ring buffer</span>
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-[#9da7ba]/50 w-4 text-right">3</span>
          <span className="pl-4">
            <span className="text-[#b6d9fc]">const</span> buffer ={" "}
            <span className="text-[#d8ecf8]">RingBuffer</span>.
            <span className="text-[#b6d9fc]">alloc</span>(
            <span className="text-[#98c0ef]">64 * 1024</span>);
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-[#9da7ba]/50 w-4 text-right">4</span>
          <span className="pl-4">
            <span className="text-[#b6d9fc]">await</span> buffer.
            <span className="text-[#d8ecf8]">dispatchToEdge</span>(&#123;
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-[#9da7ba]/50 w-4 text-right">5</span>
          <span className="pl-8 text-[#c7d3ea]">
            qos: <span className="text-[#98c0ef]">&quot;zero-loss&quot;</span>,
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-[#9da7ba]/50 w-4 text-right">6</span>
          <span className="pl-8 text-[#c7d3ea]">
            p99LatencyMs: <span className="text-[#98c0ef]">4.2</span>,
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-[#9da7ba]/50 w-4 text-right">7</span>
          <span className="pl-4">&#125;);</span>
        </div>
        <div className="flex gap-3">
          <span className="text-[#9da7ba]/50 w-4 text-right">8</span>
          <span>&#125;</span>
        </div>
      </div>
    </GlassCard>
  );
}
