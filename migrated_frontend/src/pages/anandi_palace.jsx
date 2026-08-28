import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import ConnectivitySection from "../component/individual_project_source/ConnectivitySection.jsx";
import ComingSoonSection from "../component/individual_project_source/ComingSoonSection.jsx";

// Import your asset image
import heroImg from "../assets/project-imgs/anandipalacemain.jpg";

const projectData = {
  hero: {
    title: "ANANDI PALACE",
    subtitle: "Rajarhat, Khamar, Kolkata - 700135",
    badge: "Rechi Construction (P) Ltd.",
    image: heroImg,
  },
  
};

export default function AnandiPalace() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
       <ConnectivitySection data={projectData.connectivity} />
        <ComingSoonSection title="Project Details" />
    </main>
  );
}