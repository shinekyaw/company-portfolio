import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function Footer() {
  return (
    <footer className="w-full shadow-[inset_0_1px_0_0_rgba(186,215,247,0.12)] bg-[rgba(5,6,15,0.9)] pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 shadow-[inset_0_-1px_0_0_rgba(186,215,247,0.08)]">
          {/* Left Column: Brand Wordmark & Description */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-[18px] font-medium text-[#d1e4fa] tracking-tight hover:text-white transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#98c0ef] shadow-[0_0_8px_rgba(152,192,239,0.8)]" />
              <span
                className="font-display tracking-wider"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 500,
                }}
              >
                {siteContent.wordmark}
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed text-[#9da7ba] max-w-[360px]">
              {siteContent.footer.description}
            </p>

            {/* Social Icons as outline circle tiles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-[9999px] bg-transparent text-[#d1e4fa] shadow-hairline flex items-center justify-center hover:bg-[rgba(186,214,247,0.06)] transition-all"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-[9999px] bg-transparent text-[#d1e4fa] shadow-hairline flex items-center justify-center hover:bg-[rgba(186,214,247,0.06)] transition-all"
              >
                <TwitterIcon size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-[9999px] bg-transparent text-[#d1e4fa] shadow-hairline flex items-center justify-center hover:bg-[rgba(186,214,247,0.06)] transition-all"
              >
                <LinkedinIcon size={15} />
              </a>
            </div>
          </div>

          {/* 4 Footer Navigation Columns: Company, Services, Resources, Legal */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {siteContent.footer.columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <div className="font-mono text-[11px] font-medium uppercase tracking-[0.10em] text-[#9da7ba]">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    return (
                      <li key={link.label}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[14px] text-[#c7d3ea] hover:text-[#d1e4fa] transition-colors inline-flex items-center gap-1"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight size={12} className="text-[#9da7ba]" />
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-[14px] text-[#c7d3ea] hover:text-[#d1e4fa] transition-colors"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[12px] text-[#9da7ba]">
          <div>{siteContent.footer.copyright}</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#98c0ef] animate-pulse" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
