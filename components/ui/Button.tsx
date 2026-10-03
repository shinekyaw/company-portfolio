"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "outline" | "primary";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ variant = "ghost", href, className, children, ...props }, ref) => {
  const baseClasses =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-150 rounded-[999px] text-center focus-visible:outline-none shadow-hairline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none border-0";

  const variantClasses = {
    ghost:
      "bg-[rgba(186,214,247,0.06)] text-white text-[14px] px-4 py-2 hover:bg-[rgba(186,214,247,0.12)] active:bg-[rgba(186,214,247,0.16)] focus-visible:shadow-[inset_0_0_0_1px_rgba(186,215,247,0.24)]",
    outline:
      "bg-transparent text-[#d1e4fa] text-[14px] px-4 py-2 hover:bg-[rgba(186,214,247,0.06)] active:bg-[rgba(186,214,247,0.10)] focus-visible:shadow-[inset_0_0_0_1px_rgba(186,215,247,0.24)]",
    primary:
      "bg-[#663af3] text-white text-[15px] px-6 py-3 font-medium hover:brightness-110 active:brightness-95 focus-visible:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4),0_0_12px_rgba(102,58,243,0.5)]",
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
