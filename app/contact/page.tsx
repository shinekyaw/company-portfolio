import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";
import { Mail, Clock, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Start a Project — Contact Studio",
  description:
    "Direct contact channel with Old But Gold engineering leads. Schedule an architectural consultation or submit project inquiries.",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Details & Response Guarantee */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Eyebrow flanked={false} className="justify-start mb-4">
                INITIATE ENGAGEMENT
              </Eyebrow>
              <h1
                className="font-display font-medium text-3xl sm:text-4xl md:text-[44px] leading-[1.16] tracking-tight text-skywash"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 500,
                }}
              >
                Let&apos;s build something exceptional
              </h1>
              <p className="mt-4 text-[16px] text-[#c7d3ea] leading-relaxed">
                Tell us about your technical roadmap, existing infrastructure, or upcoming greenfield platform. You will speak directly with a systems architect.
              </p>
            </div>

            {/* Response Time and Direct Channels */}
            <div className="space-y-4 pt-4 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)]">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[rgba(186,214,247,0.06)] shadow-hairline flex items-center justify-center text-[#98c0ef] shrink-0 mt-0.5">
                  <Clock size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#d1e4fa]">
                    Guaranteed 24-Hour Review
                  </div>
                  <p className="text-[13px] text-[#9da7ba] mt-0.5 leading-normal">
                    {siteContent.responseTimeNote}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[rgba(186,214,247,0.06)] shadow-hairline flex items-center justify-center text-[#98c0ef] shrink-0 mt-0.5">
                  <Mail size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#d1e4fa]">
                    Direct Engineering Inbox
                  </div>
                  <a
                    href={`mailto:${siteContent.email}`}
                    className="text-[13px] font-mono text-[#98c0ef] hover:underline mt-0.5 block"
                  >
                    {siteContent.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[rgba(186,214,247,0.06)] shadow-hairline flex items-center justify-center text-[#98c0ef] shrink-0 mt-0.5">
                  <ShieldCheck size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#d1e4fa]">
                    Mutual NDA Standard
                  </div>
                  <p className="text-[13px] text-[#9da7ba] mt-0.5 leading-normal">
                    All discussions are protected under standard mutual non-disclosure agreements prior to deep architectural sharing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[rgba(186,214,247,0.06)] shadow-hairline flex items-center justify-center text-[#98c0ef] shrink-0 mt-0.5">
                  <MapPin size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#d1e4fa]">
                    Studio Presence
                  </div>
                  <p className="text-[13px] text-[#9da7ba] mt-0.5 leading-normal">
                    San Francisco · London · Zurich (Distributed globally)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
