export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonialsContent = {
  eyebrow: "WHAT CLIENTS SAY",
  heading: "Trusted by engineering leaders",
  subheading: "Feedback from technical founders, VP of Engineering leaders, and architects who demand perfection.",
  items: [
    {
      quote:
        "Old But Gold replaced our entire core telemetry stack in eight weeks with zero regressions. Their architectural discipline and code quality are simply unmatched in the industry.",
      author: "Dr. Elena Rostova",
      role: "VP of Engineering",
      company: "Aether Dynamics",
      initials: "ER",
    },
    {
      quote:
        "Working with Old But Gold feels like adding five principal engineers to your team overnight. They don't just write clean code — they solve fundamental distributed systems problems.",
      author: "Marcus Thorne",
      role: "Chief Technology Officer",
      company: "Meridian Labs",
      initials: "MT",
    },
    {
      quote:
        "Their commitment to zero layout shift, strict type safety, and sub-second latencies elevated our product from a prototype to an enterprise-grade platform.",
      author: "Devon Vance",
      role: "Head of Product Infrastructure",
      company: "Synapse Cloud",
      initials: "DV",
    },
  ] as Testimonial[],
};
