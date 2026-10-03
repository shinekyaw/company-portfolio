import React from "react";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  body?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  body,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center space-y-4 max-w-[800px] mx-auto",
        className
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className="font-display font-medium text-3xl sm:text-4xl md:text-[44px] leading-[1.16] tracking-tight text-skywash"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 500 }}
      >
        {heading}
      </h2>
      {body && (
        <p className="text-base sm:text-[18px] leading-relaxed text-[#c7d3ea] max-w-[640px]">
          {body}
        </p>
      )}
    </div>
  );
}
