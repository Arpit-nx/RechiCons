import Navbar from "./component/nav_bar.jsx";
import Footer from "./component/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import OtherServices from "./pages/otherservise.jsx";  // import About
import { useCallback, useState } from "react";
import Contect from "./pages/contect.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#fff8ef]">

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-[9999]">
        <Navbar isVisible={true} />
      </div>

      {/* Main Page */}
      <main>
        <Contect />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
