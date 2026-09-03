
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  User,
  ChevronDown,
} from "lucide-react";
import SideBar from "./side_bar";
import rechiLogo from "../assets/rechi_logo.png";

export default function Navbar({ isVisible = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  // Project dropdown states
  const [projectOpen, setProjectOpen] = useState(false);
  const [floatingProjectOpen, setFloatingProjectOpen] = useState(false);

  const lastScrollY = useRef(0);
  const timerRef = useRef(null);

  const projectDropdownRef = useRef(null);
  const floatingProjectDropdownRef = useRef(null);

  const location = useLocation();

  const navLinks = [
    { title: "HOME", link: "/" },
    { title: "ABOUT US", link: "/about" },
    { title: "OTHER SERVICES", link: "/other-services" },
    { title: "ENQUIRY", link: "/enquire" },
    { title: "CONTACT US", link: "/contact" },
  ];

  // Check whether any project page is currently active
  const isProjectActive =
    location.pathname === "/project" ||
    location.pathname.startsWith("/project/");

  // ============================
  // SCROLL HANDLER
  // ============================

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      if (isScrollingUp && currentScrollY > 200) {
        setShowFloatingNav(true);

        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
          setShowFloatingNav(false);
          setFloatingProjectOpen(false);
        }, 4000);
      } else {
        setShowFloatingNav(false);
        setFloatingProjectOpen(false);

        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // ============================
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // ============================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        projectDropdownRef.current &&
        !projectDropdownRef.current.contains(event.target)
      ) {
        setProjectOpen(false);
      }

      if (
        floatingProjectDropdownRef.current &&
        !floatingProjectDropdownRef.current.contains(event.target)
      ) {
        setFloatingProjectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // ============================
  // CLOSE DROPDOWNS WHEN ROUTE CHANGES
  // ============================

  useEffect(() => {
    setProjectOpen(false);
    setFloatingProjectOpen(false);
  }, [location.pathname]);

  if (!isVisible) return null;

  // ============================
  // PROJECT DROPDOWN
  // ============================

  const ProjectDropdown = ({
    isOpen,
    setIsOpen,
    dropdownRef,
  }) => {
    return (
      <div
        ref={dropdownRef}
        className="relative h-full flex items-center"
      >
        {/* PROJECT BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex items-center gap-1.5 text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-300 py-1 border-b-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
            isProjectActive
              ? "text-[#c9a227] border-[#c9a227]"
              : "text-white/90 border-transparent hover:text-[#c9a227] hover:border-[#c9a227]/70"
          }`}
        >
          PROJECTS

          <ChevronDown
            size={15}
            strokeWidth={2.5}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* DROPDOWN */}
        <div
          className={`absolute top-full left-0 mt-3 w-60 rounded-xl overflow-hidden bg-[#1e2229]/98 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-200 origin-top-left ${
            isOpen
              ? "opacity-100 visible scale-100"
              : "opacity-0 invisible scale-95 pointer-events-none"
          }`}
        >
          {/* Dropdown Heading */}
          <div className="px-5 py-3 border-b border-white/10">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c9a227] uppercase">
              OUR PROJECTS
            </span>
          </div>

          {/* Ongoing Projects */}
          <Link
            to="/projects/ongoing"
            onClick={() => setIsOpen(false)}
            className={`block px-5 py-3.5 text-sm font-medium transition-all ${
              location.pathname === "/projects/ongoing"
                ? "bg-white/10 text-[#c9a227]"
                : "text-white/80 hover:bg-white/5 hover:text-[#c9a227]"
            }`}
          >
            Ongoing Projects
          </Link>

          {/* Completed Projects */}
          <Link
            to="/projects/completed"
            onClick={() => setIsOpen(false)}
            className={`block px-5 py-3.5 text-sm font-medium transition-all ${
              location.pathname === "/projects/completed"
                ? "bg-white/10 text-[#c9a227]"
                : "text-white/80 hover:bg-white/5 hover:text-[#c9a227]"
            }`}
          >
            Completed Projects
          </Link>

          {/* Upcoming Projects */}
          <Link
            to="/projects/upcoming"
            onClick={() => setIsOpen(false)}
            className={`block px-5 py-3.5 text-sm font-medium transition-all ${
              location.pathname === "/projects/upcoming"
                ? "bg-white/10 text-[#c9a227]"
                : "text-white/80 hover:bg-white/5 hover:text-[#c9a227]"
            }`}
          >
            Upcoming Projects
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* ====================================================== */}
      {/* HEADER */}
      {/* ====================================================== */}

      <header className="w-full relative z-30">

        {/* ================================================== */}
        {/* TOP HEADER BAR */}
        {/* ================================================== */}

        <div className="w-full bg-[#f8efe2] border-b border-black/10 text-gray-900 relative z-10">
          <div className="mx-auto flex max-w-[1540px] items-center justify-between px-4 py-3 sm:px-8 lg:px-12">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center min-w-0 select-none"
            >
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
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  RECHI
                </span>

                <span
                  className="block mt-[1px] text-[13px] sm:text-[15px] md:text-[16px] font-semibold tracking-[0.12em] text-[#6f3e14]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  CONSTRUCTION PVT. LTD.
                </span>
              </div>
            </Link>

            {/* ================================================== */}
            {/* DESKTOP CONTACT INFO */}
            {/* ================================================== */}

            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm text-[#5a3210]">

              {/* PHONE */}
              <a
                href="tel:+919051800151"
                className="flex items-center gap-3 group hover:text-[#9a5b1a] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] transition-transform duration-300 group-hover:scale-105">
                  <Phone size={18} />
                </div>

                <div>
                  <div className="font-bold text-[#6f3e14] group-hover:text-[#9a5b1a]">
                    +91 9051800151
                  </div>

                  <div className="text-[11px] text-gray-600">
                    Make a call
                  </div>
                </div>
              </a>

              <div className="h-8 w-px bg-[#d5a56d]/30" />

              {/* EMAIL */}
              <a
                href="mailto:rechiconstruction@yahoo.in"
                className="flex items-center gap-3 group hover:text-[#9a5b1a] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] transition-transform duration-300 group-hover:scale-105">
                  <Mail size={18} />
                </div>

                <div>
                  <div className="font-bold text-[#6f3e14] group-hover:text-[#9a5b1a]">
                    rechiconstruction@yahoo.in
                  </div>

                  <div className="text-[11px] text-gray-600">
                    Drop us a line
                  </div>
                </div>
              </a>

              <div className="h-8 w-px bg-[#d5a56d]/30" />

{/* LOCATION */}
<div className="flex items-center gap-3">
  <a
    href="https://maps.google.com/?q=220,Dum+Dum+Park,Kolkata+700055"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View location on Google Maps"
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] transition-transform duration-300 hover:scale-105 hover:bg-[white] hover:text-white"
  >
    <MapPin size={18} strokeWidth={2} />
  </a>

  <div>
    <div className="font-bold text-[#6f3e14]">
      220, Dum Dum Park, Kolkata 700055
    </div>

    <div className="text-[11px] text-gray-600">
      Get Direction
    </div>
  </div>
</div>
</div>

              <div className="h-8 w-px bg-[#d5a56d]/30" />

              {/* ADMIN */}
              <Link
                to="/admin"
                aria-label="Admin Profile Login"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] hover:bg-[#7a3d10] hover:text-white transition-all duration-300 shadow-sm active:scale-95"
              >
                <User size={18} />
              </Link>
            </div>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Sidebar Menu"
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full border border-[#d5a56d] bg-[#fff4e1] text-[#7a3d10] hover:bg-[#7a3d10] hover:text-white active:scale-95 transition-all shadow-sm"
            >
              <Menu size={20} />
            </button>
          </div>
       

        {/* ================================================== */}
        {/* DESKTOP NAVIGATION */}
        {/* ================================================== */}

        <nav className="hidden lg:block absolute top-full left-0 right-0 z-20 bg-gradient-to-b from-black/65 to-transparent pt-1 pb-3 text-white pointer-events-auto">
          <div className="mx-auto flex h-11 max-w-[1540px] items-center space-x-6 lg:space-x-8 px-4 sm:px-8 lg:px-12">

            {/* HOME */}
            <Link
              to="/"
              className={`text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-300 py-1 border-b-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                location.pathname === "/"
                  ? "text-[#c9a227] border-[#c9a227]"
                  : "text-white/90 border-transparent hover:text-[#c9a227] hover:border-[#c9a227]/70"
              }`}
            >
              HOME
            </Link>

            {/* ABOUT US */}
            <Link
              to="/about"
              className={`text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-300 py-1 border-b-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                location.pathname === "/about"
                  ? "text-[#c9a227] border-[#c9a227]"
                  : "text-white/90 border-transparent hover:text-[#c9a227] hover:border-[#c9a227]/70"
              }`}
            >
              ABOUT US
            </Link>

            {/* PROJECT DROPDOWN */}
            <ProjectDropdown
              isOpen={projectOpen}
              setIsOpen={setProjectOpen}
              dropdownRef={projectDropdownRef}
            />

            {/* OTHER NAV LINKS */}
            {navLinks.slice(2).map((item) => {
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

      {/* ====================================================== */}
      {/* FLOATING SCROLL NAVIGATION */}
      {/* ====================================================== */}

      <div
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/85 via-black/50 to-transparent pt-1 pb-3 text-white transition-all duration-500 ease-in-out"
        style={{
          transform: showFloatingNav
            ? "translateY(0)"
            : "translateY(-100%)",
          opacity: showFloatingNav ? 1 : 0,
          pointerEvents: showFloatingNav ? "auto" : "none",
        }}
      >
        <div className="mx-auto flex h-11 max-w-[1540px] items-center space-x-6 lg:space-x-8 px-4 sm:px-8 lg:px-12">

          {/* HOME */}
          <Link
            to="/"
            className={`text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-300 py-1 border-b-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
              location.pathname === "/"
                ? "text-[#c9a227] border-[#c9a227]"
                : "text-white/90 border-transparent hover:text-[#c9a227] hover:border-[#c9a227]/70"
            }`}
          >
            HOME
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            className={`text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-300 py-1 border-b-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
              location.pathname === "/about"
                ? "text-[#c9a227] border-[#c9a227]"
                : "text-white/90 border-transparent hover:text-[#c9a227] hover:border-[#c9a227]/70"
            }`}
          >
            ABOUT US
          </Link>

          {/* PROJECT DROPDOWN */}
          <ProjectDropdown
            isOpen={floatingProjectOpen}
            setIsOpen={setFloatingProjectOpen}
            dropdownRef={floatingProjectDropdownRef}
          />

          {/* OTHER LINKS */}
          {navLinks.slice(2).map((item) => {
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

      {/* ====================================================== */}
      {/* MOBILE SIDEBAR */}
      {/* ====================================================== */}

      <SideBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}
