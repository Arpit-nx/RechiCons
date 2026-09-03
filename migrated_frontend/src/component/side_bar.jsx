import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Phone, Mail, MapPin } from "lucide-react";

export default function SideBar({ menuOpen, setMenuOpen }) {
  const location = useLocation();

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Project", link: "/project" },
    { title: "Other Services", link: "/other-services" },
    { title: "Enquiry", link: "/enquire" },
    { title: "Contact Us", link: "/contact" },
    { title: "Admin Login", link: "/admin" },
  ];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex justify-end transition-all duration-300 ease-in-out ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar Panel */}
      <aside
        className={`relative w-[300px] sm:w-[340px] h-full bg-[#1e2229]/95 backdrop-blur-xl text-white border-l border-white/10 shadow-[-15px_0_35px_rgba(0,0,0,0.8)] flex flex-col justify-between p-6 sm:p-8 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Header & Close Button */}
        <div className="pb-6 border-b border-white/10 flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.2em] text-[#c9a227] uppercase">
            Menu
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Sidebar"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group"
          >
            <div className="flex items-center justify-center h-9 w-9 rounded-full bg-white/5 border border-white/15 text-gray-300 shadow-[0_4px_12px_rgba(0,0,0,0.4)] group-hover:bg-[#c9a227]/20 group-hover:border-[#c9a227] group-hover:text-[#c9a227] group-hover:scale-105 transition-all">
              <X size={18} strokeWidth={2.2} />
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 my-6 space-y-2 overflow-y-auto no-scrollbar">
          {navLinks.map((item) => {
            const active = location.pathname === item.link;
            return (
              <Link
                key={item.title}
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl font-medium text-base transition-all duration-200 ${
                  active
                    ? "bg-[#2d333f]/90 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/5"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {/* Gold Indicator */}
                <span
                  className={`w-1 h-5 rounded-full transition-all duration-300 ${
                    active
                      ? "bg-[#c9a227] shadow-[0_0_10px_#c9a227]"
                      : "bg-transparent"
                  }`}
                />
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Contact Quick Details */}
        <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-gray-300">
          <a href="tel:+919051800151" className="flex items-center gap-3 hover:text-[#c9a227] transition-colors">
            <Phone size={14} className="text-[#c9a227]" />
            <span>+91 9051800151</span>
          </a>
          <a href="mailto:info@rechiconstruction.in" className="flex items-center gap-3 hover:text-[#c9a227] transition-colors">
            <Mail size={14} className="text-[#c9a227]" />
            <span className="truncate">info@rechiconstruction.in</span>
          </a>
          <div className="flex items-center gap-3 text-gray-400">
            <MapPin size={14} className="text-[#c9a227] shrink-0" />
            <span>213, Dum Dum Park, Kolkata</span>
          </div>

          <div className="pt-4 text-center">
            <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              RECHI CONSTRUCTION PVT. LTD.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}