import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          rows={rows}
          className={cn(
            "w-full rounded-[6px] bg-[rgba(199,211,234,0.06)] px-3 py-2.5 text-[14px] text-white placeholder-[#c7d3ea]/60 shadow-hairline transition-all duration-150 outline-none focus:shadow-hairline-focus focus-visible:shadow-hairline-focus disabled:cursor-not-allowed disabled:opacity-50 resize-y border-0",
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

Textarea.displayName = "Textarea";
