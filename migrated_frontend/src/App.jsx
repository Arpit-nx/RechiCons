// import { BrowserRouter } from "react-router-dom";
// import Navbar from "./component/nav_bar.jsx";
// import Footer from "./component/footer.jsx";
// import AnandiApartment from "./pages/anandi_appartment.jsx";
// import AnandiVilla from "./pages/anandi_villa.jsx";
// import AnandiPark from "./pages/anandi_park.jsx";
// import Anandiresidency from "./pages/anandi_residency.jsx";
// import AnandiVillaPhase2 from "./pages/anandi_villa2.jsx";
// import SantiBhawan from "./pages/santi_bhawan.jsx";
// import AnandiSunrise from "./pages/anandi_sunrise.jsx";
// import AnandiPalace from "./pages/anandi_palace.jsx";
// import Anandivista from "./pages/anadi_vista.jsx";
// import AnandiGarden from "./pages/anandi_garden.jsx";
// import AnandiGreenView from "./pages/anandi_green_view.jsx";
// import Anandiview from "./pages/anandi_view.jsx";
// import AnandiEnclave from "./pages/anandi_enclave.jsx";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-[#fff8ef]">
//         <div className="fixed left-0 right-0 top-0 z-[9999]">
//           <Navbar isVisible={true} />
//         </div>

//         <main className="pt-20">
//           <AnandiEnclave />
//         </main>

//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }


import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./component/nav_bar.jsx";
import Footer from "./component/footer.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import OtherServices from "./pages/otherservise.jsx";
import Contect from "./pages/contect.jsx";
import Enquiry from "./pages/EnquiryPage.jsx"; // <--- Added Enquiry component
import Projects from "./pages/projects.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showNav, setShowNav] = useState(!isHomePage);

  // Scroll to top automatically on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    if (!isHomePage) {
      setShowNav(true);
    }
  }, [location.pathname, isHomePage]);

  const handleSplashEnd = () => {
    setShowNav(true);
    window.dispatchEvent(new Event("scroll"));
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#fff8ef]">

      {/* =========================
          NAVBAR (Normal flow)
      ========================== */}
      <Navbar isVisible={showNav} />

      {/* =========================
          PAGE CONTENT
      ========================== */}
      <main>
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home onSplashEnd={handleSplashEnd} />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Projects */}
          <Route
            path="/project"
            element={<Projects />}
          />

          {/* Individual project */}
          <Route
            path="/project/:slug"
            element={<ProjectPage />}
          />
          
          {/* Other Services */}
          <Route
            path="/other-services"
            element={<OtherServices />}
          />

          {/* Enquiry */}
          <Route
            path="/enquire"
            element={<Enquiry />}
          />

          {/* Contact Us */}
          <Route
            path="/contact"
            element={<Contect />}
          />

        </Routes>
      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}