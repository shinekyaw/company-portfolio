"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CodeEditorCard } from "@/components/mockups/CodeEditorCard";
import { MetricCard } from "@/components/mockups/MetricCard";
import { DeployStatusCard } from "@/components/mockups/DeployStatusCard";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -10, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <section
      aria-label="Hero"
      className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden"
    >
      <Container className="relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <Eyebrow>
            SOFTWARE STUDIO · EST. {siteContent.establishedYear}
          </Eyebrow>
        </motion.div>

        {/* Giant Wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-display font-medium text-skywash tracking-tighter shadow-hero-glow select-none"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 500,
            fontSize: "clamp(64px, 14vw, 160px)",
            lineHeight: 1.05,
          }}
        >
          {siteContent.wordmark}
        </motion.h1>

        {/* Tagline / Muted Copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-[18px] md:text-[20px] text-[#c7d3ea] max-w-[680px] mx-auto leading-relaxed"
        >
          {siteContent.description}
        </motion.p>

        {/* CTAs: exactly one primary button per page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="ghost" href="/work">
            View our work
          </Button>
          <Button variant="primary" href="/contact">
            <span>Start a project</span>
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>

        {/* Fan of 3 Overlapping Elevated Glass Cards */}
        <div className="relative mt-20 md:mt-24 max-w-[1100px] mx-auto min-h-[380px] sm:min-h-[440px] md:min-h-[500px]">
          {/* Ambient center spotlight underneath */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(152,192,239,0.12)_0%,transparent_70%)] pointer-events-none blur-2xl"
          />

          <motion.div
            animate={floatAnimation}
            className="relative w-full flex items-center justify-center"
          >
            {/* Left Fan Card: Tilted -6deg */}
            <div className="absolute left-0 sm:left-4 md:left-8 top-12 sm:top-8 w-[280px] sm:w-[320px] md:w-[360px] transform -rotate-6 z-10 transition-transform duration-300 hover:rotate-0 hover:z-30 hidden sm:block">
              <DeployStatusCard />
            </div>

            {/* Center Fan Card: Scaled 1.08 (Code Editor) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[540px] transform sm:scale-108 z-20 transition-transform duration-300 hover:scale-110">
              <CodeEditorCard />
            </div>

            {/* Right Fan Card: Tilted +6deg */}
            <div className="absolute right-0 sm:right-4 md:right-8 top-12 sm:top-8 w-[280px] sm:w-[320px] md:w-[360px] transform rotate-6 z-10 transition-transform duration-300 hover:rotate-0 hover:z-30 hidden sm:block">
              <MetricCard />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
