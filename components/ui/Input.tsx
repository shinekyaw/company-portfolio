import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "w-full rounded-[6px] bg-[rgba(199,211,234,0.06)] px-3 py-2.5 text-[14px] text-white placeholder-[#c7d3ea]/60 shadow-hairline transition-all duration-150 outline-none focus:shadow-hairline-focus focus-visible:shadow-hairline-focus disabled:cursor-not-allowed disabled:opacity-50 border-0",
            error && "shadow-[inset_0_0_0_1px_#e46d4c] focus:shadow-[inset_0_0_0_1px_#e46d4c]",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-[12px] text-[#e46d4c]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
