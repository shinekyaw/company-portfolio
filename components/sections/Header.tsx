"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Menu, X, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-[rgba(5,6,15,0.7)] backdrop-blur-xl shadow-[inset_0_-1px_0_0_rgba(186,215,247,0.12)]">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[16px] font-medium text-[#d1e4fa] tracking-tight hover:text-white transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#98c0ef] shadow-[0_0_8px_rgba(152,192,239,0.8)]" />
            <span
              className="font-display tracking-wider"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 500 }}
            >
              {siteContent.wordmark}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {siteContent.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[14px] transition-colors py-1 relative",
                    isActive
                      ? "text-[#d1e4fa] font-medium"
                      : "text-[#c7d3ea] hover:text-[#d1e4fa]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#98c0ef]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="flex items-center justify-center w-9 h-9 rounded-[999px] bg-transparent text-[#d1e4fa] shadow-hairline hover:bg-[rgba(186,214,247,0.06)] transition-all"
            >
              <GithubIcon size={16} />
            </a>
            <Button variant="ghost" href="/contact">
              <span>Start a project</span>
              <ArrowRight size={14} className="ml-1.5" />
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-[6px] text-[#c7d3ea] hover:text-white shadow-hairline bg-[rgba(186,214,247,0.03)]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Fullscreen Glass Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 bg-[rgba(5,6,15,0.95)] backdrop-blur-2xl p-6 flex flex-col justify-between md:hidden shadow-glass-modal">
          <nav className="flex flex-col space-y-6 pt-4">
            {siteContent.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[20px] font-medium text-[#d1e4fa] hover:text-white py-2 shadow-[inset_0_-1px_0_0_rgba(186,215,247,0.08)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 space-y-4 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.12)]">
            <Button
              variant="ghost"
              href="/contact"
              className="w-full py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a project
            </Button>
            <div className="flex justify-center gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9da7ba] text-[13px] flex items-center gap-2"
              >
                <GithubIcon size={16} /> GitHub Studio
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
