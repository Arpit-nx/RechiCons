import Navbar from "./component/nav_bar.jsx";
import SideBar from "./component/side_bar.jsx";   // already used inside Navbar, but imported if needed
import Footer from "./component/footer.jsx";
import AdminLogin from "./pages/adminLogin.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
    <>
      {/* Navbar (includes SideBar inside it) */}
      <Navbar />

      {/* ===== Main Content Area ===== */}
      <main className="min-h-screen">
        {/* Put your page content here */}
        <AdminLogin></AdminLogin>
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;