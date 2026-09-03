import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MessageCircle,
  Plus,
  Share2,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import rechiLogo from "../assets/rechi_logo.png";
import homeAboutImg from "../assets/project-imgs/homeabout.jpg";

// Import data + needed images from projectfile.js
import {
  heroTitles,
  homeAboutData,
  homePillars,
  homeStrengthsData,
  projectsData,
  // Hero slider images
  anandiApartment,
  anandiEnclave,
  anandiResidency,
  santiBhawan,
  anandiVista,
  anandiView,
} from "./data/projectfile.js";

const categoryTabs = ["All Projects", "Completed", "Ongoing", "Upcoming"];
const ease = [0.16, 1, 0.3, 1];
let hasShownSplash = false;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease },
  }),
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.35,
        delay: index * 0.03,
        ease: "easeOut",
      }}
      className="w-full"
    >
      <a
        href={`/project/${project.slug}`}
        className="group relative block overflow-hidden rounded-xl bg-stone-900 shadow-md transition-shadow duration-300 hover:shadow-xl"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

          <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between z-10">
            <h3
              style={{ color: "#ffffff" }}
              className="font-display text-sm sm:text-base font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:!text-amber-300"
            >
              {project.title}
            </h3>
            <span className="text-amber-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Home({ onSplashEnd }) {
  const [showSplash, setShowSplash] = useState(!hasShownSplash);
  const [splashLeaving, setSplashLeaving] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All Projects");

  const slides = [
    anandiApartment,
    anandiEnclave,
    anandiResidency,
    santiBhawan,
    anandiVista,
    anandiView,
  ];

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      if (!document.body.classList.contains("sidebar-open")) {
        document.body.style.overflow = "";
      }
    }

    return () => {
      if (!document.body.classList.contains("sidebar-open")) {
        document.body.style.overflow = "";
      }
    };
  }, [showSplash]);

  useEffect(() => {
    if (!showSplash) return;

    const hideSplashTimer = window.setTimeout(() => {
      setSplashLeaving(true);
      window.setTimeout(() => {
        setShowSplash(false);
        hasShownSplash = true;
        if (onSplashEnd) onSplashEnd();
      }, 650);
    }, 2200);

    return () => window.clearTimeout(hideSplashTimer);
  }, [showSplash, onSplashEnd]);

  useEffect(() => {
    if (showSplash) return;
    const sliderTimer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearTimeout(sliderTimer);
  }, [showSplash, slides.length]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Rechi Construction",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  const filteredProjects =
    activeTab === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <div className="home-shell !m-0 !w-full !max-w-none !p-0 overflow-x-hidden bg-[#faf4ed] text-gray-900">

      {/* 1. Splash Screen */}
      {showSplash && (
        <div
          className={`home-splash ${splashLeaving ? "home-splash--leave" : ""}`}
          aria-hidden="true"
        >
          <div className="home-splash__halo" />
          <div className="home-splash__card">
            <img
              src={rechiLogo}
              alt="Rechi Construction"
              className="home-splash__logo h-24 sm:h-32 md:h-36 w-auto object-contain mx-auto mb-2"
            />
            <div className="home-splash__brand">
              <span className="home-splash__title" aria-label="Rechi Construction">
                <span className="home-splash__title-part home-splash__title-part--left">Rechi</span>
                <span className="home-splash__title-part home-splash__title-part--right">Construction Pvt. Ltd.</span>
              </span>
              <span className="home-splash__subtitle">Building spaces with trust and precision</span>
            </div>
            <div className="home-splash__loader" />
          </div>
        </div>
      )}

      {/* 2. Hero Image Slider */}
      <section
        className={`home-hero ${showSplash ? "home-hero--hidden" : "home-hero--enter"
          } relative !left-1/2 !w-[100vw] !min-w-[100vw] !max-w-[100vw] !-translate-x-1/2 !m-0 !p-0 bg-transparent`}
      >
        <div className="relative !w-full !max-w-none !m-0 !p-0 h-[88vh] min-h-[700px] max-h-[920px] overflow-hidden">
          {/* Background Image Slides */}
          {slides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 h-full w-full transition-all duration-[1200ms] ease-in-out ${index === currentSlide
                  ? "z-10 scale-100 opacity-100"
                  : "z-0 scale-[1.04] opacity-0"
                }`}
            >
              <img
                src={image}
                alt={`Rechi Construction Project ${index + 1}`}
                className="block h-full w-full object-cover object-center"
              />
            </div>
          ))}

          {/* Subtle Vignette Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

          {/* Hero Clean Overlay Typography */}
          <div className="absolute inset-0 z-30 flex items-center justify-start px-6 sm:px-12 lg:px-24">
            <div className="max-w-xl bg-transparent">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15] drop-shadow-[0_2px_12px_rgba(255,255,255,0.85)]">
                    {heroTitles[currentSlide % heroTitles.length]}
                  </h1>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {/* Primary Action Button */}
                    <a
                      href="#our-works"
                      className="inline-flex items-center gap-3 rounded-md bg-[#fbb034] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 shadow-md transition-all duration-300 hover:bg-[#e09b2b] hover:shadow-lg active:scale-95"
                    >
                      OUR PROJECTS
                      <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                    </a>

                    {/* High-Contrast Visible Contact Us Button */}
                    <a
                      href="/contact"
                      style={{ color: "#ffffff" }}
                      className="inline-flex items-center gap-3 rounded-md bg-stone-900 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider !text-white shadow-md transition-all duration-300 hover:bg-black hover:shadow-lg active:scale-95"
                    >
                      <span style={{ color: "#ffffff" }} className="!text-white">CONTACT US</span>
                      <ArrowRight className="h-4 w-4 stroke-[2.5] !text-white" style={{ color: "#ffffff" }} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Floating Action Menu */}
          <div
            className="absolute bottom-8 right-[11%] z-40 flex flex-col items-end"
            onMouseLeave={() => setMenuOpen(false)}
          >
            <div
              className={`mb-3 w-[200px] overflow-hidden rounded-xl border border-white/15 bg-black/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 ${menuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-3 opacity-0 pointer-events-none"
                }`}
            >
              <button
                type="button"
                onClick={handleShare}
                className="flex min-h-[52px] w-full items-center justify-end gap-3 px-5 text-white hover:bg-white/10 transition-colors"
              >
                <span className="text-[14px] font-medium tracking-wide text-white">Share</span>
                <Share2 size={18} strokeWidth={2} className="text-white" />
              </button>

              <a
                href="/contact"
                className="flex min-h-[52px] w-full items-center justify-end gap-3 px-5 text-white hover:bg-white/10 transition-colors"
              >
                <span className="text-[14px] font-medium tracking-wide text-white">
                  Schedule a Visit
                </span>
                <CalendarDays size={18} strokeWidth={2} className="text-white" />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] w-full items-center justify-end gap-3 px-5 text-white hover:bg-white/10 transition-colors"
              >
                <span className="text-[14px] font-medium tracking-wide text-white">WhatsApp</span>
                <MessageCircle size={18} strokeWidth={2} className="text-white" />
              </a>
            </div>

            <div className="rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 p-[3px] shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                onMouseEnter={() => setMenuOpen(true)}
                className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-[#3d4a66]"
              >
                <span
                  className={`transition-transform duration-300 ${menuOpen ? "rotate-45" : "rotate-0"
                    }`}
                >
                  {menuOpen ? (
                    <X size={24} strokeWidth={2.3} />
                  ) : (
                    <Plus size={26} strokeWidth={2.3} />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="flex h-[58px] w-full items-center justify-center gap-2 bg-transparent">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-[3px] rounded-full transition-all duration-300 ${index === currentSlide
                  ? "w-8 bg-gray-900"
                  : "w-5 bg-gray-400 hover:bg-gray-600"
                }`}
            />
          ))}
        </div>
      </section>

      {/* 3. Welcome / About Section */}
      <section className="relative overflow-hidden bg-transparent pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <motion.span
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600"
            >
              {homeAboutData.eyebrow}
            </motion.span>

            <motion.h1
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-balance mt-4 font-display text-4xl font-semibold leading-[1.1] text-gray-900 sm:text-5xl lg:text-6xl"
            >
              {homeAboutData.title}
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg"
            >
              {homeAboutData.description}
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a
                href={homeAboutData.ctaHref}
                className="inline-flex items-center gap-2 rounded-md border border-amber-500 bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors hover:bg-amber-400 hover:border-amber-400 active:bg-amber-600 focus:bg-amber-500 shadow-sm"
              >
                {homeAboutData.ctaLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 shadow-[0_28px_60px_-20px_rgba(0,0,0,0.12)]">
              <img
                src={homeAboutImg}
                alt="A Rechi Construction residential development"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Pillars Section */}
      <section className="relative w-full py-12 sm:py-16 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl shadow-xl lg:grid-cols-3">
            {homePillars.map(({ title, text }, i) => {
              const styles = [
                {
                  bg: "bg-[#f0f2f5]",
                  title: "text-gray-900",
                  body: "text-gray-700",
                },
                {
                  bg: "bg-[#f59e0b]",
                  title: "text-gray-900",
                  body: "text-gray-900/95 font-medium",
                },
                {
                  bg: "bg-[#2d3748]",
                  title: "text-white",
                  body: "text-gray-200",
                },
              ][i % 3];

              return (
                <div
                  key={title}
                  className={`flex flex-col justify-start px-8 py-12 sm:px-10 sm:py-16 ${styles.bg}`}
                >
                  <h3 className={`font-display text-2xl font-bold tracking-tight sm:text-3xl ${styles.title}`}>
                    {title}
                  </h3>
                  <p className={`mt-6 text-sm leading-relaxed sm:text-base ${styles.body}`}>
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Our Strength Section */}
      <section className="relative bg-transparent py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            style={{ marginBottom: "80px" }}
          >
            {homeStrengthsData.title}
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer"
            style={{ rowGap: "64px", columnGap: "64px" }}
          >
            {homeStrengthsData.items.map(({ title, text }) => (
              <div
                key={title}
                className="group relative flex flex-col justify-start"
              >
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-3 -top-3 h-14 w-14 rounded-full bg-stone-300/60 transition-all duration-500 ease-out group-hover:scale-0 group-hover:opacity-0 group-hover:-translate-x-5 group-hover:-translate-y-5"
                  />
                  <h3 className="relative z-10 font-display text-xl font-bold text-gray-900">
                    {title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Works / Projects Gallery Section */}
      <section id="our-works" className="relative bg-transparent pb-24 pt-8 sm:pb-32 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Our Works
            </span>
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeTab}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="mt-2 font-display text-3xl font-bold text-gray-900 sm:text-4xl"
              >
                {activeTab === "All Projects" ? "Latest Projects" : `${activeTab} Projects`}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Clean Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 border-b border-gray-300/60 pb-3">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 text-sm sm:text-base font-semibold transition-colors duration-300 ${isActive ? "text-amber-600" : "text-gray-700 hover:text-gray-900"
                    }`}
                >
                  {tab}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Grid Container with Layout Transitions */}
          <div className="mt-10 min-h-[580px] sm:min-h-[680px]">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}