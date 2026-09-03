
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./component/nav_bar.jsx";
import Footer from "./component/footer.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import OtherServices from "./pages/otherservise.jsx";
import Contect from "./pages/contect.jsx";
import Enquiry from "./pages/EnquiryPage.jsx";

import CompletedProjects from "./pages/CompletedProjects.jsx";
import OngoingProjects from "./pages/OngoingProjects.jsx";
import UpcomingProjects from "./pages/UpcomingProjects.jsx";

import ProjectPage from "./pages/ProjectPage.jsx";
import NotFound from "./pages/NotFound.jsx";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showNav, setShowNav] = useState(!isHomePage);

  // Scroll to top automatically on route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

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
          NAVBAR
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

          {/* =========================
              PROJECT CATEGORIES
          ========================== */}

          {/* Completed Projects */}
          <Route
            path="/projects/completed"
            element={<CompletedProjects />}
          />

          {/* Ongoing Projects */}
          <Route
            path="/projects/ongoing"
            element={<OngoingProjects />}
          />

          {/* Upcoming Projects */}
          <Route
            path="/projects/upcoming"
            element={<UpcomingProjects />}
          />

          {/* Individual Project */}
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

          <Route path="*" element={<NotFound />} />

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

