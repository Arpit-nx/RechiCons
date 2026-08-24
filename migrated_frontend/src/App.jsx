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
// import Anandvista from "./pages/anadi_vista.jsx";
// import AnandiGarden from "./pages/anandi_garden.jsx";
// import AnandiGreenView from "./pages/anandi_green_view.jsx";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-[#fff8ef]">
//         <div className="fixed left-0 right-0 top-0 z-[9999]">
//           <Navbar isVisible={true} />
//         </div>

//         <main className="pt-20">
//           <AnandiGreenView />
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
import Projects from "./pages/projects.jsx";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showNav, setShowNav] = useState(!isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setShowNav(true);
    }
  }, [isHomePage]);

  const handleSplashEnd = () => {
    setShowNav(true);
    // Triggers Navbar's internal scroll calculations instantly
    window.dispatchEvent(new Event("scroll"));
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#fff8ef]">

      {/* =========================
          NAVBAR
      ========================== */}
      <div className="fixed left-0 right-0 top-0 z-[9999]">
        <Navbar isVisible={showNav} />
      </div>

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

          {/* Other Services */}
          <Route
            path="/other-services"
            element={<OtherServices />}
          />

          {/* Enquiry */}
          <Route
            path="/enquire"
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