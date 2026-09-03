import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandienclavemain.jpg";

import floorPlanImg1 from "../assets/project-imgs/anandienclavefloorplan1.jpg";
import floorPlanImg2 from "../assets/project-imgs/anandienclavefloorplan2.png";
import floorPlanImg3 from "../assets/project-imgs/anandienclavefloorplan3.jpg";
import floorPlanImg4 from "../assets/project-imgs/anandienclavefloorplan4.jpg";
import floorPlanImg5 from "../assets/project-imgs/anandienclavefloorplan5.jpg";
import floorPlanImg6 from "../assets/project-imgs/anandienclavefloorplan6.jpg";
import floorPlanImg7 from "../assets/project-imgs/anandienclavefloorplan7.jpg";
import floorPlanImg8 from "../assets/project-imgs/anandienclavefloorplan8.jpg";
import floorPlanImg9 from "../assets/project-imgs/anandienclavefloorplan9.jpg";
import floorPlanImg10 from "../assets/project-imgs/anandienclavefloorplan10.jpg";
import floorPlanImg11 from "../assets/project-imgs/anandienclavefloorplan11.jpg";
import floorPlanImg12 from "../assets/project-imgs/anandienclavefloorplan12.jpg";
import floorPlanImg13 from "../assets/project-imgs/anandienclavefloorplan13.jpg";
import floorPlanImg14 from "../assets/project-imgs/anandienclavefloorplan14.jpg";

import pic1 from "../assets/project-imgs/anandienclavepic1.jpg";
import pic2 from "../assets/project-imgs/anandienclavepic2.jpg";
import pic3 from "../assets/project-imgs/anandienclavepic3.jpg";
import pic4 from "../assets/project-imgs/anandienclavepic4.jpg";
import pic5 from "../assets/project-imgs/anandienclavepic5.jpg";
import pic6 from "../assets/project-imgs/anandienclavepic6.jpg";
import pic7 from "../assets/project-imgs/anandienclavepic7.jpg";
import pic8 from "../assets/project-imgs/anandienclavepic8.jpg";
import pic9 from "../assets/project-imgs/anandienclavepic9.jpg";
import pic10 from "../assets/project-imgs/anandienclavepic10.jpg";
import pic11 from "../assets/project-imgs/anandienclavepic11.jpg";
import pic12 from "../assets/project-imgs/anandienclavepic12.jpg";
import pic13 from "../assets/project-imgs/anandienclavepic13.jpg";
import pic14 from "../assets/project-imgs/anandienclavepic14.jpg";

// Data Import
import { anandiEnclaveData } from "./data/projectfile.js";

export default function AnandiEnclavePage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      
      {/* =========================================================
          PROJECT HEADER
      ========================================================= */}

      <ProjectHeader title={anandiEnclaveData.header.title} />

      {/* =========================================================
          PROJECT OVERVIEW
      ========================================================= */}

      <OverviewSection
        mainImage={mainImg}
        developer={anandiEnclaveData.overview.developer}
        location={anandiEnclaveData.overview.location}
      />

      {/* =========================================================
          PROJECT DETAILS
      ========================================================= */}

      <ProjectDetailsSection
        title={anandiEnclaveData.details.title}
        paragraphs={anandiEnclaveData.details.paragraphs}
      />

      {/* =========================================================
          MEDIA GALLERY
      ========================================================= */}

      <MediaGallerySection
        projectView={{
          title: anandiEnclaveData.mediaGallery.projectView.title,
          images: [
            pic1,
            pic2,
            pic3,
            pic4,
            pic5,
            pic6,
            pic7,
            pic8,
            pic9,
            pic10,
            pic11,
            pic12,
            pic13,
            pic14,
          ],
        }}

        floorPlan={{
          title: anandiEnclaveData.mediaGallery.floorPlan.title,
          images: [
            floorPlanImg1,
            floorPlanImg2,
            floorPlanImg3,
            floorPlanImg4,
            floorPlanImg5,
            floorPlanImg6,
            floorPlanImg7,
            floorPlanImg8,
            floorPlanImg9,
            floorPlanImg10,
            floorPlanImg11,
            floorPlanImg12,
            floorPlanImg13,
            floorPlanImg14,
          ],
        }}
      />

    </main>
  );
}