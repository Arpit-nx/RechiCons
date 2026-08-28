import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import ComingSoonSection from "../component/individual_project_source/ComingSoonSection.jsx";

// Import your asset image
import heroImg from "../assets/project-imgs/anandisunrisemain.jpg";

const projectData = {
  hero: {
    title: "ANANDI SUNRISE",
    subtitle: "Rajarhat, Basina, Kolkata - 700135",
    badge: "Rechi Construction (P) Ltd.",
    image: heroImg,
  },
};

export default function AnandiSunrise() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
      <ComingSoonSection title="Project Details" />
    </main>
  );
}