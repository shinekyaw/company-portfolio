import React from "react";

export function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* 80px blueprint grid masked with radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(186, 215, 247, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(186, 215, 247, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Top Center Conic Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-40 blur-2xl"
        style={{
          background:
            "conic-gradient(at 50% -5%, transparent 45%, rgba(124,145,182,0.3) 49%, rgba(124,145,182,0.5) 50%, rgba(124,145,182,0.3) 51%, transparent 55%)",
        }}
      />

      {/* Subtle midnight halo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(102, 58, 243, 0.08) 0%, rgba(5, 6, 15, 0) 70%)",
        }}
      />
    </div>
  );
}
