import rechiLogo from "../assets/rechi_logo.png";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-[#fff8ef] border-t border-[#8f5a2c]/40">
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,134,45,0.18),_transparent_45%)]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#3f220f]/90 z-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1540px] flex-col items-center justify-between gap-6 px-4 py-6 sm:px-8 md:flex-row md:gap-4 lg:px-12">
       
        {/* ================= LOGO & BRAND NAME ================= */}
        <a href="/" className="group flex items-center min-w-0 select-none">
          <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center overflow-hidden">
            <img
              src={rechiLogo}
              alt="Rechi Construction Logo"
              className="h-[175%] w-[175%] object-contain max-w-none transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="-ml-1 sm:-ml-2 leading-none">
            <span
              className="block text-[13px] sm:text-[15px] md:text-[16px] font-bold tracking-[0.14em] text-[#fff7eb]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              RECHI
            </span>
            <span
              className="block mt-[1px] text-[13px] sm:text-[15px] md:text-[16px] font-semibold tracking-[0.12em] text-[#f2dfc0]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              CONSTRUCTION
            </span>
          </div>
        </a>

        {/* ================= COPYRIGHT & CREDITS ================= */}
        <div className="text-center md:text-right">
          <p className="text-xs sm:text-sm text-[#d6b07d] leading-relaxed">
            Copyright © {new Date().getFullYear()} and All Right Reserved by Rechi Construction. Website developed by TEAM LOGIC.
          </p>
        </div>

      </div>
    </footer>
  );
}
