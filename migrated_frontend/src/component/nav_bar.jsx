import { useState, useEffect, useRef } from "react";
import { Phone, Search, Menu } from "lucide-react";
import SideBar from "./side_bar";
import rechiLogo from "../assets/rechi_logo.png";
import { Link } from "react-router-dom";
export default function Navbar({ isVisible = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const sidebarOpen = document.body.classList.contains("sidebar-open");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false); // Hide while scrolling down
      } else {
        setVisible(true); // Show while scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          h-14 sm:h-16

          bg-[#f8efe2]
          backdrop-blur-xl

          border-b border-black/10

          shadow-[0_20px_60px_rgba(0,0,0,0.35),0_8px_25px_rgba(0,0,0,0.25)]

          transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
          ${isVisible && visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <div className="mx-auto flex h-full max-w-[1540px] items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

          {/* ================= LOGO ================= */}
          <a
            href="/"
            className="flex items-center min-w-0 select-none"
          >
            <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center overflow-hidden">              <img
              src={rechiLogo}
              alt="Rechi Construction Logo"
              className="h-[165%] w-[165%] object-contain max-w-none transition-transform duration-500 hover:scale-105"
            />
            </div>

            {/* Stronger crop – pulls text closer to the logo */}
            <div className="-ml-2 sm:-ml-3 leading-none">
              <span
                className="block text-[13px] sm:text-[15px] md:text-[16px] font-bold tracking-[0.14em] text-[#6f3e14]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                RECHI
              </span>

              <span
                className="block mt-[1px] text-[13px] sm:text-[15px] md:text-[16px] font-semibold tracking-[0.12em] text-[#6f3e14]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                CONSTRUCTION
              </span>
            </div>
          </a>

          {/* ================= RIGHT SIDE ICONS ================= */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* ================= PHONE ================= */}
            <Link
  to="/enquire"
  className="group flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9a5b1a] hover:bg-[#9a5b1a] hover:text-[#fff8ef] hover:shadow-2xl"
>
  <Phone
    size={18}
    className="sm:hidden transition-transform duration-300 group-hover:scale-110"
  />

  <Phone
    size={20}
    className="hidden sm:block transition-transform duration-300 group-hover:scale-110"
  />
</Link>




            {/* ================= MENU ================= */}
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9a5b1a] hover:bg-[#9a5b1a] hover:text-[#fff8ef] hover:shadow-2xl"
            >
              <Menu
                size={20}
                className="sm:hidden transition-transform duration-300 group-hover:scale-110"
              />
              <Menu
                size={22}
                className="hidden sm:block transition-transform duration-300 group-hover:scale-110"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind the fixed navbar */}
      <div className="h-14 sm:h-16"></div>
      {/* ================= SIDEBAR ================= */}
      <SideBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}
