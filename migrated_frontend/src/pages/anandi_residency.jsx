import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandirecidencymain.jpg";
import floorPlanImg1 from "../assets/project-imgs/anandirecidencyfloorplan1.jpg";
import floorPlanImg2 from "../assets/project-imgs/anandirecidencyfloorplan2.jpg";

import pic1 from "../assets/project-imgs/anandirecidencypic1.jpg";
import pic2 from "../assets/project-imgs/anandirecidencypic2.jpg";
import pic3 from "../assets/project-imgs/anandirecidencypic3.jpg";
import pic4 from "../assets/project-imgs/anandirecidencypic4.jpg";
import pic5 from "../assets/project-imgs/anandirecidencypic5.jpg";
import pic6 from "../assets/project-imgs/anandirecidencypic6.jpg";
import pic7 from "../assets/project-imgs/anandirecidencypic7.jpg";
import pic8 from "../assets/project-imgs/anandirecidencypic8.jpg";
import pic9 from "../assets/project-imgs/anandirecidencypic9.jpg";
import pic10 from "../assets/project-imgs/anandirecidencypic10.jpg";
import pic11 from "../assets/project-imgs/anandirecidencypic11.jpg";
import pic12 from "../assets/project-imgs/anandirecidencypic12.jpg";
import pic13 from "../assets/project-imgs/anandirecidencypic13.jpg";
import pic14 from "../assets/project-imgs/anandirecidencypic14.jpg";
import pic15 from "../assets/project-imgs/anandirecidencypic15.jpg";
import pic16 from "../assets/project-imgs/anandirecidencypic16.jpg";
import pic17 from "../assets/project-imgs/anandirecidencypic17.jpg";
import pic18 from "../assets/project-imgs/anandirecidencypic18.jpg";
import pic19 from "../assets/project-imgs/anandirecidencypic19.jpg";
import pic20 from "../assets/project-imgs/anandirecidencypic20.jpg";
import pic21 from "../assets/project-imgs/anandirecidencypic21.jpg";
import pic22 from "../assets/project-imgs/anandirecidencypic22.jpg";
import pic23 from "../assets/project-imgs/anandirecidencypic23.jpg";

// Data Import
import { anandiResidencyData } from "./data/projectfile.js";

export default function AnandiResidencyPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      <ProjectHeader title={anandiResidencyData.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={anandiResidencyData.overview.developer}
        location={anandiResidencyData.overview.location}
      />

      <ProjectDetailsSection
        title={anandiResidencyData.details.title}
        paragraphs={anandiResidencyData.details.paragraphs}
      />

      <MediaGallerySection
        projectView={{
          title: anandiResidencyData.mediaGallery.projectView.title,
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
            pic15,
            pic16,
            pic17,
            pic18,
            pic19,
            pic20,
            pic21,
            pic22,
            pic23,
          ],
        }}
        floorPlan={{
          title: anandiResidencyData.mediaGallery.floorPlan.title,
          images: [floorPlanImg1, floorPlanImg2],
        }}
      />
    </main>
  );
}