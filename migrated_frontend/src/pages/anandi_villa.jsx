import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import ConnectivitySection from "../component/individual_project_source/ConnectivitySection.jsx";
import ProjectViewSection from "../component/individual_project_source/ProjectViewSection.jsx";
import ComingSoonSection from "../component/individual_project_source/ComingSoonSection.jsx";

import heroImg from "../assets/project-imgs/anandivillamain.jpg";
import pic1 from "../assets/project-imgs/anandivillapic1.jpg";
import pic2 from "../assets/project-imgs/anandivillapic2.jpg";

const projectData = {
  hero: {
    title: "ANANDI VILLA",
    subtitle: "Debi Park, Saratpally, Bablatala, Rajarhat, Kolkata - 700136",
    badge: "Rechi Construction (P) Ltd.",
    image: heroImg,
  },
  connectivity: {
    title: "Connectivity",
    subtitle: "Debi Park, Gopalpur I, Saratpally, Bablatala, Rajarhat, Kolkata, West Bengal 700136",
    mapUrl: "https://maps.google.com/maps?q=Anandi%20Villa%2C%20Debi%20Park%2C%20Gopalpur%20I%2C%20Saratpally%2C%20Bablatala%2C%20Rajarhat%2C%20Kolkata%2C%20West%20Bengal%20700136&t=&z=15&ie=UTF8&iwloc=&output=embed",
    points: [
      { label: "Bablatala Bus Stop", distance: "2 mins" },
      { label: "Rajarhat Main Road", distance: "5 mins" },
      { label: "VIP Road / Chinar Park", distance: "10 mins" },
      { label: "NSCB International Airport", distance: "15 mins" },
    ],
  },
  projectView: {
    title: "Project View",
    images: [pic1, pic2],
  },
};

export default function AnandiVilla() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
      <ConnectivitySection data={projectData.connectivity} />
      <ProjectViewSection data={projectData.projectView} />
      <ComingSoonSection title="Project Details" />

    </main>
  );
}