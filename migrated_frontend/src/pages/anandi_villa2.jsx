import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import ConnectivitySection from "../component/individual_project_source/ConnectivitySection.jsx";
import ComingSoonSection from "../component/individual_project_source/ComingSoonSection.jsx";

// Import your asset images
import heroImg from "../assets/project-imgs/rechi3.jpeg";

const projectData = {
  hero: {
    title: "ANANDI VILLA (PHASE - 2)",
    badge: "Rechi Construction (P) Ltd.",
    image: heroImg,
  },
  connectivity: {
    title: "Connectivity",
    subtitle: "Gopalpur I, Saratpally, Bablatala, Rajarhat, West Bengal 700136",
    mapUrl: "https://maps.google.com/maps?q=Anandi%20Villa%2C%20Gopalpur%20I%2C%20Saratpally%2C%20Bablatala%2C%20Rajarhat%2C%20West%20Bengal%20700136&t=&z=15&ie=UTF8&iwloc=&output=embed",
    points: [
      { label: "Bablatala Bus Stop", distance: "2 mins" },
      { label: "Rajarhat Main Road", distance: "5 mins" },
      { label: "VIP Road / Chinar Park", distance: "10 mins" },
      { label: "NSCB International Airport", distance: "15 mins" },
    ],
  },
  
};

export default function AnandiVillaPhase2() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
      <ConnectivitySection data={projectData.connectivity} />
     <ComingSoonSection title="Project Details" />

    </main>
  );
}