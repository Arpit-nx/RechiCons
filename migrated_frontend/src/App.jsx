import Navbar from "./component/nav_bar.jsx";
import SideBar from "./component/side_bar.jsx";   // already used inside Navbar, but imported if needed
import Footer from "./component/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import { Contact } from "lucide-react";
// import CursorTorch from "./component/CursorTorch";
import { useCallback, useState } from "react";

function App() {
  const [showChrome, setShowChrome] = useState(false);
  const handleSplashEnd = useCallback(() => {
    setShowChrome(true);
  }, []);

  return (
    <>
      {/* Navbar (includes SideBar inside it) */}
      <Navbar isVisible={showChrome} />


      {/* ===== Main Content Area ===== */}
      <main className="min-h-screen">
        {/* Put your page content here */}
        {/* <Home/> */}
        <Home onSplashEnd={handleSplashEnd} />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;