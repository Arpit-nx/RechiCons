import Navbar from "./component/nav_bar.jsx";
import SideBar from "./component/side_bar.jsx";
import Footer from "./component/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import EnquiryPage from "./pages/EnquiryPage.jsx";

function App() {
  return (
    <>
      {/* Navbar (includes SideBar inside it) */}
      <Navbar />

      {/* ===== Main Content Area ===== */}
      <main className="min-h-screen">
        <About />
        {/* <EnquiryPage /> */}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;