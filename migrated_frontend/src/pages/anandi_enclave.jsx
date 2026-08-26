import React from "react";
import HeroSection from "../component/individual_project_source/HeroSection.jsx";
import VisionSection from "../component/individual_project_source/VisionSection.jsx";
import FloorPlanSection from "../component/individual_project_source/FloorPlanSection.jsx";
import ResidencesSection from "../component/individual_project_source/ResidencesSection.jsx";
import AmenitiesSection from "../component/individual_project_source/AmenitiesSection.jsx";
import SpecificationsSection from "../component/individual_project_source/SpecificationsSection.jsx";
import ConnectivitySection from "../component/individual_project_source/ConnectivitySection.jsx";
import ProjectViewSection from "../component/individual_project_source/ProjectViewSection.jsx";

// Import your asset images
import heroImg from "../assets/project-imgs/rechi3.jpeg";
import visionImg from "../assets/project-imgs/rechi2.jpg";
import floorPlanImg from "../assets/project-imgs/floor_plan_anandi_vista.jpeg";

const projectData = {
  hero: {
    badge: "BY RECHI NIRMAAN PVT. LTD.",
    title: "ANANDI ENCLAVE",
    subtitle:
      "A thoughtfully designed ready-to-move residential community offering 72 exclusive 2 & 3 BHK Vastu-compliant apartments in Rajarhat, Kolkata.",
    image: heroImg,
  },
  vision: {
    title: "Project Overview",
    specs: [
      { value: "2", label: "Residential Towers" },
      { value: "72", label: "Total Apartments" },
      { value: "36 Kottah", label: "Total Land Area" },
      { value: "40%", label: "Open Green Space" },
      { value: "G+4 / B+G+6", label: "Tower Heights" },
      { value: "Ready to Move", label: "Possession Status" },
    ],
  },
  floorPlan: {
    title: "Floor Plan & Layout",
    subtitle:
      "Vastu-compliant architectural planning designed for maximum natural light, ventilation, and functional space utilization.",
    image: floorPlanImg,
    configurations: [
      { label: "3 BHK (Flat A)", area: "1,342 – 1,486 sq.ft." },
      { label: "3 BHK (Flat B)", area: "1,342 – 1,486 sq.ft." },
      { label: "2 BHK (Flat C)", area: "922 – 1,181 sq.ft." },
      { label: "2 BHK (Flat D)", area: "922 – 1,181 sq.ft." },
      { label: "3 BHK (Flat E)", area: "1,500 – 1,707 sq.ft." },
      { label: "3 BHK (Flat F)", area: "1,500 – 1,707 sq.ft." },
      { label: "2 BHK (Flat G)", area: "1,010 – 1,215 sq.ft." },
      { label: "3 BHK (Flat H)", area: "1,455 – 1,578 sq.ft." },
      { label: "2 BHK (Flat I)", area: "1,010 – 1,215 sq.ft." },
      { label: "3 BHK (Flat J)", area: "1,455 – 1,578 sq.ft." },
      { label: "2 BHK (Flat K)", area: "1,140 – 1,323 sq.ft." },
    ],
    note: "Spans across ~0.6 Acres (36 Kottah) with 40% open green spaces across G+4 and B+G+6 blocks.",
  },
  residences: {
    title: "Residences",
    subtitle: "Modern, comfortable homes built for seamless urban living in Bablatala, Rajarhat.",
    units: [
      {
        type: "2 BHK (Flat C & D Layouts)",
        size: "922 - 1,181 Sq. Ft.",
        features: [
          "2 Bedrooms & 2 Bathrooms",
          "Open-plan Living & Dining Space",
          "Private Balcony",
          "Vitrified Tile Flooring",
        ],
      },
      {
        type: "2 BHK (Flat G, I & K Layouts)",
        size: "1,010 - 1,323 Sq. Ft.",
        features: [
          "2 Bedrooms & 2 Bathrooms",
          "Expanded Living Room Layout",
          "Kitchen Utility Balcony",
          "Cross-Ventilated Master Bedroom",
        ],
      },
      {
        type: "3 BHK (Flat A & B Layouts)",
        size: "1,342 - 1,486 Sq. Ft.",
        features: [
          "3 Bedrooms & 2 Bathrooms",
          "Spacious Dining Lounge",
          "Private Balcony",
          "Vastu-Compliant Orientation",
        ],
      },
      {
        type: "3 BHK (Flat E, F, H & J Layouts)",
        size: "1,455 - 1,707 Sq. Ft.",
        features: [
          "3 Bedrooms & 3 Bathrooms",
          "2 Private Balconies",
          "Large Family Living Lounge",
          "Dedicated Master Suite",
        ],
      },
    ],
  },
  amenities: {
    title: "Amenities & Facilities",
    subtitle: "Essential lifestyle facilities designed for security, health, and comfort.",
    items: [
      "Fitness Center / Gymnasium",
      "Children's Play Zone",
      "Senior Citizen Sitting Area",
      "Community Hall",
      "24/7 Gated Security",
      "CCTV Surveillance",
      "24x7 Water Supply",
      "Power Backup Generator",
      "Reserved Covered Car Parking",
      "Reserved Open Car Parking",
      "Fire Safety Systems",
      "Internal Illumination",
    ],
  },
  specifications: {
    title: "Specifications",
    subtitle: "Engineered with individual high-grade structural planning and modern material finishes.",
    items: [
      { title: "Structure", desc: "RCC framed earthquake-resistant structure" },
      { title: "Living Room Flooring", desc: "Premium vitrified tiles" },
      { title: "Bedroom Flooring", desc: "Vitrified tile flooring in all rooms" },
      { title: "Bathroom Flooring", desc: "Anti-skid ceramic floor tiles" },
      { title: "Balcony Flooring", desc: "Weather-resistant anti-skid tiles" },
      { title: "Kitchen Platform", desc: "Granite counter top with stainless steel sink" },
      { title: "Kitchen Dado", desc: "Ceramic tiles up to 2 ft height above platform" },
      { title: "Sanitary Fittings", desc: "Branded CP fittings and sanitaryware" },
      { title: "Plumbing", desc: "Concealed hot & cold water pipelines" },
      { title: "Main Door", desc: "Flush door with decorative lock and hardware" },
      { title: "Internal Doors", desc: "Quality wooden frame flush doors" },
      { title: "Windows", desc: "Powder-coated aluminum sliding windows with glass" },
      { title: "Wiring", desc: "Concealed fire-resistant copper wiring" },
      { title: "Switches", desc: "Modular switches with adequate plug points" },
      { title: "Air Conditioning", desc: "Split AC electrical provisioning in bedrooms" },
      { title: "Security", desc: "24x7 gated security personnel with CCTV" },
      { title: "Power Backup", desc: "Generator backup for common areas & elevators" },
      { title: "Water System", desc: "Uninterrupted deep tube-well water supply" },
    ],
  },
  connectivity: {
    title: "Connectivity & Location",
    subtitle: "Sourav Ganguly Avenue, Bablatala, Rajarhat, Kolkata - 700136",
    mapUrl:
      "https://maps.google.com/maps?q=Anandi%20Enclave%2C%20Bablatala%2C%20Sourav%20Ganguly%20Avenue%2C%20Rajarhat%2C%20Kolkata%20700136&t=&z=17&ie=UTF8&iwloc=&output=embed",
    points: [
      { label: "Bablatala Bus Stop", distance: "150 m (2 Mins)" },
      { label: "City Centre 2 / Titumir Metro Station", distance: "3.4 km (8 Mins)" },
      { label: "Charnock & ILS Hospitals", distance: "4.5 km (12 Mins)" },
      { label: "Kolkata International Airport", distance: "5.2 km (15 Mins)" },
      { label: "Sector V IT Hub", distance: "9.5 km (25 Mins)" },
    ],
  },
  projectView: {
    title: "Project View",
    images: [heroImg, visionImg, floorPlanImg],
  },
};

export default function AnandiEnclave() {
  return (
    <main className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#fbf8f3] text-gray-900 scroll-smooth snap-y snap-mandatory">
      <HeroSection hero={projectData.hero} showCtas={false} />
      <VisionSection data={projectData.vision} />
      <FloorPlanSection data={projectData.floorPlan} />
      <ResidencesSection data={projectData.residences} />
      <AmenitiesSection data={projectData.amenities} />
      <SpecificationsSection data={projectData.specifications} />
      <ConnectivitySection data={projectData.connectivity} />
      <ProjectViewSection data={projectData.projectView} />
    </main>
  );
}
