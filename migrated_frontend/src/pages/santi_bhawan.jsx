import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/santibhawanmain.jpg";

// Data Import
import { santiBhawanData } from "./data/projectfile.js";

export default function SantiBhawanPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      <ProjectHeader title={santiBhawanData.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={santiBhawanData.overview.developer}
        location={santiBhawanData.overview.location}
      />

      <ProjectDetailsSection
        title={santiBhawanData.details.title}
        paragraphs={santiBhawanData.details.paragraphs}
      />

      
    </main>
  );
}