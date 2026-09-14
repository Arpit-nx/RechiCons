import React from "react";

export default function OverviewSection({ mainImage, developer, location }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-6 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Main Hero Image */}
        <div className="w-full">
          <img
            src={mainImage}
            alt="Main Building View"
            className="w-full h-auto object-cover rounded shadow-sm border border-gray-200"
          />
        </div>

        {/* Developer & Location Specs */}
        <div className="flex flex-col gap-6 pt-2">
          <div className="border-b border-gray-300/70 pb-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-1">Developer Name</h2>
            <p className="text-gray-700 text-2xl font-medium">{developer}</p>
          </div>

          <div className="border-b border-gray-300/70 pb-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-1">Location</h2>
            <p className="text-gray-700 text-2xl font-medium">{location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}