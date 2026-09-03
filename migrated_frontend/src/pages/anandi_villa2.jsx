import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandivilla2main.jpg";

// Data Import
import { anandiVillaPhase2Data } from "./data/projectfile.js";

export default function AnandiVillaPhase2Page() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      <ProjectHeader title={anandiVillaPhase2Data.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={anandiVillaPhase2Data.overview.developer}
        location={anandiVillaPhase2Data.overview.location}
      />

      <ProjectDetailsSection
        title={anandiVillaPhase2Data.details.title}
        paragraphs={anandiVillaPhase2Data.details.paragraphs}
      />

      
    </main>
  );
}