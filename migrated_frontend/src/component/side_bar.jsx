import { useEffect, useState, useCallback } from "react";
import {
  X,
  Plus,
  Minus,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Project",
    children: [
      {
        title: "Completed Project",
        link: "/projects/completed",
      },
      {
        title: "Ongoing Project",
        link: "/projects/ongoing",
      },
      {
        title: "Upcoming Project",
        link: "/projects/upcoming",
      },
    ],
  },
  {
    title: "Other Services",
    link: "/other-services",
  },
  {
    title: "Enquiry",
    link: "/enquire",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

export default function SideBar({
  menuOpen,
  setMenuOpen,
  currentPath = "/", // pass the current route (e.g. from usePathname())
}) {
  const [activeMenu, setActiveMenu] = useState(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setActiveMenu(null);
  }, [setMenuOpen]);

  // Lock body scroll + reset activeMenu when closed
  useEffect(() => {
    if (!menuOpen) {
      setActiveMenu(null);
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  const currentMenu = menuItems.find(
    (item) => item.title === activeMenu
  );

  const isCurrentPage = (link) => currentPath === link;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible bg-black/30 backdrop-blur-sm"
            : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className={`fixed right-0 top-0 z-50 h-screen
        w-full max-w-[670px]
        overflow-hidden
        border-l border-white/10
        bg-[rgba(18,18,18,0.55)]
        backdrop-blur-2xl
        backdrop-saturate-150
        shadow-[0_30px_80px_rgba(0,0,0,.35)]
        transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-20 items-center border-b border-white/10 px-8 md:px-10">
          <button
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="Close menu"
          >
            <X
              size={20}
              className="text-white transition group-hover:rotate-90"
            />
            <span className="text-[18px] font-light tracking-wide text-white">
              Close
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="relative flex h-[calc(100%-80px)]">
          {/* LEFT COLUMN */}
          <div className="w-[220px] md:w-[240px] shrink-0 px-8 md:px-10 py-10">
            <nav aria-label="Primary">
              {menuItems.map((item) => {
                const opened = activeMenu === item.title;
                const active = item.link
                  ? isCurrentPage(item.link)
                  : false;

                return item.children ? (
                  <button
                    key={item.title}
                    onClick={() =>
                      setActiveMenu(opened ? null : item.title)
                    }
                    aria-expanded={opened}
                    className="group mb-9 flex w-full items-center gap-3"
                  >
                    <span
                      className={`text-[21px] font-light tracking-[0.5px] transition-all duration-300 ${
                        opened || active
                          ? "text-green-400"
                          : "text-white group-hover:text-green-400 group-hover:translate-x-1"
                      }`}
                    >
                      {item.title}
                    </span>
                    {opened ? (
                      <Minus
                        size={15}
                        strokeWidth={2.5}
                        className="text-green-400 transition group-hover:scale-110"
                      />
                    ) : (
                      <Plus
                        size={15}
                        strokeWidth={2.5}
                        className="text-white/55 transition group-hover:text-green-400 group-hover:scale-110"
                      />
                    )}
                  </button>
                ) : (
                  <a
                    key={item.title}
                    href={item.link}
                    onClick={closeMenu}
                    className={`mb-9 block text-[21px] font-light tracking-[0.5px] transition-all duration-300 ${
                      active
                        ? "text-green-400"
                        : "text-white hover:text-green-400 hover:translate-x-1"
                    }`}
                  >
                    {item.title}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Divider */}
          <div className="w-px bg-white/10" />

          {/* RIGHT COLUMN */}
          <div className="relative flex-1 overflow-hidden">
            {currentMenu ? (
              <div className="absolute inset-0 flex flex-col">
                <div className="flex-1 overflow-y-auto px-8 md:px-10 pt-10">
                  {currentMenu.children.map((child, index) => {
                    const childActive = isCurrentPage(child.link);
                    return (
                      <a
                        key={child.title}
                        href={child.link}
                        onClick={closeMenu}
                        style={{
                          animation: `slideItem .4s ease ${index * 0.05}s forwards`,
                          opacity: 0,
                        }}
                        className="group flex items-center justify-between border-b border-white/10 py-5"
                      >
                        <span
                          className={`text-[16px] md:text-[17px] font-light tracking-wide transition-all duration-300 ${
                            childActive
                              ? "text-green-400 translate-x-1"
                              : "text-white/70 group-hover:text-green-400 group-hover:translate-x-2"
                          }`}
                        >
                          {child.title}
                        </span>
                        <ChevronRight
                          size={17}
                          className={`transition-all duration-300 ${
                            childActive
                              ? "text-green-400 translate-x-1"
                              : "text-white/25 group-hover:text-green-400 group-hover:translate-x-1"
                          }`}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Subtle empty state */
              <div className="flex h-full items-center justify-center opacity-40">
                <div className="h-16 w-px bg-white/15" />
              </div>
            )}
          </div>
        </div>
      </aside>

      <style>{`
        @keyframes slideItem {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        aside *::-webkit-scrollbar {
          width: 4px;
        }
        aside *::-webkit-scrollbar-track {
          background: transparent;
        }
        aside *::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,.12);
          border-radius: 999px;
        }
        aside *::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,.25);
        }
        aside {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        aside::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,.05),
            rgba(255,255,255,0)
          );
        }
      `}</style>
    </>
  );
}