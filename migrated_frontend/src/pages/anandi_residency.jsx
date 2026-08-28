import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import SpecificationsSection from "../component/individual_project_source/SpecificationsSection.jsx";
import ProjectViewSection from "../component/individual_project_source/ProjectViewSection.jsx";
import FloorPlanSection from "../component/individual_project_source/FloorPlanSection.jsx";
import ConnectivitySection from "../component/individual_project_source/ConnectivitySection.jsx";
import ComingSoonSection from "../component/individual_project_source/ComingSoonSection.jsx";

// Import your asset images
import main from "../assets/project-imgs/anandirecidencymain.jpg";
import floorPlanImg1 from "../assets/project-imgs/anandirecidencyfloorplan1.jpg";
import floorPlanImg2 from "../assets/project-imgs/anandirecidencyfloorplan2.jpg";
import pic1 from "../assets/project-imgs/anandirecidencypic1.jpg";
import pic2 from "../assets/project-imgs/anandirecidencypic2.jpg";
import pic3 from "../assets/project-imgs/anandirecidencypic3.jpg";
import pic4 from "../assets/project-imgs/anandirecidencypic4.jpg";
import pic5 from "../assets/project-imgs/anandirecidencypic5.jpg";
import pic6 from "../assets/project-imgs/anandirecidencypic6.jpg";
import pic7 from "../assets/project-imgs/anandirecidencypic7.jpg";
import pic8 from "../assets/project-imgs/anandirecidencypic8.jpg";
import pic9 from "../assets/project-imgs/anandirecidencypic9.jpg";
import pic10 from "../assets/project-imgs/anandirecidencypic10.jpg";
import pic11 from "../assets/project-imgs/anandirecidencypic11.jpg";
import pic12 from "../assets/project-imgs/anandirecidencypic12.jpg";
import pic13 from "../assets/project-imgs/anandirecidencypic13.jpg";
import pic14 from "../assets/project-imgs/anandirecidencypic14.jpg";
import pic15 from "../assets/project-imgs/anandirecidencypic15.jpg";
import pic16 from "../assets/project-imgs/anandirecidencypic16.jpg";
import pic17 from "../assets/project-imgs/anandirecidencypic17.jpg";
import pic18 from "../assets/project-imgs/anandirecidencypic18.jpg";
import pic19 from "../assets/project-imgs/anandirecidencypic19.jpg";
import pic20 from "../assets/project-imgs/anandirecidencypic20.jpg";
import pic21 from "../assets/project-imgs/anandirecidencypic21.jpg";
import pic22 from "../assets/project-imgs/anandirecidencypic22.jpg";
import pic23 from "../assets/project-imgs/anandirecidencypic23.jpg";


const projectData = {
  hero: {
    title: "ANANDI RESIDENCY",
    badge: "Rechi Construction (P) Ltd.",
    image: main,
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
    image: floorPlanImg1,
    images: [floorPlanImg1, floorPlanImg2],
  },
  projectView: {
    title: "Project View",
    subtitle: "Visual renders and layout highlights",
    image: pic1,
    images: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23],
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