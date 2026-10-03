import type { Metadata } from "next";
import { caseStudiesContent } from "@/content/caseStudies";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { WorkFilterableGrid } from "./WorkFilterableGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Selected Work & Systems",
  description:
    "Explore our portfolio of mission-critical engineering projects across Web Platforms, Cloud Infrastructure, and Deterministic AI Systems.",
};

export default function WorkPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow={caseStudiesContent.eyebrow}
          heading={caseStudiesContent.heading}
          body={caseStudiesContent.subheading}
          className="mb-12"
        />

        <WorkFilterableGrid />
      </Container>

      {/* Exactly one primary CTA button on this page */}
      <div className="mt-20">
        <CtaBand isPrimary={true} />
      </div>
    </div>
  );
}
