import Navbar from "./component/nav_bar.jsx";
import SideBar from "./component/side_bar.jsx";   // already used inside Navbar, but imported if needed
import Footer from "./component/footer.jsx";

function App() {
  return (
    <>
      {/* Navbar (includes SideBar inside it) */}
      <Navbar />

      {/* ===== Main Content Area ===== */}
      <main className="min-h-screen">
        {/* Put your page content here */}
        <div className="max-w-[1400px] mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold">Welcome to Rechi Construction</h1>
          <p className="mt-4 text-gray-600">
            Your main page content goes here...
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;