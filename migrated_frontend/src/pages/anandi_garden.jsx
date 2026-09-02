import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandigardenmain.jpg";

// Data Import
import { anandiGardenData } from "./data/projectfile.js";

export default function AnandiGardenPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      <ProjectHeader title={anandiGardenData.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={anandiGardenData.overview.developer}
        location={anandiGardenData.overview.location}
      />

      <ProjectDetailsSection
        title={anandiGardenData.details.title}
        paragraphs={anandiGardenData.details.paragraphs}
      />

      
    </main>
  );
}