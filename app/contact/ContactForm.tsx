"use client";

import React, { useState, useTransition } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconTile } from "@/components/ui/IconTile";
import { submitInquiry, InquiryActionResult } from "@/app/actions/inquiry";
import { Check, ArrowRight, Loader2 } from "lucide-react";

const BUDGET_OPTIONS = [
  { label: "<$25k", value: "<25k" },
  { label: "$25k–$50k", value: "25k-50k" },
  { label: "$50k–$100k", value: "50k-100k" },
  { label: "$100k+", value: "100k+" },
];

const PROJECT_TYPES = [
  "Web Platform",
  "Mobile App",
  "Cloud & DevOps",
  "AI Integration",
  "Design System",
  "Team Augmentation",
];

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [selectedBudget, setSelectedBudget] = useState<string>("<25k");
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Web Platform"]);
  const [formResult, setFormResult] = useState<InquiryActionResult | null>(null);

  const toggleProjectType = (type: string) => {
    if (selectedTypes.includes(type)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter((t) => t !== type));
      }
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("budget", selectedBudget);
    formData.delete("projectTypes");
    selectedTypes.forEach((t) => formData.append("projectTypes", t));

    startTransition(async () => {
      const result = await submitInquiry(null, formData);
      setFormResult(result);
    });
  };

  if (formResult?.success) {
    return (
      <GlassCard elevated className="p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[460px]">
        <IconTile size="lg" className="mb-6 bg-[rgba(152,192,239,0.12)]">
          <Check size={32} strokeWidth={2} className="text-[#98c0ef]" />
        </IconTile>
        <h3
          className="text-[26px] font-medium text-[#d8ecf8]"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 500,
          }}
        >
          Inquiry Dispatched
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#c7d3ea] max-w-[420px]">
          {formResult.message}
        </p>
        <div className="mt-8">
          <Button
            variant="outline"
            onClick={() => {
              setFormResult(null);
            }}
          >
            Submit another inquiry
          </Button>
        </div>
      </GlassCard>
    );
  }

  const errors = formResult?.errors || {};

  return (
    <GlassCard elevated className="p-8 sm:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-[11px] uppercase tracking-wider text-[#9da7ba] mb-2"
            >
              Your Name *
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Elena Rostova"
              required
              error={errors.name?.[0]}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-mono text-[11px] uppercase tracking-wider text-[#9da7ba] mb-2"
            >
              Work Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="elena@company.com"
              required
              error={errors.email?.[0]}
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block font-mono text-[11px] uppercase tracking-wider text-[#9da7ba] mb-2"
          >
            Company or Organization
          </label>
          <Input
            id="company"
            name="company"
            placeholder="Aether Dynamics"
            error={errors.company?.[0]}
          />
        </div>

        {/* Budget Segmented Pill Control */}
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9da7ba] mb-2">
            Expected Budget (USD) *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {BUDGET_OPTIONS.map((opt) => {
              const isSelected = selectedBudget === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedBudget(opt.value)}
                  className={`py-2 px-3 rounded-[6px] text-[13px] font-mono transition-all text-center cursor-pointer border-0 ${
                    isSelected
                      ? "bg-[rgba(199,211,234,0.2)] text-white shadow-[inset_0_0_0_1px_rgba(186,215,247,0.3)]"
                      : "bg-[rgba(199,211,234,0.06)] text-[#c7d3ea] shadow-hairline hover:bg-[rgba(199,211,234,0.1)]"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
          {errors.budget?.[0] && (
            <p className="mt-1.5 text-[12px] text-[#e46d4c]">{errors.budget[0]}</p>
          )}
        </div>

        {/* Project Type Badge Multi-Select */}
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9da7ba] mb-2">
            Project Scope / Discipline *
          </label>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map((type) => {
              const isSelected = selectedTypes.includes(type);
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleProjectType(type)}
                  className="cursor-pointer focus:outline-none"
                >
                  <Badge
                    active={isSelected}
                    className="px-3 py-1.5 text-[12px] cursor-pointer"
                  >
                    {isSelected && <Check size={11} className="mr-1" />}
                    {type}
                  </Badge>
                </button>
              );
            })}
          </div>
          {errors.projectTypes?.[0] && (
            <p className="mt-1.5 text-[12px] text-[#e46d4c]">
              {errors.projectTypes[0]}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block font-mono text-[11px] uppercase tracking-wider text-[#9da7ba] mb-2"
          >
            Project Summary &amp; Objectives *
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about the problem space, existing constraints, timeline, and engineering goals..."
            required
            error={errors.message?.[0]}
          />
        </div>

        {/* Form level message */}
        {formResult && !formResult.success && formResult.message && (
          <div className="p-3 rounded-[6px] bg-[rgba(228,109,76,0.1)] shadow-[inset_0_0_0_1px_#e46d4c] text-[13px] text-[#e46d4c]">
            {formResult.message}
          </div>
        )}

        {/* Primary Violet Submit Button - strictly 1 per page */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            disabled={isPending}
            className="w-full py-3.5 text-[15px] font-medium"
          >
            {isPending ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 size={16} className="animate-spin" />
                <span>Transmitting inquiry...</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span>Submit project inquiry</span>
                <ArrowRight size={16} />
              </span>
            )}
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
