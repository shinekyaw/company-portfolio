import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  active?: boolean;
}

export function Badge({ children, active, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[6px] px-2 py-1 text-[12px] font-medium leading-none tracking-normal transition-all border-0",
        active
          ? "bg-[rgba(199,211,234,0.24)] text-white shadow-[inset_0_0_0_1px_rgba(186,215,247,0.3)]"
          : "bg-[rgba(199,211,234,0.12)] text-[#d1e4fa] shadow-hairline",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
