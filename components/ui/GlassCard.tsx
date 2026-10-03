import React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  interactive?: boolean;
  children: React.ReactNode;
}

export function GlassCard({
  elevated = false,
  interactive = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[16px] p-6 transition-all duration-200 backdrop-blur-md relative overflow-hidden border-0",
        elevated
          ? "bg-[rgba(5,6,15,0.97)] shadow-glass-modal"
          : "bg-[rgba(186,214,247,0.03)] shadow-glass-card",
        interactive &&
          "hover:-translate-y-[2px] hover:bg-[rgba(186,214,247,0.06)] hover:shadow-glass-modal cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Top highlight frost hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(216,236,248,0.2)] to-transparent"
      />
      {children}
    </div>
  );
}
