import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import ConnectivitySection from "../component/individual_project_source/ConnectivitySection.jsx";
import ProjectViewSection from "../component/individual_project_source/ProjectViewSection.jsx";
import ComingSoonSection from "../component/individual_project_source/ComingSoonSection.jsx";

// Import your image asset here
import heroImg from "../assets/project-imgs/anandiparkmain.jpg";

const projectData = {
  hero: {
    title: "ANANDI PARK",
    badge: "Rechi Construction (P) Ltd.",
    image: heroImg,
  },
  connectivity: {
    title: "Connectivity",
    subtitle: "Kanjeelal Para Rd, opp. Durga Apartment, next to Sayantani Caterers, Fansipota, Reekjoyoni, West Bengal 700135",
    mapUrl: "https://maps.google.com/maps?q=Anandi%20Park%2C%20Kanjeelal%20Para%20Rd%2C%20Fansipota%2C%20Reekjoyoni%2C%20West%20Bengal%20700135&t=&z=15&ie=UTF8&iwloc=&output=embed",
    points: [
      { label: "Rajarhat Main Road", distance: "5 mins" },
      { label: "Chinar Park / VIP Road", distance: "12 mins" },
      { label: "New Town Action Area 1", distance: "15 mins" },
      { label: "NSCB International Airport", distance: "20 mins" },
    ],
  },
  
};

export default function AnandiPark() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
      <ConnectivitySection data={projectData.connectivity} />
      <ComingSoonSection title="Project Details" />

    </main>
  );
}