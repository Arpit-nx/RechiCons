import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import VisionSection from "../component/individual_project_source/VisionSection.jsx";
import ConnectivitySection from "../component/individual_project_source/ConnectivitySection.jsx";
import ProjectViewSection from "../component/individual_project_source/ProjectViewSection.jsx";

// Import your asset image
import heroImg from "../assets/project-imgs/rechi3.jpeg";

const projectData = {
  hero: {
    title: "SANTI BHAWAN",
    badge: "Rechi Nirmaan (P) Ltd.",
    image: heroImg,
  },
  details: {
    title: "Project Details",
    subtitle: "About Santi Bhawan",
    description:
      "Santi Bhawan is a 6-storey standalone residential apartment building located at 552, Dum Dum Park, Kolkata - 700055. Situated close to Jessore Road and VIP Road, it offers modern facilities and excellent connectivity.",
  },
  connectivity: {
    title: "Connectivity",
    subtitle: "Santi Bhawan, 552, Dum Dum Park, Dum Dum, Kolkata, West Bengal 700055",
    mapUrl: "https://maps.google.com/maps?q=Santi%20Bhawan%2C%20552%2C%20Dum%20Dum%20Park%2C%20Dum%20Dum%2C%20Kolkata%2C%20West%20Bengal%20700055&t=&z=15&ie=UTF8&iwloc=&output=embed",
    points: [
      { label: "Jessore Road", distance: "2 mins" },
      { label: "VIP Road", distance: "3 mins" },
      { label: "Dum Dum Metro Station", distance: "10 mins" },
      { label: "NSCB International Airport", distance: "15 mins" },
    ],
  },
  projectView: {
    title: "Project View",
    images: [heroImg],
  },
};

export default function SantiBhawan() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
      <VisionSection data={projectData.details} />
      <ProjectViewSection data={projectData.projectView} />
      <ConnectivitySection data={projectData.connectivity} />
    </main>
  );
}