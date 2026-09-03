import React from "react";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

// Asset Imports
import mainImg from "../assets/project-imgs/anandiviewmain.jpg";
import pic1 from "../assets/project-imgs/anandiviewpic1.jpg";
import pic2 from "../assets/project-imgs/anandiviewpic2.jpg";
import pic3 from "../assets/project-imgs/anandiviewpic3.jpg";
import pic4 from "../assets/project-imgs/anandiviewpic4.jpg";
import pic5 from "../assets/project-imgs/anandiviewpic5.jpg";
import pic6 from "../assets/project-imgs/anandiviewpic6.jpg";
import pic7 from "../assets/project-imgs/anandiviewpic7.jpg";
import pic8 from "../assets/project-imgs/anandiviewpic8.jpg";
import pic9 from "../assets/project-imgs/anandiviewpic9.jpg";
import pic10 from "../assets/project-imgs/anandiviewpic10.jpg";
import pic11 from "../assets/project-imgs/anandiviewpic11.jpg";
import pic12 from "../assets/project-imgs/anandiviewpic12.jpg";

// Data Import
import { anandiViewData } from "./data/projectfile.js";

export default function AnandiViewPage() {
  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">
      <ProjectHeader title={anandiViewData.header.title} />

      <OverviewSection
        mainImage={mainImg}
        developer={anandiViewData.overview.developer}
        location={anandiViewData.overview.location}
      />

      <ProjectDetailsSection
        title={anandiViewData.details.title}
        paragraphs={anandiViewData.details.paragraphs}
      />

      <MediaGallerySection
        projectView={{
          title: anandiViewData.mediaGallery.projectView.title,
          images: [
            mainImg,
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
          ],
        }}
        floorPlan={{
          title: anandiViewData.mediaGallery.floorPlan.title,
          images:[],
        }}
      />
    </main>
  );
}