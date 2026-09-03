import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandivillamain.jpg";
import pic1 from "../assets/project-imgs/anandivillapic1.jpg";
import pic2 from "../assets/project-imgs/anandivillapic2.jpg";

// Data Import
import { anandiVillaData } from "./data/projectfile.js";

export default function AnandiVillaPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      <ProjectHeader title={anandiVillaData.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={anandiVillaData.overview.developer}
        location={anandiVillaData.overview.location}
      />

      <ProjectDetailsSection
        title={anandiVillaData.details.title}
        paragraphs={anandiVillaData.details.paragraphs}
      />

      <MediaGallerySection
        projectView={{
          title: anandiVillaData.mediaGallery.projectView.title,
          images: [pic1, pic2],
        }}
        floorPlan={{
          title: anandiVillaData.mediaGallery.floorPlan.title,
          images: [],
        }}
      />
    </main>
  );
}