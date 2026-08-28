import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import VisionSection from "../component/individual_project_source/VisionSection.jsx";
import FloorPlanSection from "../component/individual_project_source/FloorPlanSection.jsx";
import AmenitiesSection from "../component/individual_project_source/AmenitiesSection.jsx";
import SpecificationsSection from "../component/individual_project_source/SpecificationsSection.jsx";
import ConnectivitySection from "../component/individual_project_source/ConnectivitySection.jsx";
import ProjectViewSection from "../component/individual_project_source/ProjectViewSection.jsx";

import main from "../assets/project-imgs/anandiviewmain.jpg";
import pic1 from "../assets/project-imgs/anandiviewpic1.jpg";
import pic2 from "../assets/project-imgs/anandiviewpic2.jpg";
import pic3 from "../assets/project-imgs/anandiviewpic3.jpg";
import pic4 from "../assets/project-imgs/anandiviewpic4.jpg";
import pic5 from "../assets/project-imgs/anandiviewpic5.jpg";
import pic6 from "../assets/project-imgs/anandiviewpic6.jpg";
import pic7 from "../assets/project-imgs/anandiviewpic7.jpg";
import pic8 from "../assets/project-imgs/anandiviewpic8.jpg";
import pic9 from "../assets/project-imgs/anandiviewpic9.jpg";
import pic10 from "../assets/project-imgs/anandiviewpic10.jpg";

const projectData = {
  hero: {
    badge: "BY RECHI CONSTRUCTION PVT. LTD.",
    title: "ANANDI VIEW",
    subtitle:
      "A well-designed residential community offering 40 exclusive 2 & 3 BHK apartments across 2 towers in Rajarhat, Kolkata.",
    image: main,
    images: [main],
  },
  vision: {
    title: "Project Overview",
    specs: [
      { value: "2", label: "Residential Towers" },
      { value: "40", label: "Total Apartments" },
      { value: "2 & 3", label: "BHK Configurations" },
      { value: "June 2025", label: "Possession Date" },
    ],
  },
  floorPlan: {
    title: "Floor Plan & Layout",
    subtitle:
      "Thoughtfully planned layouts designed for optimal space utilization, natural air ventilation, and privacy.",
//     image: ,
    configurations: [
      { label: "2 BHK Unit", area: "752 – 1,017 sq.ft." },
      { label: "3 BHK Unit", area: "1,183 – 1,578 sq.ft." },
    ],
    note: "Launched in March 2024 featuring 2 blocks with modern infrastructure and elevator access.",
  },
  residences: {
    title: "Residences",
    subtitle: "Aspirational homes tailored for modern family living in Rajarhat.",
    units: [
      {
        type: "2 BHK",
        size: "752 - 1017 Sq. Ft.",
        features: [
          "Well-ventilated Master Bedroom",
          "Open-plan Living & Dining Space",
          "Dedicated Utility & Kitchen Balcony",
        ],
      },
      {
        type: "3 BHK",
        size: "1183 - 1578 Sq. Ft.",
        features: [
          "Expansive Family Living Lounge",
          "Master Bedroom with Attached Bathroom",
          "Multiple Balconies with Scenic Views",
        ],
      },
    ],
  },
  amenities: {
    title: "Amenities & Facilities",
    subtitle: "Comfort and safety features built for everyday convenience.",
    items: [
      "24/7 Security & CCTV",
      "Power Backup",
      "Gated Community Entry",
      "Car Parking Facility",
      "24/7 Water Supply",
      "Children's Play Area",
      "Fire Safety System",
      "Internal Street Lights",
    ],
  },
  specifications: {
    title: "Specifications",
    subtitle: "Engineered with quality structural planning and modern finishes.",
    items: [
      { title: "Structure", desc: "RCC framed earthquake-resistant structure" },
      { title: "Security", desc: "24x7 gated security personnel and CCTV surveillance" },
      { title: "Power Backup", desc: "Dedicated power backup for common areas and elevators" },
      { title: "Water Supply", desc: "Continuous 24-hour water supply system" },
      { title: "Flooring", desc: "High-grade vitrified tile flooring in all rooms" },
      { title: "Doors & Windows", desc: "Branded flush doors and sliding aluminium windows" },
    ],
  },
  connectivity: {
    title: "Connectivity & Location",
    subtitle: "JFMP+R8M, Kanjeelal Para Rd, Fansipota, Reekjoyoni, West Bengal 700135",
    mapUrl:
      "https://maps.google.com/maps?q=Anandi%20View%2C%20Kanjeelal%20Para%20Rd%2C%20Fansipota%2C%20Reekjoyoni%2C%20West%20Bengal%20700135&t=&z=17&ie=UTF8&iwloc=&output=embed",
    points: [
      { label: "SRCM Road / Kanjeelal Para Rd", distance: "Immediate Access" },
      { label: "Local Daily Uses Market", distance: "Walkable" },
      { label: "Schools & Healthcare Facilities", distance: "5 Mins" },
      { label: "City Centre 2 & Chinar Park", distance: "10 Mins" },
      { label: "Kolkata International Airport", distance: "15 Mins" },
    ],
  },
  projectView: {
    title: "Project View",
    images: [main, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10],
  },
};

export default function AnandiView() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} data={projectData.hero} />
      <VisionSection data={projectData.vision} />
      <FloorPlanSection data={projectData.floorPlan} />
      <AmenitiesSection data={projectData.amenities} />
      <SpecificationsSection data={projectData.specifications} />
      <ConnectivitySection data={projectData.connectivity} />
      <ProjectViewSection data={projectData.projectView} />
   
 </main>
  );
}
