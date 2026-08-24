import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import SpecificationsSection from "../component/individual_project_source/SpecificationsSection.jsx";
import ProjectViewSection from "../component/individual_project_source/ProjectViewSection.jsx";
import FloorPlanSection from "../component/individual_project_source/FloorPlanSection.jsx";
import ConnectivitySection from "../component/individual_project_source/ConnectivitySection.jsx";
import ComingSoonSection from "../component/individual_project_source/ComingSoonSection.jsx";

// Import your asset images
import heroImg from "../assets/project-imgs/rechi3.jpeg";
import visionImg from "../assets/project-imgs/rechi2.jpg";
import floorPlanImg from "../assets/project-imgs/floor_plan_anandi_vista.jpeg";

const projectData = {
  hero: {
    title: "ANANDI RESIDENCY",
    badge: "Rechi Construction (P) Ltd.",
    image: heroImg,
  },
  specifications: {
    title: "Building Specifications",
    subtitle: "Premium construction quality & modern fittings",
    items: [
      { title: "Structure", desc: "R.C.C. piling and R.C.C. framed structure with R.C.C. columns & beams." },
      { title: "Flooring", desc: "Flats finished with vitrified tiles; staircases finished with marble." },
      { title: "Electrical Wiring", desc: "Concealed copper wiring with high-quality wires; adequate points for lights, fans, and TV." },
      { title: "Windows", desc: "Aluminium sliding windows with marble/granite sill and safety grills." },
      { title: "Water Supply", desc: "Ground and overhead tanks with municipal water supply." },
      { title: "Wall Finishing", desc: "Internal walls plastered and finished with smooth putty." },
      { title: "Doors", desc: "Branded flush doors for all flats." },
      { title: "Plumbing", desc: "Concealed C.P. pipelines with G.I./PVC fittings in toilets and kitchen; includes water cocks, stop cocks, P traps, gully traps, outside water lines, and overhead lines." },
      { title: "Toilets", desc: "Ceramic floor and dado finish; wall tiles up to lintel level; branded C.P. fittings and sanitary ware." },
      { title: "Kitchen", desc: "Granite platform with stainless steel sink; branded glazed tiles up to lintel height." },
      { title: "Staircase", desc: "Marble flooring, lighting arrangement, and walls finished with putty." },
    ],
  },
  floorPlan: {
    title: "Floor Plan",
    subtitle: "Layouts for 2 BHK & 3 BHK Apartments",
    image: floorPlanImg,
  },
  projectView: {
    title: "Project View",
    images: [visionImg, heroImg],
  },
  connectivity: {
    title: "Connectivity",
    subtitle: "JFMP+Q5J, Kanjeelal Para Rd, Fansipota, Reekjoyoni, West Bengal 700135",
    mapUrl: "https://maps.google.com/maps?q=Anandi%20Residency%2C%20Kanjeelal%20Para%20Rd%2C%20Fansipota%2C%20Reekjoyoni%2C%20West%20Bengal%20700135&t=&z=15&ie=UTF8&iwloc=&output=embed",
    points: [
      { label: "Rajarhat Chowmatha", distance: "3 mins" },
      { label: "City Centre II", distance: "10 mins" },
      { label: "VIP Road / Chinar Park", distance: "12 mins" },
      { label: "NSCB International Airport", distance: "15 mins" },
    ],
  },
};

export default function AnandiResidency() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
      <SpecificationsSection data={projectData.specifications} />
      <FloorPlanSection data={projectData.floorPlan} />
      <ConnectivitySection data={projectData.connectivity} />
      <ProjectViewSection data={projectData.projectView} />
      <ComingSoonSection title="Project Details" />
    </main>
  );
}