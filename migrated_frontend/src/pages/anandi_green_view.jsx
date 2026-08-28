import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import VisionSection from "../component/individual_project_source/VisionSection.jsx";
import AmenitiesSection from "../component/individual_project_source/AmenitiesSection.jsx";
import ProjectViewSection from "../component/individual_project_source/ProjectViewSection.jsx";
import ComingSoonSection from "../component/individual_project_source/ComingSoonSection.jsx";

// Import your asset images
import heroImg from "../assets/project-imgs/anandigargenviewmain.jpg";
import visionImg from "../assets/project-imgs/anandigardenviewpic.jpg";

const projectData = {
  hero: {
    badge: "BY RECHI CONSTRUCTION PVT. LTD.",
    title: "ANANDI GREEN VIEW",
    subtitle: "Rajarhat, Kalikapur, Patharghata, Kolkata - 700135",
    primaryCta: "Residences",
    secondaryCta: "Amenities",
    image: heroImg,
    images: [heroImg],
  },
  vision: {
    title: "The Vision",
    specs: [
      { value: "G+7", label: "Storied Structure" },
      { value: "91", label: "Total Units" },
      { value: "2 & 3", label: "BHK Configurations" },
      { value: "Affordable", label: "Pricing Range" },
    ],
  },
  amenities: {
    title: "Amenities",
    subtitle: "Ultimate convenience for residents",
    items: [
      "Automatic Lift",
      "AC Community Hall",
      "AC Gym",
      "Connected Roof",
      "Water Treatment Plant",
      "Fire Fighting System",
    ],
  },
  projectView: {
    title: "Project View",
    subtitle: "Visual renders and layout highlights",
    image: [visionImg],
    images: [visionImg],
  },
};

export default function AnandiGreenView() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
      <VisionSection data={projectData.vision} />
      <AmenitiesSection data={projectData.amenities} />
      <ProjectViewSection data={projectData.projectView} />
      <ComingSoonSection title="Floor Plans & Specifications" />
    </main>
  );
}