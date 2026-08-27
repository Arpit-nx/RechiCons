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
    title: "ANANDI VISTA",
    subtitle:
      "G+7 storied residences in the heart of Bablatala, Kolkata. Curated 2 & 3 BHK homes from 1,227 to 1,539 sq. ft.",
    primaryCta: "Residences",
    secondaryCta: "Amenities",
    images: [heroImg],
  },

  vision: {
    title: "The Vision",
    specs: [
      { value: "G+7", label: "Storied Tower" },
      { value: "2 & 3", label: "BHK Configurations" },
      { value: "1227–1539", label: "Sq. Ft. Range" },
      { value: "RCC", label: "Framed Structure" },
    ],
  },

  floorPlan: {
    title: "Typical Floor Plan",
    subtitle:
      "A symmetric G+7 layout with two lifts, central corridor and dedicated puja rooms.",
    images: [floorPlanImg],
    configurations: [
      { label: "Flat A", area: "1,539 sq.ft." },
      { label: "Flat B", area: "1,502 sq.ft." },
      { label: "Flat C", area: "1,308 sq.ft." },
      { label: "Flat D", area: "1,227 sq.ft." },
      { label: "Flat E", area: "1,539 sq.ft." },
      { label: "Flat F", area: "1,502 sq.ft." },
    ],
    note: "All units feature 2 lifts and a 2,500mm wide central corridor.",
  },

  residences: {
    title: "Residences",
    subtitle: "Thoughtfully designed homes for modern living.",
    units: [
      {
        type: "2 BHK",
        size: "1227 Sq. Ft.",
        features: [
          "Spacious 2-Bedroom Layout",
          "Generous Living & Dining Space",
          "Well-Planned Utility Areas",
        ],
      },
      {
        type: "2 BHK Plus",
        size: "1308 Sq. Ft.",
        features: [
          "Enhanced 2-Bedroom Configuration",
          "Expansive Living & Dining Area",
          "Dedicated Basin & Utility Space",
        ],
      },
      {
        type: "3 BHK",
        size: "1502 Sq. Ft.",
        features: [
          "Spacious 3-Bedroom Layout",
          "Expansive Living & Dining Area",
          "Modern Functional Kitchen",
        ],
      },
      {
        type: "3 BHK Plus",
        size: "1539 Sq. Ft.",
        features: [
          "Premium 3-Bedroom Residence",
          "Dedicated Puja Room",
          "Large Family Living & Dining Space",
        ],
      },
    ],
  },

  amenities: {
    title: "Amenities",
    subtitle: "A Residence That Gives Back",
    items: [
      "Community Hall",
      "Gymnasium",
      "Children's Play Area",
      "Rooftop Garden",
      "24/7 Security",
      "Power Backup",
      "Water Treatment",
      "Fire Safety",
      "Visitor Lounge",
      "Covered Parking",
      "CCTV Surveillance",
      "Elevator Access",
    ],
  },

  specifications: {
    title: "Specifications",
    subtitle: "Engineered for quality, longevity, and modern luxury.",
    items: [
      { title: "Structure", desc: "RCC earthquake-resistant frame" },
      { title: "Flooring", desc: "Granite in living & dining" },
      { title: "Doors", desc: "Premium flush doors" },
      { title: "Electrical", desc: "Concealed copper wiring" },
      { title: "Kitchen", desc: "Granite counter + SS sink" },
      { title: "Windows", desc: "Aluminium sliding frames" },
      { title: "Walls", desc: "Acrylic paint finish" },
      { title: "Bathrooms", desc: "Premium sanitary fittings" },
      { title: "Security", desc: "CCTV + gated entry system" },
      { title: "Water Supply", desc: "24×7 treated water" },
      { title: "Lift", desc: "Automatic passenger lift" },
      { title: "Parking", desc: "Covered resident parking" },
    ],
  },

  connectivity: {
    title: "Connectivity",
    subtitle: "Tetul Tala, Sourav Ganguly Avenue • Bablatala, Kolkata 700136",
    mapUrl:
      "https://maps.google.com/maps?q=Anandi+Vista,+Sourav+Ganguly+Avenue,+Bablatala,+Kolkata&t=&z=16&ie=UTF8&iwloc=&output=embed",
    points: [
      { label: "NSCB International Airport", distance: "10 Mins" },
      { label: "Titumir (CC2) Metro Station", distance: "5 Mins" },
      { label: "City Centre 2 & Chinar Park", distance: "5 Mins" },
      { label: "VIP Road & Rajarhat Main Road", distance: "Direct Access" },
      { label: "Sector V IT Hub", distance: "15 Mins" },
    ],
  },

  projectView: {
    title: "Project View",
    subtitle: "Visual assets showcasing the structure and layout.",
    images: [heroImg, visionImg, floorPlanImg],
  },
};

export default function AnadiVista() {
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
