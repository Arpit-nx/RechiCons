import { useEffect, useCallback } from "react";
import { X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Project", link: "/project" },
  { title: "Other Services", link: "/other-services" },
  { title: "Enquiry", link: "/enquire" },
  { title: "Admin login", link: "/admin/login" },
];

export default function SideBar({
  menuOpen,
  setMenuOpen,
}) {
  const location = useLocation();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, [setMenuOpen]);

  const isCurrentPage = (link) => {
    return location.pathname === link;
  };

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.classList.remove("sidebar-open");
      return;
    }

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.classList.add("sidebar-open");

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.classList.remove("sidebar-open");
    };
  }, [menuOpen]);

  // Escape key closes sidebar
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      {/* =========================
          OVERLAY
      ========================== */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 transition-all duration-700 ${
          menuOpen
            ? "visible bg-black/40 opacity-100 backdrop-blur-[6px]"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* =========================
          SIDEBAR
      ========================== */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className={`fixed right-0 top-0 z-50 h-screen
          w-full max-w-[280px]
          overflow-hidden
          border-l border-white/[0.08]
          bg-[#0c0c0c]/75
          backdrop-blur-3xl
          backdrop-saturate-150
          shadow-[-20px_0_60px_rgba(0,0,0,0.45)]
          transition-transform duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* =========================
            NOISE TEXTURE
        ========================== */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Soft top light */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.04] to-transparent" />

        {/* =========================
            HEADER
        ========================== */}
        <div className="relative flex h-[88px] items-center border-b border-white/[0.07] px-8">
          <button
            onClick={closeMenu}
            className="group flex items-center gap-3.5 transition-all duration-300"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-[#c9a227]/40 group-hover:bg-[#c9a227]/10">
              <X
                size={16}
                strokeWidth={1.75}
                className="text-white/80 transition-all duration-500 group-hover:rotate-90 group-hover:text-[#e8d48b]"
              />
            </span>

            <span className="text-[15px] font-light tracking-[0.15em] text-white/70 transition-colors duration-300 group-hover:text-white">
              CLOSE
            </span>
          </button>
        </div>

        {/* =========================
            CONTENT
        ========================== */}
        <div className="relative flex h-[calc(100%-88px)]">
          {/* LEFT COLUMN */}
          <div className="w-full shrink-0 px-6 py-10">
            <nav aria-label="Primary" className="space-y-1.5">
              {menuItems.map((item, index) => {
                const active = isCurrentPage(item.link);

                return (
                  <Link
                    key={item.title}
                    to={item.link}
                    onClick={closeMenu}
                    style={{
                      transitionDelay: menuOpen
                        ? `${index * 40}ms`
                        : "0ms",
                    }}
                    className={`group relative flex w-full items-center rounded-2xl px-5 py-3.5 transition-all duration-400 ${
                      active
                        ? "bg-white/[0.07]"
                        : "hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Gold accent bar */}
                    <span
                      className={`absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-full bg-[#c9a227] transition-all duration-400 ${
                        active
                          ? "scale-y-100 opacity-100"
                          : "scale-y-50 opacity-0"
                      }`}
                    />

                    {/* Menu title */}
                    <span
                      className={`text-[17px] font-light tracking-wide transition-all duration-300 ${
                        active
                          ? "translate-x-1 text-white"
                          : "text-white/75 group-hover:translate-x-1 group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </span>

                    {/* Arrow */}
                    {!active && (
                      <ChevronRight
                        size={14}
                        className="ml-auto -translate-x-1 text-white/30 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* =========================
                BOTTOM BRANDING
            ========================== */}
            <div className="absolute bottom-10 left-0 right-0 px-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <p className="mt-5 text-center text-[11px] font-light uppercase tracking-[0.25em] text-white/25">
                Rechi Construction
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* =========================
          CUSTOM SCROLLBAR
      ========================== */}
      <style>{`
        aside *::-webkit-scrollbar {
          width: 3px;
        }

        aside *::-webkit-scrollbar-track {
          background: transparent;
        }

        aside *::-webkit-scrollbar-thumb {
          background: rgba(201, 162, 39, 0.25);
          border-radius: 999px;
        }

        aside *::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 162, 39, 0.45);
        }

        aside {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
}