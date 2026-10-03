"use client";

import React from "react";
import { motion } from "framer-motion";
import { capabilitiesContent } from "@/content/capabilities";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";

export function Capabilities() {
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
            eyebrow={capabilitiesContent.eyebrow}
            heading={capabilitiesContent.heading}
            body={capabilitiesContent.subheading}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <BrowserFrame />
        </motion.div>
      </Container>
    </section>
  );
}
