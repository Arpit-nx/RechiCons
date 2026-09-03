import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandisunrisemain.jpg";

// Data Import
import { anandiSunriseData } from "./data/projectfile.js";

export default function AnandiSunrisePage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      <ProjectHeader title={anandiSunriseData.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={anandiSunriseData.overview.developer}
        location={anandiSunriseData.overview.location}
      />

      <ProjectDetailsSection
        title={anandiSunriseData.details.title}
        paragraphs={anandiSunriseData.details.paragraphs}
      />

      
    </main>
  );
}