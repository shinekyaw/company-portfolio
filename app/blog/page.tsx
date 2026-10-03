import type { Metadata } from "next";
import Link from "next/link";
import { blogContent } from "@/content/blog";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Journal & Architecture Notes",
  description:
    "Technical essays, distributed systems case studies, and engineering practices from the Old But Gold studio team.",
};

export default function BlogPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow={blogContent.eyebrow}
          heading={blogContent.heading}
          body={blogContent.subheading}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-24">
          {blogContent.posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block h-full focus:outline-none"
            >
              <GlassCard
                interactive
                className="h-full flex flex-col justify-between p-8 group-hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge>{post.category}</Badge>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#9da7ba]">
                      <Clock size={12} />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  <h2
                    className="text-[20px] font-medium leading-snug text-[#d8ecf8] group-hover:text-white transition-colors"
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {post.title}
                  </h2>

                  <p className="mt-4 text-[14px] leading-relaxed text-[#c7d3ea]">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.08)] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px] font-mono text-[#9da7ba]">
                    <Calendar size={13} />
                    <span>{post.date}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[13px] text-[#d1e4fa] group-hover:text-white font-medium">
                    Read essay <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Container>

      {/* Exactly one primary CTA button on this page */}
      <div className="mt-20">
        <CtaBand isPrimary={true} />
      </div>
    </div>
  );
}
