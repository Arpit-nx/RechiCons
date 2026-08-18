import { useEffect, useState, useCallback } from "react";
import { X, Plus, Minus, ChevronRight } from "lucide-react";

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
  currentPath = "/",
}) {
  const [activeMenu, setActiveMenu] = useState(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setActiveMenu(null);
  }, [setMenuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      setActiveMenu(null);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.classList.remove("sidebar-open");
      return;
    }

    // Calculate scrollbar width so the page doesn't jump
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

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  const currentMenu = menuItems.find((item) => item.title === activeMenu);
  const isCurrentPage = (link) => currentPath === link;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 transition-all duration-700 ${menuOpen
            ? "opacity-100 visible bg-black/40 backdrop-blur-[6px]"
            : "opacity-0 invisible pointer-events-none"
          }`}
      />

      {/* Sidebar */}
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
          transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Subtle noise texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Soft top light */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.04] to-transparent" />

        {/* Header */}
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

        {/* Content */}
        <div className="relative flex h-[calc(100%-88px)]">
          {/* LEFT COLUMN */}
          <div className="w-full shrink-0 px-6 py-10">
            <nav aria-label="Primary" className="space-y-1.5">
              {menuItems.map((item, index) => {
                const opened = activeMenu === item.title;
                const active = item.link ? isCurrentPage(item.link) : false;

                return item.children ? (
                  <button
                    key={item.title}
                    onClick={() => setActiveMenu(opened ? null : item.title)}
                    aria-expanded={opened}
                    className={`group relative flex w-full items-center justify-between
                      rounded-2xl px-5 py-3.5 transition-all duration-400
                      ${opened
                        ? "bg-white/[0.07]"
                        : "hover:bg-white/[0.04]"
                      }
                    `}
                    style={{
                      transitionDelay: menuOpen ? `${index * 40}ms` : "0ms",
                    }}
                  >
                    {/* Gold accent bar on active/open */}
                    <span
                      className={`absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-full bg-[#c9a227] transition-all duration-400 ${opened ? "opacity-100" : "opacity-0"
                        }`}
                    />

                    <span
                      className={`text-[17px] font-light tracking-wide transition-all duration-300 ${opened
                          ? "translate-x-1 text-white"
                          : "text-white/75 group-hover:translate-x-1 group-hover:text-white"
                        }`}
                    >
                      {item.title}
                    </span>

                    {opened ? (
                      <Minus
                        size={15}
                        strokeWidth={2}
                        className="text-[#e8d48b] transition-transform duration-300"
                      />
                    ) : (
                      <Plus
                        size={15}
                        strokeWidth={2}
                        className="text-white/40 transition-all duration-300 group-hover:text-white/70"
                      />
                    )}
                  </button>
                ) : (
                  <a
                    key={item.title}
                    href={item.link}
                    onClick={closeMenu}
                    className={`group relative flex items-center rounded-2xl px-5 py-3.5
                      transition-all duration-400
                      ${active
                        ? "bg-white/[0.07]"
                        : "hover:bg-white/[0.04]"
                      }
                    `}
                  >
                    {/* Gold accent bar */}
                    <span
                      className={`absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-full bg-[#c9a227] transition-all duration-400 ${active ? "opacity-100 scale-y-100" : "opacity-0 scale-y-50"
                        }`}
                    />

                    <span
                      className={`text-[17px] font-light tracking-wide transition-all duration-300 ${active
                          ? "translate-x-1 text-white"
                          : "text-white/75 group-hover:translate-x-1 group-hover:text-white"
                        }`}
                    >
                      {item.title}
                    </span>

                    {/* Subtle arrow on hover for non-active */}
                    {!active && (
                      <ChevronRight
                        size={14}
                        className="ml-auto opacity-0 -translate-x-1 text-white/30 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Bottom branding accent */}
            <div className="absolute bottom-10 left-0 right-0 px-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="mt-5 text-center text-[11px] font-light tracking-[0.25em] text-white/25 uppercase">
                Rechi Construction
              </p>
            </div>
          </div>

          {/* Divider (only when submenu exists) */}
          {currentMenu && (
            <div className="w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          )}

          {/* RIGHT COLUMN */}
          <div className="relative flex-1 overflow-hidden">
            {currentMenu ? (
              <div className="absolute inset-0 flex flex-col">
                <div className="flex-1 overflow-y-auto px-6 pt-8 pb-10">
                  {currentMenu.children.map((child, index) => {
                    const childActive = isCurrentPage(child.link);

                    return (
                      <a
                        key={child.title}
                        href={child.link}
                        onClick={closeMenu}
                        style={{
                          animation: `slideItem 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 0.06
                            }s forwards`,
                          opacity: 0,
                        }}
                        className={`group mb-2 flex items-center justify-between
                          rounded-xl px-4 py-3.5 transition-all duration-300
                          ${childActive
                            ? "bg-white/[0.06]"
                            : "hover:bg-white/[0.04]"
                          }
                        `}
                      >
                        <span
                          className={`text-[15px] font-light tracking-wide transition-all duration-300 ${childActive
                              ? "translate-x-1 text-[#e8d48b]"
                              : "text-white/70 group-hover:translate-x-1.5 group-hover:text-white"
                            }`}
                        >
                          {child.title}
                        </span>

                        <ChevronRight
                          size={15}
                          className={`transition-all duration-300 ${childActive
                              ? "text-[#c9a227] translate-x-0.5"
                              : "text-white/25 group-hover:text-white/50 group-hover:translate-x-1"
                            }`}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </aside>

      <style>{`
        @keyframes slideItem {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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