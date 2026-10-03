import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogContent } from "@/content/blog";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogContent.posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogContent.posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogContent.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[14px] text-[#c7d3ea] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to all essays</span>
          </Link>
        </div>

        {/* Post Header */}
        <header className="max-w-[800px] space-y-6">
          <div className="flex items-center gap-3">
            <Badge>{post.category}</Badge>
            <span className="text-[#9da7ba] text-[12px] font-mono">·</span>
            <div className="flex items-center gap-1.5 font-mono text-[12px] text-[#9da7ba]">
              <Clock size={13} />
              <span>{post.readingTime}</span>
            </div>
            <span className="text-[#9da7ba] text-[12px] font-mono">·</span>
            <div className="flex items-center gap-1.5 font-mono text-[12px] text-[#9da7ba]">
              <Calendar size={13} />
              <span>{post.date}</span>
            </div>
          </div>

          <h1
            className="font-display font-medium text-3xl sm:text-4xl md:text-[44px] leading-[1.16] tracking-tight text-skywash"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 500,
            }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-8 h-8 rounded-full bg-[rgba(186,214,247,0.06)] shadow-hairline flex items-center justify-center font-mono text-[11px] text-[#d1e4fa]">
              <User size={14} />
            </div>
            <div>
              <div className="text-[14px] font-medium text-[#d1e4fa]">
                {post.author.name}
              </div>
              <div className="text-[12px] text-[#9da7ba]">
                {post.author.role}
              </div>
            </div>
          </div>
        </header>

        {/* Post Content with Strict Luminance Ladder */}
        <div className="max-w-[800px] mt-12 space-y-8 text-[16px] leading-[1.6] text-[#d1e4fa]">
          {/* Intro */}
          <p className="text-[18px] sm:text-[19px] leading-relaxed text-[#d8ecf8]">
            {post.content.intro}
          </p>

          {/* Sections */}
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4 pt-4">
              <h2
                className="text-[24px] sm:text-[28px] font-medium text-[#d8ecf8] leading-tight"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 500,
                }}
              >
                {section.heading}
              </h2>

              <p className="text-[16px] text-[#c7d3ea] leading-relaxed">
                {section.body}
              </p>

              {section.code && (
                <div className="rounded-[12px] bg-[rgba(186,214,247,0.03)] p-6 shadow-hairline font-mono text-[13px] text-[#c7d3ea] overflow-x-auto my-6">
                  <pre>
                    <code>{section.code}</code>
                  </pre>
                </div>
              )}

              {section.bullets && (
                <ul className="space-y-2 pt-2">
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-[#d1e4fa] text-[15px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#98c0ef] mt-2 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div className="mt-12 pt-8 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.12)]">
            <h3
              className="text-[20px] font-medium text-[#d8ecf8] mb-3"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 500,
              }}
            >
              Summary &amp; Recommendations
            </h3>
            <p className="text-[16px] text-[#c7d3ea] leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>
        </div>
      </Container>

      {/* Exactly one primary CTA button on this page */}
      <div className="mt-20">
        <CtaBand isPrimary={true} />
      </div>
    </article>
  );
}
