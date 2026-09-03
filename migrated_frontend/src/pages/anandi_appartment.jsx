import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";
import UnderConstructionSection from "../component/project_template_code/UnderConstructionSection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandiapartmentmain.jpg";
import floorPlanImg1 from "../assets/project-imgs/anandiapartmentfloorplan1.jpg";
import floorPlanImg2 from "../assets/project-imgs/anandiapartmentfloorplan2.jpg";
import floorPlanImg3 from "../assets/project-imgs/anandiapartmentfloorplan3.jpg";
import floorPlanImg4 from "../assets/project-imgs/anandiapartmentfloorplan4.jpg";
import pic1 from "../assets/project-imgs/anandiapartmentpic1.jpg";
import pic2 from "../assets/project-imgs/anandiapartmentpic2.jpg";
import pic3 from "../assets/project-imgs/anandiapartmentpic3.jpg";
import pic4 from "../assets/project-imgs/anandiapartmentpic4.jpg";
import constructionImg1 from "../assets/project-imgs/anandiapartmentconstruction1.jpg"; 
import constructionImg2 from "../assets/project-imgs/anandiapartmentconstruction2.jpg"; 
import constructionImg3 from "../assets/project-imgs/anandiapartmentconstruction3.jpg"; 

// Data Import
import { anandiApartmentData } from "./data/projectfile.js";

export default function AnandiApartmentPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      {/* Title */}
      <ProjectHeader title={anandiApartmentData.header.title} />

      {/* Overview Section: Main Image, Developer Name, Location */}
      <OverviewSection
        mainImage={mainImg}
        developer={anandiApartmentData.overview.developer}
        location={anandiApartmentData.overview.location}
      />

      {/* Project Details */}
      <ProjectDetailsSection
        title={anandiApartmentData.details.title}
        paragraphs={anandiApartmentData.details.paragraphs}
      />

      {/* Media Gallery Section: Project View & Floor Plan */}
      <MediaGallerySection
        projectView={{
          title: anandiApartmentData.mediaGallery.projectView.title,
          images: [mainImg, pic1, pic2, pic3, pic4],
        }}
        floorPlan={{
          title: anandiApartmentData.mediaGallery.floorPlan.title,
          images: [floorPlanImg1, floorPlanImg2, floorPlanImg3, floorPlanImg4],
        }}
      />

      {/* Standalone Under Construction Section */}
      <UnderConstructionSection
        title={anandiApartmentData.mediaGallery.underConstruction.title}
        images={[constructionImg1
                , constructionImg2, 
                constructionImg3
        ]} // Pass construction images array here, or [] for loading spinner
      />
    </main>
  );
}