import HeroSlider from "../component/heroSlider";
import ManiVerticals from "../component/maniVerticals";
import ProjectsSection from "../component/projectsection";
import { useAuth } from "../context/AuthContext";

export default function Projects() {
   const { isAuthenticated, admin } = useAuth();

  console.log("Admin logged in:", isAuthenticated);
  console.log("Admin:", admin);
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