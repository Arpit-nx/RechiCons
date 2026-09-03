import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandiparkmain.jpg";

// Data Import
import { anandiParkData } from "./data/projectfile.js";

export default function AnandiParkPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      <ProjectHeader title={anandiParkData.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={anandiParkData.overview.developer}
        location={anandiParkData.overview.location}
      />

      <ProjectDetailsSection
        title={anandiParkData.details.title}
        paragraphs={anandiParkData.details.paragraphs}
      />

      
    </main>
  );
}