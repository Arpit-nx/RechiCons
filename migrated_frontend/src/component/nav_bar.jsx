import { useState, useEffect, useRef } from "react";
import { Phone, Search, Menu } from "lucide-react";
import SideBar from "./side_bar";
import rechiLogo from "../assets/rechi_logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

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
          h-16 sm:h-20

          bg-white/95
          backdrop-blur-xl

          border-b border-white/40

          shadow-[0_18px_45px_rgba(15,23,42,0.12),0_6px_16px_rgba(15,23,42,0.08)]

          transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="mx-auto flex h-full max-w-[1540px] items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

          {/* ================= LOGO ================= */}
          <a
            href="/"
            className="flex items-center min-w-0 select-none"
          >
            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 md:h-[4.7rem] md:w-[4.7rem] items-center justify-center overflow-hidden">
              <img
                src={rechiLogo}
                alt="Rechi Construction Logo"
                className="h-[165%] w-[165%] object-contain max-w-none transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Stronger crop – pulls text closer to the logo */}
            <div className="-ml-2 sm:-ml-3 leading-none">
              <span
                className="block text-[15px] sm:text-[17px] md:text-[19px] font-bold tracking-[0.18em] text-[#202020]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                RECHI
              </span>

              <span
                className="block mt-[2px] text-[15px] sm:text-[17px] md:text-[19px] font-bold tracking-[0.18em] text-[#202020]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                CONSTRUCTION
              </span>
            </div>
          </a>

          {/* ================= RIGHT SIDE ICONS ================= */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* ================= PHONE ================= */}
            <a
              href="tel:+919999999999"
              className="group flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:shadow-2xl"
            >
              <Phone
                size={18}
                className="sm:hidden transition-transform duration-300 group-hover:scale-110"
              />
              <Phone
                size={20}
                className="hidden sm:block transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            {/* ================= SEARCH ================= */}
            <button
              onClick={() => alert("Search clicked")}
              className="group flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:shadow-2xl"
            >
              <Search
                size={18}
                className="sm:hidden transition-transform duration-300 group-hover:scale-110"
              />
              <Search
                size={20}
                className="hidden sm:block transition-transform duration-300 group-hover:scale-110"
              />
            </button>

            {/* ================= MENU ================= */}
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:shadow-2xl"
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
      <div className="h-16 sm:h-20"></div>

      {/* ================= SIDEBAR ================= */}
      <SideBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}
