import Navbar from "./component/nav_bar.jsx";
import SideBar from "./component/side_bar.jsx";   // already used inside Navbar, but imported if needed
import Footer from "./component/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import CursorTorch from "./component/CursorTorch";

function App() {
  return (
    <>
      {/* Navbar (includes SideBar inside it) */}
      <Navbar />

      {/* Cursor torch effect */}
      <CursorTorch />

      {/* ===== Main Content Area ===== */}
      <main className="min-h-screen">
        {/* Put your page content here */}
        {/* <Home/> */}
        <About/>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;