"use client";

import React from "react";
import { motion } from "framer-motion";
import { processContent } from "@/content/process";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Container";

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader
            eyebrow={processContent.eyebrow}
            heading={processContent.heading}
            body={processContent.subheading}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {processContent.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <GlassCard interactive className="h-full flex flex-col justify-between p-6">
                <div>
                  <div
                    className="font-mono text-[12px] font-normal text-[#9da7ba] uppercase tracking-[0.10em] tabular-nums"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    {step.step}
                  </div>
                  <h3
                    className="mt-3 text-[24px] font-medium leading-tight text-[#d8ecf8]"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 500 }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#9da7ba]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)]">
                  <ul className="space-y-1.5 font-mono text-[11px] text-[#c7d3ea]">
                    {step.activities.map((act) => (
                      <li key={act} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#98c0ef]" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
