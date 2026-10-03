import type { Metadata } from "next";
import { servicesContent } from "@/content/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { IconTile } from "@/components/ui/IconTile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { Globe, Smartphone, Cloud, Sparkles, Layers, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services",
  description:
    "Explore our high-assurance engineering capabilities: Web Platforms, Mobile Apps, Cloud & DevOps, AI Integration, Design Systems, and Senior Team Augmentation.",
};

const iconMap = {
  Globe,
  Smartphone,
  Cloud,
  Sparkles,
  Layers,
  Users,
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow={servicesContent.eyebrow}
          heading={servicesContent.heading}
          body={servicesContent.subheading}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-24">
          {servicesContent.items.map((service) => {
            const IconComp = iconMap[service.icon as keyof typeof iconMap] || Globe;
            return (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <GlassCard interactive className="h-full flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <IconTile size="md">
                        <IconComp size={24} strokeWidth={1.5} className="text-[#d1e4fa]" />
                      </IconTile>
                      <span className="font-mono text-[13px] text-[#9da7ba] tabular-nums">
                        {service.number}
                      </span>
                    </div>

                    <h2
                      className="text-[24px] sm:text-[28px] font-medium leading-[1.2] text-[#d8ecf8]"
                      style={{
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {service.title}
                    </h2>

                    <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#c7d3ea]">
                      {service.fullDescription}
                    </p>

                    {/* Bullet list with 4px violet-free dots in #9da7ba */}
                    <div className="mt-6 pt-6 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)]">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-[#9da7ba] mb-3">
                        Key Deliverables
                      </div>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((deliv) => (
                          <li
                            key={deliv}
                            className="flex items-start gap-3 text-[14px] text-[#d1e4fa]"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#9da7ba] mt-2 shrink-0" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Capabilities Tags */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {service.capabilities.map((cap) => (
                        <Badge key={cap}>{cap}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)]">
                    <Button
                      variant="outline"
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="w-full sm:w-auto"
                    >
                      <span>Discuss this</span>
                      <ArrowRight size={14} className="ml-1.5" />
                    </Button>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Exactly one primary CTA button on this page */}
      <div className="mt-20">
        <CtaBand isPrimary={true} />
      </div>
    </div>
  );
}
