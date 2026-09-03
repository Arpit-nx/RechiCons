import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandigargenviewmain.jpg";
import visionImg from "../assets/project-imgs/anandigardenviewpic.jpg";

// Data Import
import { anandiGreenViewData } from "./data/projectfile.js";

export default function AnandiGreenViewPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      <ProjectHeader title={anandiGreenViewData.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={anandiGreenViewData.overview.developer}
        location={anandiGreenViewData.overview.location}
      />

      <ProjectDetailsSection
        title={anandiGreenViewData.details.title}
        paragraphs={anandiGreenViewData.details.paragraphs}
      />

      <MediaGallerySection
        projectView={{
          title: anandiGreenViewData.mediaGallery.projectView.title,
          images: [visionImg],
        }}
        floorPlan={{
          title: anandiGreenViewData.mediaGallery.floorPlan.title,
          images: [],
        }}
      />
    </main>
  );
}