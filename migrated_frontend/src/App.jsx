
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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
import Admin from "./pages/adminLogin.jsx";

function AppContent() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const [showNav, setShowNav] = useState(!isHomePage);

  useEffect(() => {
    const restoreScrollY = location.state?.restoreScrollY;

    if (typeof restoreScrollY === "number") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: restoreScrollY,
            left: 0,
            behavior: "instant",
          });
        });
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }

    if (!isHomePage) {
      setShowNav(true);
    }
  }, [location.key, isHomePage]);

  const handleSplashEnd = () => {
    setShowNav(true);

    window.dispatchEvent(new Event("scroll"));

    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#fff8ef]">
      <Navbar isVisible={showNav} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home onSplashEnd={handleSplashEnd} />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/projects/completed"
            element={<CompletedProjects />}
          />

          <Route
            path="/projects/ongoing"
            element={<OngoingProjects />}
          />

          <Route
            path="/projects/upcoming"
            element={<UpcomingProjects />}
          />

          <Route
            path="/project"
            element={<ProjectPage />}
          />

          <Route
            path="/other-services"
            element={<OtherServices />}
          />

          <Route
            path="/enquire"
            element={<Enquiry />}
          />

          <Route
            path="/contact"
            element={<Contect />}
          />

          <Route
            path="/admin"
            element={<Admin />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

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

