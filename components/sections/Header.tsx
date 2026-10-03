"use client";

import React, { useState, useEffect } from "react";
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] w-full transition-colors duration-200 shadow-[inset_0_-1px_0_0_rgba(186,215,247,0.12)]",
        mobileMenuOpen
          ? "bg-[#05060f]"
          : "bg-[#05060f]/90 backdrop-blur-xl"
      )}
      style={{ backgroundColor: mobileMenuOpen ? "#05060f" : undefined }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[16px] font-medium text-[#d1e4fa] tracking-tight hover:text-white transition-colors"
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
                      ? "text-[#d8ecf8] font-medium"
                      : "text-[#c7d3ea] hover:text-[#d1e4fa]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#98c0ef] shadow-[0_0_6px_rgba(152,192,239,0.6)]" />
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
              className="flex items-center justify-center w-9 h-9 rounded-[999px] bg-transparent text-[#d1e4fa] shadow-hairline hover:bg-[rgba(186,214,247,0.06)] hover:text-white transition-all"
            >
              <GithubIcon size={16} />
            </a>
            <Button variant="ghost" href="/contact">
              <span>Start a project</span>
              <ArrowRight size={14} className="ml-1.5 text-[#98c0ef]" />
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2.5 rounded-[6px] transition-all duration-150 shadow-hairline cursor-pointer border-0",
                mobileMenuOpen
                  ? "bg-[rgba(186,214,247,0.16)] text-[#d8ecf8] shadow-hairline-focus"
                  : "bg-[rgba(186,214,247,0.06)] text-[#c7d3ea] hover:text-[#d8ecf8] hover:bg-[rgba(186,214,247,0.10)]"
              )}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Solid Opaque Midnight Fullscreen Mobile Navigation Sheet */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-x-0 top-16 bottom-0 z-[999] px-6 py-8 flex flex-col justify-between md:hidden overflow-y-auto"
          style={{ backgroundColor: "#05060f" }}
        >
          {/* Subtle Ambient Blueprint Grid overlay inside menu */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(186, 215, 247, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(186, 215, 247, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Subtle Conic/Radial Glow at top */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] h-[180px] bg-[radial-gradient(circle,rgba(152,192,239,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl"
          />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.15em] text-[#9da7ba] px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#98c0ef]" />
              <span>Studio Navigation</span>
            </div>

            <nav className="flex flex-col space-y-2.5">
              {siteContent.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3.5 rounded-[12px] text-[18px] font-medium transition-all duration-150 border-0",
                      isActive
                        ? "bg-[rgba(186,214,247,0.14)] text-white shadow-[inset_0_0_0_1px_rgba(186,215,247,0.3)]"
                        : "bg-[rgba(186,214,247,0.04)] text-[#d1e4fa] hover:text-white hover:bg-[rgba(186,214,247,0.09)] shadow-hairline"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#98c0ef] shadow-[0_0_8px_rgba(152,192,239,0.9)]" />
                    ) : (
                      <ArrowRight size={16} className="text-[#9da7ba]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="relative z-10 pt-6 mt-8 space-y-4 shadow-[inset_0_1px_0_0_rgba(186,215,247,0.12)]">
            <Button
              variant="ghost"
              href="/contact"
              className="w-full py-3.5 text-[15px] bg-[rgba(186,214,247,0.08)] hover:bg-[rgba(186,214,247,0.16)] text-white shadow-hairline"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Start a project</span>
              <ArrowRight size={16} className="ml-2 text-[#98c0ef]" />
            </Button>

            <div className="flex items-center justify-between pt-2 px-2 text-[#9da7ba] font-mono text-[12px]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#c7d3ea] hover:text-white transition-colors py-1"
              >
                <GithubIcon size={16} />
                <span>GitHub Studio</span>
              </a>

              <span className="text-[11px] text-[#9da7ba]">
                EST. {siteContent.establishedYear}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
