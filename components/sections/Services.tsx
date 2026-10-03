"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesContent } from "@/content/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { Globe, Smartphone, Cloud, Sparkles, Layers, Users } from "lucide-react";

const iconMap = {
  Globe,
  Smartphone,
  Cloud,
  Sparkles,
  Layers,
  Users,
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader
            eyebrow={servicesContent.eyebrow}
            heading={servicesContent.heading}
            body={servicesContent.subheading}
          />
        </motion.div>

        {/* Desktop Horizontal Timeline Connected by Hairline */}
        <div className="relative mt-16 md:mt-24 hidden md:block">
          {/* Connecting 1px hairline through center of tiles */}
          <div
            aria-hidden="true"
            className="absolute top-7 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[rgba(186,215,247,0.18)] to-transparent z-0"
          />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {servicesContent.items.map((item, index) => {
              const IconComp = iconMap[item.icon as keyof typeof iconMap] || Globe;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={`/services#${item.id}`}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className="p-1 rounded-full bg-[var(--color-canvas)] transition-transform duration-200 group-hover:-translate-y-1">
                      <IconTile size="md" className="group-hover:bg-[rgba(186,214,247,0.12)]">
                        <IconComp size={22} strokeWidth={1.5} className="text-[#d1e4fa]" />
                      </IconTile>
                    </div>
                    <span className="mt-4 font-mono text-[11px] text-[#9da7ba] tabular-nums">
                      {item.number}
                    </span>
                    <h3 className="mt-1 text-[14px] font-medium text-[#d1e4fa] group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile 2-column Grid without connector */}
        <div className="grid grid-cols-2 gap-6 mt-12 md:hidden">
          {servicesContent.items.map((item) => {
            const IconComp = iconMap[item.icon as keyof typeof iconMap] || Globe;
            return (
              <Link
                key={item.id}
                href={`/services#${item.id}`}
                className="flex flex-col items-center text-center p-4 rounded-[16px] bg-[rgba(186,214,247,0.03)] shadow-hairline group"
              >
                <IconTile size="md">
                  <IconComp size={22} strokeWidth={1.5} className="text-[#d1e4fa]" />
                </IconTile>
                <span className="mt-3 font-mono text-[11px] text-[#9da7ba] tabular-nums">
                  {item.number}
                </span>
                <h3 className="mt-1 text-[13px] font-medium text-[#d1e4fa]">
                  {item.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
