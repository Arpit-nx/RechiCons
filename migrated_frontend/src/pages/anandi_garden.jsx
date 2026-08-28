import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import VisionSection from "../component/individual_project_source/VisionSection.jsx";
import AmenitiesSection from "../component/individual_project_source/AmenitiesSection.jsx";
import ComingSoonSection from "../component/individual_project_source/ComingSoonSection.jsx";

// Import your asset image
import heroImg from "../assets/project-imgs/anandigardenmain.jpg";

const projectData = {
  hero: {
    badge: "BY RECHI CONSTRUCTION PVT. LTD.",
    title: "ANANDI GARDEN",
    subtitle: "Bhatenda, Near gas godwan, Rajarhat, Kolkata - 700135",
    primaryCta: "Residences",
    secondaryCta: "Amenities",
    images: [heroImg],
  },
  vision: {
    title: "The Vision",
    specs: [
      { value: "G+4", label: "Residential Complex" },
      { value: "105", label: "Kathas Land Area" },
      { value: "180", label: "Total Units" },
      { value: "2 & 3", label: "BHK Configurations" },
    ],
  },
  amenities: {
    title: "Amenities",
    subtitle: "Designed for comfort and modern living",
    items: [
      "Gymnasium",
      "Power Backup",
      "24/7 Security",
      "Gated Community",
    ],
  },
};

export default function AnandiGarden() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
      <VisionSection data={projectData.vision} />
      <AmenitiesSection data={projectData.amenities} />
      <ComingSoonSection title="Project Details" />
    </main>
  );
}