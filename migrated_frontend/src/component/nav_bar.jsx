import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, User } from "lucide-react";
import SideBar from "./side_bar";
import rechiLogo from "../assets/rechi_logo.png";

export default function Navbar({ isVisible = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const lastScrollY = useRef(0);
  const timerRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { title: "HOME", link: "/" },
    { title: "ABOUT US", link: "/about" },
    { title: "PROJECTS", link: "/project" },
    { title: "OTHER SERVICES", link: "/other-services" },
    { title: "ENQUIRY", link: "/enquire" },
    { title: "CONTACT US", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      if (isScrollingUp && currentScrollY > 200) {
        setShowFloatingNav(true);

        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
          setShowFloatingNav(false);
        }, 4000);
      } else {
        setShowFloatingNav(false);
        if (timerRef.current) clearTimeout(timerRef.current);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <header className="w-full relative z-30">
        {/* Top Header Bar */}
        <div className="w-full bg-[#f8efe2] border-b border-black/10 text-gray-900 relative z-10">
          <div className="mx-auto flex max-w-[1540px] items-center justify-between px-4 py-3 sm:px-8 lg:px-12">
            
            {/* Logo */}
            <Link to="/" className="flex items-center min-w-0 select-none">
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
                  CONSTRUCTION PVT. LTD.
                </span>
              </div>
            </Link>

            {/* Desktop Contact Info & Clickable Profile Icon */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm text-[#5a3210]">
              <a
                href="tel:+919051800151"
                className="flex items-center gap-3 group hover:text-[#9a5b1a] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] transition-transform duration-300 group-hover:scale-105">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-bold text-[#6f3e14] group-hover:text-[#9a5b1a]">+91 9051800151</div>
                  <div className="text-[11px] text-gray-600">Make a call</div>
                </div>
              </a>

              <div className="h-8 w-px bg-[#d5a56d]/30" />

              <a
                href="mailto:info@rechiconstruction.in"
                className="flex items-center gap-3 group hover:text-[#9a5b1a] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] transition-transform duration-300 group-hover:scale-105">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-bold text-[#6f3e14] group-hover:text-[#9a5b1a]">info@rechiconstruction.in</div>
                  <div className="text-[11px] text-gray-600">Drop us a line</div>
                </div>
              </a>

              <div className="h-8 w-px bg-[#d5a56d]/30" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-bold text-[#6f3e14]">213, Dum Dum Park, Kolkata 700055</div>
                  <div className="text-[11px] text-gray-600">Get Direction</div>
                </div>
              </div>

              <div className="h-8 w-px bg-[#d5a56d]/30" />

              {/* Clickable Profile Icon */}
              <Link
                to="/admin"
                aria-label="Admin Profile Login"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] hover:bg-[#7a3d10] hover:text-white transition-all duration-300 shadow-sm active:scale-95"
              >
                <User size={18} />
              </Link>
            </div>

            {/* Mobile & Tablet Sidebar Menu Trigger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Sidebar Menu"
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] hover:bg-[#7a3d10] hover:text-white active:scale-95 transition-all shadow-sm"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Navigation Dark Strip */}
        <nav className="hidden lg:block absolute top-full left-0 right-0 z-20 bg-gradient-to-b from-black/65 to-transparent pt-1 pb-3 text-white pointer-events-auto">
          <div className="mx-auto flex h-11 max-w-[1540px] items-center space-x-6 lg:space-x-8 px-4 sm:px-8 lg:px-12">
            {navLinks.map((item) => {
              const active = location.pathname === item.link;
              return (
                <Link
                  key={item.title}
                  to={item.link}
                  className={`text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-300 py-1 border-b-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                    active
                      ? "text-[#c9a227] border-[#c9a227]"
                      : "text-white/90 border-transparent hover:text-[#c9a227] hover:border-[#c9a227]/70"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Desktop Floating Scroll Navigation */}
      <div
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/85 via-black/50 to-transparent pt-1 pb-3 text-white transition-all duration-500 ease-in-out"
        style={{
          transform: showFloatingNav ? "translateY(0)" : "translateY(-100%)",
          opacity: showFloatingNav ? 1 : 0,
          pointerEvents: showFloatingNav ? "auto" : "none",
        }}
      >
        <div className="mx-auto flex h-11 max-w-[1540px] items-center space-x-6 lg:space-x-8 px-4 sm:px-8 lg:px-12">
          {navLinks.map((item) => {
            const active = location.pathname === item.link;
            return (
              <Link
                key={item.title}
                to={item.link}
                className={`text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-300 py-1 border-b-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                  active
                    ? "text-[#c9a227] border-[#c9a227]"
                    : "text-white/90 border-transparent hover:text-[#c9a227] hover:border-[#c9a227]/70"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}