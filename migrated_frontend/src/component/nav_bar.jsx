import { useState, useEffect, useRef } from "react";
import { Phone, Menu } from "lucide-react";
import SideBar from "./side_bar";
import rechiLogo from "../assets/rechi_logo.png";

export default function Navbar({ isVisible = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Reserve scrollbar space globally
  useEffect(() => {
    document.documentElement.style.scrollbarGutter = "stable";
  }, []);

  // Compensate for scrollbar width when sidebar opens to prevent layout shift
  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  if (!isVisible) return null;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          h-16 sm:h-20
          bg-[#f8efe2]
          backdrop-blur-xl
          border-b border-black/10
          shadow-[0_20px_60px_rgba(0,0,0,0.35),0_8px_25px_rgba(0,0,0,0.25)]
          transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
          ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <div className="mx-auto flex h-full max-w-[1540px] items-center justify-between px-4 sm:px-8 lg:px-12">
          
          {/* ================= LOGO ================= */}
          <a href="/" className="flex items-center min-w-0 select-none">
            <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center overflow-hidden">
              <img
                src={rechiLogo}
                alt="Rechi Construction Logo"
                className="h-[140%] w-[140%] object-contain max-w-none transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="-ml-1 sm:-ml-2 leading-none">
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
            <a
              href="tel:+919999999999"
              className="group flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9a5b1a] hover:bg-[#9a5b1a] hover:text-[#fff8ef] hover:shadow-2xl"
            >
              <Phone size={18} className="sm:hidden transition-transform duration-300 group-hover:scale-110" />
              <Phone size={20} className="hidden sm:block transition-transform duration-300 group-hover:scale-110" />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="group flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9a5b1a] hover:bg-[#9a5b1a] hover:text-[#fff8ef] hover:shadow-2xl"
            >
              <Menu size={20} className="sm:hidden transition-transform duration-300 group-hover:scale-110" />
              <Menu size={22} className="hidden sm:block transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </nav>

      {/* Matching Spacer to prevent main content jump */}
      <div className="h-16 sm:h-20" />

      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}