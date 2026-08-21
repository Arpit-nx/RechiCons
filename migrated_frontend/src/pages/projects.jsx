import HeroSlider from "../component/heroSlider";
import ManiVerticals from "../component/maniVerticals";
import ProjectsSection from "../component/projectsection";

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Mani Verticals - Card Swap Section */}
      <ManiVerticals />

      {/* Company Projects */}
      <ProjectsSection />
    </>
  );
}