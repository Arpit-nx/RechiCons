import React from "react";

export default function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
      <span className="h-px w-8 bg-current" />
      {children}
    </span>
  );
}