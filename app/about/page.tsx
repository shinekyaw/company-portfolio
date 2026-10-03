import type { Metadata } from "next";
import { aboutContent } from "@/content/team";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "Learn about Old But Gold's architectural philosophy, core values, leadership team, and engineering milestones.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Main Section Header */}
        <SectionHeader
          eyebrow={aboutContent.eyebrow}
          heading={aboutContent.heading}
          body={aboutContent.subheading}
        />

        {/* Mission Glass Card */}
        <div className="my-16 md:my-24">
          <GlassCard elevated className="p-8 sm:p-12 max-w-[960px] mx-auto text-center space-y-6">
            <Eyebrow>{aboutContent.mission.eyebrow}</Eyebrow>
            <h2
              className="text-[28px] sm:text-[36px] font-medium text-[#d8ecf8] leading-tight"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 500,
              }}
            >
              {aboutContent.mission.heading}
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-relaxed text-[#c7d3ea] max-w-[720px] mx-auto">
              {aboutContent.mission.description}
            </p>
          </GlassCard>
        </div>

        {/* Studio Values: 4 Glass Cards */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Eyebrow>CORE OPERATING PRINCIPLES</Eyebrow>
            <h2
              className="text-[28px] sm:text-[36px] font-medium text-[#d8ecf8] mt-4"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 500,
              }}
            >
              How we approach engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((val) => (
              <GlassCard key={val.number} interactive className="p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[12px] text-[#9da7ba] tabular-nums">
                    {val.number}
                  </span>
                  <h3
                    className="text-[20px] font-medium text-[#d8ecf8] mt-3"
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {val.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#9da7ba]">
                    {val.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Team Grid: circular frost-tile avatars with initials, name, role */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Eyebrow>STUDIO LEADERSHIP</Eyebrow>
            <h2
              className="text-[28px] sm:text-[36px] font-medium text-[#d8ecf8] mt-4"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 500,
              }}
            >
              Principal Engineers &amp; Architects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.team.map((member) => (
              <GlassCard key={member.name} interactive className="p-6 text-center flex flex-col items-center">
                {/* Circular frost-tile avatar with initials */}
                <div className="w-20 h-20 rounded-[9999px] bg-[rgba(186,214,247,0.06)] shadow-hairline flex items-center justify-center font-mono text-[18px] font-medium text-[#d8ecf8] mb-4 select-none">
                  {member.initials}
                </div>

                <h3 className="text-[18px] font-medium text-[#d8ecf8]">
                  {member.name}
                </h3>
                <div className="text-[13px] text-[#98c0ef] font-mono mt-1">
                  {member.role}
                </div>
                <div className="text-[12px] text-[#9da7ba] font-mono mt-0.5">
                  {member.specialty}
                </div>

                <p className="text-[13px] leading-relaxed text-[#c7d3ea] mt-4 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)] pt-4 text-left">
                  {member.bio}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Timeline with Hairline Connector */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Eyebrow>HISTORY &amp; MILESTONES</Eyebrow>
            <h2
              className="text-[28px] sm:text-[36px] font-medium text-[#d8ecf8] mt-4"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 500,
              }}
            >
              Studio Trajectory
            </h2>
          </div>

          <div className="relative max-w-[800px] mx-auto">
            {/* Vertical 1px Hairline Connector */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[rgba(186,215,247,0.18)] to-transparent"
            />

            <div className="space-y-12 relative z-10">
              {aboutContent.timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`flex flex-col sm:flex-row items-start ${
                      isEven ? "sm:flex-row-reverse" : ""
                    } gap-6 sm:gap-12 pl-10 sm:pl-0`}
                  >
                    {/* Content Box */}
                    <div className="w-full sm:w-1/2">
                      <GlassCard className="p-6">
                        <span className="font-mono text-[13px] font-medium text-[#98c0ef] tabular-nums">
                          {item.year}
                        </span>
                        <h3 className="text-[18px] font-medium text-[#d8ecf8] mt-1">
                          {item.title}
                        </h3>
                        <p className="text-[14px] leading-relaxed text-[#9da7ba] mt-2">
                          {item.description}
                        </p>
                      </GlassCard>
                    </div>

                    {/* Timeline Node dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#98c0ef] shadow-[0_0_8px_rgba(152,192,239,0.8)] mt-6" />

                    {/* Spacer for other half */}
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Exactly one primary CTA button on this page */}
      <CtaBand isPrimary={true} />
    </div>
  );
}
