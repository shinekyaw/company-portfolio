import React from "react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function TrustedBy() {
  return (
    <section
      aria-label="Trusted by clients"
      className="w-full py-8 my-8 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.12),inset_0_-1px_0_0_rgba(186,215,247,0.12)] bg-[rgba(186,214,247,0.015)]"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">
          {siteContent.clients.map((client) => (
            <div
              key={client}
              className="flex-1 min-w-[120px] text-center font-mono text-[12px] sm:text-[13px] tracking-[0.15em] uppercase text-[#9da7ba] opacity-40 hover:opacity-80 transition-opacity select-none"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              {client}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
