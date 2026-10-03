import React from "react";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-[999px] focus:bg-[#663af3] focus:px-4 focus:py-2 focus:text-white focus:text-[14px] focus:font-medium focus:shadow-hairline focus:outline-none focus:ring-2 focus:ring-white border-0"
    >
      Skip to main content
    </a>
  );
}
