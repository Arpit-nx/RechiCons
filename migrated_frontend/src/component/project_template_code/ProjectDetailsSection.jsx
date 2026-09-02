import React from "react";

export default function ProjectDetailsSection({ title, paragraphs = [] }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-6 bg-transparent">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}