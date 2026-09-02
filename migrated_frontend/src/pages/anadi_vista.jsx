import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandivistamain.png";

import projectViewImg from "../assets/project-imgs/anandivistamain2.png";
import projectViewImg2 from "../assets/project-imgs/anandivistamain3.png";

import floorPlanImg from "../assets/project-imgs/floor_plan_anandi_vista.jpeg";
import floorPlanImg2 from "../assets/project-imgs/floorplan1anandivista.jpg";
import flootPlanImg3 from "../assets/project-imgs/floorplan2anandivista.jpg";


// Data Import
import { anandiVistaData } from "./data/projectfile.js";

export default function AnandiVistaPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">

      <ProjectHeader title={anandiVistaData.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={anandiVistaData.overview.developer}
        location={anandiVistaData.overview.location}
      />

      <ProjectDetailsSection
        title={anandiVistaData.details.title}
        paragraphs={anandiVistaData.details.paragraphs}
      />

      <MediaGallerySection
        projectView={{
          title: "Project View",
          images: [
            mainImg,
            projectViewImg,
            projectViewImg2,
          ],
        }}

        floorPlan={{
          title: "Floor Plan",
          images: [
            floorPlanImg,
            floorPlanImg2,
            flootPlanImg3,
          ],
        }}
      />

    </main>
  );
}