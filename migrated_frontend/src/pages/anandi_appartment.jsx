import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import ConnectivitySection from "../component/individual_project_source/ConnectivitySection.jsx";
import ProjectViewSection from "../component/individual_project_source/ProjectViewSection.jsx";
import FloorPlanSection from "../component/individual_project_source/FloorPlanSection.jsx";
import ComingSoonSection from "../component/individual_project_source/ComingSoonSection.jsx";
import heroImg from "../assets/project-imgs/rechi3.jpeg";
import visionImg from "../assets/project-imgs/rechi2.jpg";
import floorPlanImg from "../assets/project-imgs/floor_plan_anandi_vista.jpeg";

const projectData = {
  hero: {
    title: "ANANDI APARTMENT",
    badge: "Rechi Construction (P) Ltd.",
    image: heroImg,
  },
  floorPlan: {
    title: "Floor Plan",
    subtitle: "Layouts for Block A, Block B, and Block C",
    image: floorPlanImg,
    configurations: [
      { label: "Block A - Flat A (3 BHK)", area: "1349 Sqft" },
      { label: "Block A - Flat B (3 BHK)", area: "1372 Sqft" },
      { label: "Block A - Flat C (2 BHK)", area: "965 Sqft" },
      { label: "Block A - Flat D (3 BHK)", area: "1138 Sqft" },
      { label: "Block A - Flat E (2 BHK)", area: "1046 Sqft" },
      { label: "Block B - Flat A (3 BHK)", area: "1040 Sqft" },
      { label: "Block B - Flat B (2 BHK)", area: "880 Sqft" },
      { label: "Block B - Flat C (2 BHK)", area: "914 Sqft" },
      { label: "Block B - Flat D (3 BHK)", area: "1069 Sqft" },
      { label: "Block C - Flat A (3 BHK)", area: "833 Sqft" },
      { label: "Block C - Flat B (2 BHK)", area: "853 Sqft" },
      { label: "Block C - Flat C (2 BHK)", area: "841 Sqft" },
    ],
    note: "Saleable area specs as per architect site layout plan.",
  },
  connectivity: {
    title: "Connectivity",
    subtitle: "106, Anandi Apartment, Saratpally, Bablatala, Rajarhat, Kolkata - 700136",
    mapUrl: "https://maps.google.com/maps?q=106%2C%20Anandi%20Apartment%2C%20Saratpally%2C%20Bablatala%2C%20Rajarhat%2C%20Kolkata%2C%20West%20Bengal%20700136&t=&z=15&ie=UTF8&iwloc=&output=embed",
    points: [
      { label: "Bablatala Bus Stop", distance: "2 mins" },
      { label: "Rajarhat Main Road", distance: "5 mins" },
      { label: "VIP Road / Chinar Park", distance: "10 mins" },
      { label: "NSCB International Airport", distance: "15 mins" },
    ],
  },
  projectView: {
    title: "Project View",
    images: [
      heroImg,
      visionImg,
    ],
  },
};

export default function AnandiApartment() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
      <FloorPlanSection data={projectData.floorPlan} />
      <ConnectivitySection data={projectData.connectivity} />
      <ProjectViewSection data={projectData.projectView} />
      <ComingSoonSection title="Project Details" />

    </main>
  );
}