import React from "react";

export default function ProjectHeader({ title }) {
  return (
    <header className="w-full max-w-7xl mx-auto pt-12 sm:pt-16 pb-2 px-6 bg-transparent">
      <div className="w-16 h-1 bg-amber-500 mb-3" />
      <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-gray-900 uppercase">
        {title}
      </h1>
    </header>
  );
}