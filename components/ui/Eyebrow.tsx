import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  flanked?: boolean;
}

export function Eyebrow({ children, className, flanked = true }: EyebrowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 text-center",
        className
      )}
    >
      {flanked && (
        <span
          aria-hidden="true"
          className="h-[1px] w-12 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-[rgba(186,215,247,0.12)] to-transparent"
        />
      )}
      <span
        className="font-mono text-[15px] font-normal uppercase tracking-[0.10em] text-[#c7d3ea] tabular-nums"
        style={{ fontFamily: "var(--font-jetbrains), monospace" }}
      >
        {children}
      </span>
      {flanked && (
        <span
          aria-hidden="true"
          className="h-[1px] w-12 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-[rgba(186,215,247,0.12)] to-transparent"
        />
      )}
    </div>
  );
}
