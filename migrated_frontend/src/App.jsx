import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/nav_bar.jsx";
import Footer from "./component/footer.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import OtherServices from "./pages/otherservise.jsx";
import Contect from "./pages/contect.jsx";
import Projects from "./pages/projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fff8ef]">

        {/* =========================
            NAVBAR
        ========================== */}
        <div className="fixed left-0 right-0 top-0 z-[9999]">
          <Navbar isVisible={true} />
        </div>

        {/* =========================
            PAGE CONTENT
        ========================== */}
        <main>
          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<Home />}
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

            {/* Admin Login */}
            {/* Add AdminLogin component here later */}
            {/*
            <Route
              path="/admin/login"
              element={<AdminLogin />}
            />
            */}

          </Routes>
        </main>

        {/* =========================
            FOOTER
        ========================== */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;