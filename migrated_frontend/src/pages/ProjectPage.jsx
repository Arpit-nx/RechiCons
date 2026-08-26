import { useParams, Navigate } from "react-router-dom";

import AnandiApartment from "./anandi_appartment.jsx";
import AnandiVilla from "./anandi_villa.jsx";
import AnandiPark from "./anandi_park.jsx";
import Anandiresidency from "./anandi_residency.jsx";
import AnandiVillaPhase2 from "./anandi_villa2.jsx";
import SantiBhawan from "./santi_bhawan.jsx";
import AnandiSunrise from "./anandi_sunrise.jsx";
import AnandiPalace from "./anandi_palace.jsx";
import Anandvista from "./anadi_vista.jsx";
import AnandiGarden from "./anandi_garden.jsx";
import AnandiGreenView from "./anandi_green_view.jsx";
import AnandiEnclave from "./anandi_enclave.jsx";

const projectPages = {
  "anandi-enclave": AnandiEnclave,
  "anandi-apartment": AnandiApartment,
  "anandi-villa": AnandiVilla,
  "anandi-park": AnandiPark,
  "anandi-residency": Anandiresidency,
  "anandi-villa-phase-2": AnandiVillaPhase2,
  "santi-bhawan": SantiBhawan,
  "anandi-sunrise": AnandiSunrise,
  "anandi-palace": AnandiPalace,
  "anandi-vista": Anandvista,
  "anandi-garden": AnandiGarden,
  "anandi-green-view": AnandiGreenView,
};

export default function ProjectPage() {
  const { slug } = useParams();

  const ProjectComponent = projectPages[slug];

  if (!ProjectComponent) {
    return <Navigate to="/project" replace />;
  }

  return <ProjectComponent />;
}