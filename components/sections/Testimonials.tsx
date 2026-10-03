"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonialsContent } from "@/content/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Container";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader
            eyebrow={testimonialsContent.eyebrow}
            heading={testimonialsContent.heading}
            body={testimonialsContent.subheading}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonialsContent.items.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <GlassCard interactive className="h-full flex flex-col justify-between p-6 sm:p-8">
                <div>
                  {/* Subtle quote glyph */}
                  <span className="font-serif text-3xl text-[#98c0ef]/40 select-none block mb-2 leading-none">
                    “
                  </span>
                  <p className="text-[17px] sm:text-[18px] leading-relaxed text-[#d1e4fa]">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-8 pt-6 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)] flex items-center gap-3.5">
                  {/* Circular initial avatar in IconTile style */}
                  <div className="w-12 h-12 rounded-[9999px] bg-[rgba(186,214,247,0.06)] shadow-hairline flex items-center justify-center font-mono text-[13px] font-medium text-[#d1e4fa] select-none shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-[#c7d3ea]">
                      {item.author}
                    </div>
                    <div className="text-[12px] text-[#9da7ba]">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
