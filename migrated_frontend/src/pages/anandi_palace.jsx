import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandipalacemain.jpg";

// Data Import
import { anandiPalaceData } from "./data/projectfile.js";

export default function AnandiPalacePage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      <ProjectHeader title={anandiPalaceData.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={anandiPalaceData.overview.developer}
        location={anandiPalaceData.overview.location}
      />

      <ProjectDetailsSection
        title={anandiPalaceData.details.title}
        paragraphs={anandiPalaceData.details.paragraphs}
      />

      
    </main>
  );
}