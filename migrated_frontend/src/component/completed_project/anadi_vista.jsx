import ProjectTemplate from "../individual_project_source/project_template.jsx";
import heroImg from "../../assets/project-imgs/rechi3.jpeg";
import visionImg from "../../assets/project-imgs/rechi2.jpg";
import floorPlanImg from "../../assets/project-imgs/rechi1.jpeg";

const projectData = {
  hero: {
    title: "ANADI VISTA",
    subtitle: "Luxurious 3 & 4 BHK apartments designed for modern living.",
    badge: "Featured Project",
    image: heroImg,
  },
  vision: {
    title: "A Vision of Elegance",
    image: visionImg,
    text: [
      "ANADI VISTA is engineered to harmonize contemporary architectural aesthetics with seamless functional efficiency.",
      "Every square foot is optimized to allow maximum sunlight, natural air circulation, and privacy for each apartment.",
    ],
  },
  floorPlan: {
    title: "Typical Floor Plan",
    image: floorPlanImg,
    text: [
      "Our thoughtful layout eliminates wasted corridor space, offering expansive living and dining areas that flow naturally onto private balconies.",
    ],
  },
  residences: {
    title: "The Residences",
    text: "Designed with state-of-the-art interior layouts, offering grand double-height ceilings in select units and expansive floor-to-ceiling windows.",
    highlights: [
      "Italian marble flooring in living areas",
      "Private balcony views",
      "Smart door lock security",
      "Spacious modular kitchens",
    ],
  },
  amenities: {
    title: "Exclusive Amenities",
    text: "Experience modern leisure with world-class facilities right at your doorstep.",
    items: [
      { title: "Rooftop Swimming Pool", description: "Temperature controlled infinity pool overlooking the skyline." },
      { title: "Fully Equipped Gym", description: "State-of-the-art cardio and weight training zone." },
      { title: "Clubhouse & Lounge", description: "Multi-purpose community space for events and relaxation." },
    ],
  },
  specifications: {
    title: "Technical Specifications",
    text: "Built using grade-A seismic-resistant materials ensuring durability and superior sound insulation.",
    items: [
      { title: "Structure", description: "RCC framed earthquake resistant structure." },
      { title: "Flooring", description: "Vitrified tiles in bedrooms, Italian marble in living room." },
    ],
  },
  connectivity: {
    title: "Strategic Location",
    text: "Situated in the prime district with direct access to major highways, business centers, and top schools.",
    points: [
      "5 mins from Central Railway Station",
      "10 mins from International Airport",
      "2 mins walk to City Hospital",
    ],
  },
};

export default function AnadiVista() {
  return <ProjectTemplate data={projectData} />;
}