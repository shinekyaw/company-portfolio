import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-[1px] w-full bg-gradient-to-r from-transparent via-[rgba(186,215,247,0.12)] to-transparent my-12",
        className
      )}
    />
  );
}
