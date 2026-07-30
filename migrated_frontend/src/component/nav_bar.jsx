import { useState } from "react";
import { Phone, Search, Menu } from "lucide-react";
import SideBar from "./side_bar";
// import logo from "./rechi_logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12">

          {/* Brand */}
          <a href="/" className="flex items-center gap-0 min-w-0">
            
            {/* Logo - bigger + stronger crop */}
            <div className="h-12 sm:h-14 md:h-16 overflow-hidden shrink-0">
              <img
                src={logo}
                alt="Rechi Logo"
                className="h-full w-auto object-contain object-left"
                style={{ 
                  transform: "scale(1.35)",           // bigger logo
                  transformOrigin: "left center",
                  marginRight: "-28px"                // stronger right crop
                }}
              />
            </div>

            {/* Company Name */}
            <div className="leading-none min-w-0 -ml-1">
              <span
                className="block text-[15px] sm:text-[16px] md:text-[18px] font-bold tracking-wide text-[#202020]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                RECHI
              </span>
              <span
                className="block text-[15px] sm:text-[16px] md:text-[18px] font-bold tracking-wide text-[#202020]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                CONSTRUCTION
              </span>
            </div>
          </a>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
            <a
              href="tel:+919999999999"
              className="flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-black hover:text-white"
            >
              <Phone size={18} className="sm:hidden" />
              <Phone size={20} className="hidden sm:block" />
            </a>

            <button
              onClick={() => alert("Search clicked")}
              className="flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-black hover:text-white"
            >
              <Search size={18} className="sm:hidden" />
              <Search size={20} className="hidden sm:block" />
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-black hover:text-white"
            >
              <Menu size={20} className="sm:hidden" />
              <Menu size={22} className="hidden sm:block" />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 sm:h-20"></div>

      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}