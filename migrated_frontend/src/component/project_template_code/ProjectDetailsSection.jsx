
import React from "react";

export default function ProjectDetailsSection({
  title,
  paragraphs = [],
}) {
  return (
    <section className="w-full bg-transparent px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-gray-900" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
              Project Information
            </span>
          </div>

          <h2 className="text-3xl font-bold  font-sans tracking-tight text-gray-900 md:text-4xl">
            {title || "Project Details"}
          </h2>
        </div>

        {/* Content */}
        {paragraphs.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">

            {/* Left Label */}
            <div className="hidden md:block">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                About
              </p>
            </div>

            {/* Paragraphs */}
            <div className="max-w-4xl">
              {paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className={`
                    ${
                      index !== 0
                        ? "mt-7 border-t border-gray-200 pt-7"
                        : ""
                    }
                  `}
                >
                  <p className="text-base leading-8 text-gray-600 md:text-lg md:leading-9">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ) : (
          <div className="border-t border-gray-200 pt-6">
            <p className="text-base leading-7 text-gray-500">
              Project details will be updated soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

