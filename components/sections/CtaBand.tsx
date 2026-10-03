"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

interface CtaBandProps {
  isPrimary?: boolean;
}

export function CtaBand({ isPrimary = false }: CtaBandProps) {
  return (
    <section
      aria-label="Call to Action"
      className="relative w-full py-28 md:py-36 overflow-hidden shadow-[inset_0_1px_0_0_rgba(186,215,247,0.12)] bg-[rgba(5,6,15,0.8)]"
    >
      {/* Top Center Conic Halo */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] opacity-40 blur-3xl pointer-events-none"
        style={{
          background:
            "conic-gradient(at 50% -5%, transparent 45%, rgba(102, 58, 243, 0.35) 49%, rgba(152, 192, 239, 0.5) 50%, rgba(102, 58, 243, 0.35) 51%, transparent 55%)",
        }}
      />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6 max-w-[700px] mx-auto"
        >
          <Eyebrow>LET&apos;S BUILD</Eyebrow>

          <h2
            className="font-display font-medium text-4xl sm:text-5xl md:text-[48px] leading-[1.17] tracking-tight text-skywash"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 500,
            }}
          >
            Have a product in mind?
          </h2>

          <p className="text-[17px] sm:text-[18px] text-[#c7d3ea] max-w-[540px] mx-auto leading-relaxed">
            We partner with visionary engineering teams to build high-assurance software platforms from zero to scale.
          </p>

          <div className="pt-4 flex justify-center">
            <Button
              variant={isPrimary ? "primary" : "outline"}
              href="/contact"
              className={isPrimary ? "py-3 px-8 text-[16px]" : "py-3 px-8 text-[15px]"}
            >
              <span>Start a project</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
