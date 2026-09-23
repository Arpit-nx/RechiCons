
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Plus,
  Share2,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import rechiLogo from "../assets/rechi_logo.png";

// Import data + needed images from projectfile.js
import {
  heroTitles,
  homeAboutData,
  homePillars,
  homeStrengthsData,

  // Hero slider images
  anandiApartment,
  anandiEnclave,
  anandiEnclave2,
  anandiResidency,
  santiBhawan,
  anandiVista,
  anandiView,
} from "./data/projectfile.js";

// Backend project API
import { getProjects } from "../api/projects";
import { projectImages } from "../data/projectImages";


// ============================================================
// CUSTOM PROJECT ICONS
// ============================================================

function CompletedProjectsIcon({
  className = "",
  strokeWidth = 1.5,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 21h20" />
      <path d="M6 12V3h2v9" />
      <path d="M6 6h2M6 8.5h2" />
      <path d="M11 12V2h2v10" />
      <path d="M11 5h2M11 7.5h2" />
      <path d="M16 12V3h2v9" />
      <path d="M16 6h2M16 8.5h2" />
      <rect x="3" y="12" width="8" height="9" />
      <path d="M7 12v9M3 15h8M3 18h8" />
      <rect x="13" y="12" width="8" height="9" />
      <path d="M17 12v9M13 15h8M13 18h8" />
    </svg>
  );
}


function OngoingProjectsIcon({
  className = "",
  strokeWidth = 1.5,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 21h20" />
      <path d="M7 21l5-12 5 12" />
      <path d="M8.5 17.5h7" />
      <path d="M10 14h4" />
      <path d="M3.5 8l13-4" />
      <path d="M3.5 8c-1.5 1-1.5 3 0 4" />
      <path d="M3.5 12v9" />
      <path d="M16.5 4v9" />
      <circle cx="16.5" cy="15.5" r="2" />
      <path d="M16.5 17.5v3.5" />
      <path d="M19 21v-3h2.5v3" />
    </svg>
  );
}


function UpcomingProjectsIcon({
  className = "",
  strokeWidth = 1.5,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 21h20" />
      <path d="M5 21V7h3v14" />
      <path d="M4 7h5" />
      <path d="M5 11h3M5 14h3" />
      <path d="M8 21V13l4-4v4l4-4v4l5-4v12" />
      <rect x="10" y="15" width="3" height="3" />
      <rect x="15" y="15" width="3" height="3" />
    </svg>
  );
}


function OtherServicesIcon({
  className = "",
  strokeWidth = 1.5,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="8" />
      <path d="M13 6l-4.5 6.5h3.5L11 18l4.5-6.5h-3.5z" />
    </svg>
  );
}


// ============================================================
// CONSTANTS
// ============================================================

const categoryTabs = [
  "All Projects",
  "Completed",
  "Ongoing",
  "Upcoming",
];

const ease = [0.16, 1, 0.3, 1];

let hasShownSplash = false;


// ============================================================
// ANIMATION
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.12,
      ease,
    },
  }),
};


// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({ project, index }) {
  const image = projectImages[project.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group"
    >
      <Link
        to={`/project?id=${project.id}&from=${project.category_id}`}
        className="block"
      >
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900">
          {image ? (
            <img
              src={image}
              alt={project.title}
              className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-[280px] items-center justify-center bg-neutral-800 text-white/50">
              No image available
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 pt-20">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>

            {project.location && (
              <p className="mt-1 text-sm text-white/70">
                {project.location}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}


// ============================================================
// HOME
// ============================================================

export default function Home({ onSplashEnd }) {

  // ----------------------------------------------------------
  // Splash
  // ----------------------------------------------------------

  const [showSplash, setShowSplash] =
    useState(!hasShownSplash);

  const [splashLeaving, setSplashLeaving] =
    useState(false);


  // ----------------------------------------------------------
  // Hero slider
  // ----------------------------------------------------------

  const [currentSlide, setCurrentSlide] =
    useState(0);


  // ----------------------------------------------------------
  // Floating menu
  // ----------------------------------------------------------

  const [menuOpen, setMenuOpen] =
    useState(false);


  // ----------------------------------------------------------
  // Project category
  // ----------------------------------------------------------

  const [activeTab, setActiveTab] =
    useState("All Projects");


  // ----------------------------------------------------------
  // Backend projects
  // ----------------------------------------------------------

  const [backendProjects, setBackendProjects] =
    useState([]);

  const [projectsLoading, setProjectsLoading] =
    useState(true);

  const [projectsError, setProjectsError] =
    useState("");


  // ==========================================================
  // HERO SLIDES
  // ==========================================================

  const slides = [
    anandiApartment,
    anandiEnclave,
    anandiResidency,
    anandiEnclave2,
    anandiVista,
    anandiView,
  ];


  // ==========================================================
  // FETCH PROJECTS FROM BACKEND
  // ==========================================================

  useEffect(() => {

    const fetchProjects = async () => {

      try {

        setProjectsLoading(true);
        setProjectsError("");

        const data = await getProjects();

        console.log(
          "Home projects response:",
          data
        );


        /*
         * Backend normally returns:
         *
         * [
         *   {
         *     id: 2,
         *     title: "...",
         *     slug: "...",
         *     thumbnail: "...",
         *     category_id: 3
         *   }
         * ]
         */

        const projectList =
          Array.isArray(data)
            ? data
            : Array.isArray(data?.projects)
              ? data.projects
              : Array.isArray(data?.data)
                ? data.data
                : [];


        setBackendProjects(projectList);

      } catch (error) {

        console.error(
          "Home projects fetch error:",
          error
        );

        setProjectsError(
          error?.response?.data?.detail ||
          "Failed to load projects."
        );

        setBackendProjects([]);

      } finally {

        setProjectsLoading(false);

      }

    };


    fetchProjects();

  }, []);


  // ==========================================================
  // NORMALIZE BACKEND PROJECT CATEGORY
  // ==========================================================

  const getProjectCategory = (project) => {

    const categoryId =
      project?.category_id ??
      project?.categoryId ??
      project?.category?.id ??
      project?.category?.category_id ??
      project?.category?.categoryId;


    if (Number(categoryId) === 3) {
      return "Completed";
    }

    if (Number(categoryId) === 4) {
      return "Ongoing";
    }

    if (Number(categoryId) === 5) {
      return "Upcoming";
    }


    const categoryName =
      project?.category?.name ||
      project?.category?.title ||
      project?.category_name ||
      project?.categoryName ||
      project?.status;


    if (typeof categoryName === "string") {

      const normalizedCategory =
        categoryName.trim().toLowerCase();


      if (normalizedCategory === "completed") {
        return "Completed";
      }


      if (normalizedCategory === "ongoing") {
        return "Ongoing";
      }


      if (normalizedCategory === "upcoming") {
        return "Upcoming";
      }

    }


    return "";
  };


  // ==========================================================
  // NORMALIZE PROJECT DATA
  // ==========================================================

  const normalizedBackendProjects =
    useMemo(() => {

      return backendProjects.map((project) => {

        const category =
          getProjectCategory(project);


        return {
          ...project,

          /*
           * Keep the backend category_id.
           * ProjectCard uses this for navigation.
           */
          category_id:
            project.category_id ??
            project.categoryId ??
            project.category?.id ??
            null,


          category,


          title:
            project.title ||
            project.name ||
            "Untitled Project",


          slug:
            project.slug ||
            project.project_slug ||
            project.projectSlug ||
            "",


          /*
           * Keep thumbnail from backend.
           */
          thumbnail:
            project.thumbnail ||
            project.thumbnailUrl ||
            project.thumbnail_url ||
            project.image ||
            project.imageUrl ||
            project.image_url ||
            null,

        };

      });

    }, [backendProjects]);


  // ==========================================================
  // PROJECT DATA USED BY HOME
  // ==========================================================

  /*
   * IMPORTANT:
   *
   * We DO NOT fall back to projectsData anymore.
   *
   * The last Projects section is now completely controlled
   * by the backend.
   */

  const homeProjects =
    normalizedBackendProjects;


  // ==========================================================
  // CATEGORY PROJECTS
  // ==========================================================

  const completedProjects =
    homeProjects.filter(
      (project) =>
        project.category === "Completed"
    );


  const ongoingProjects =
    homeProjects.filter(
      (project) =>
        project.category === "Ongoing"
    );


  const upcomingProjects =
    homeProjects.filter(
      (project) =>
        project.category === "Upcoming"
    );


  // ==========================================================
  // FILTERED PROJECTS
  // ==========================================================

  const filteredProjects =
    activeTab === "All Projects"
      ? homeProjects
      : homeProjects.filter(
          (project) =>
            project.category === activeTab
        );


  // ==========================================================
  // SPLASH SCREEN BODY LOCK
  // ==========================================================

  useEffect(() => {

    if (showSplash) {

      document.body.style.overflow =
        "hidden";

    } else {

      if (
        !document.body.classList.contains(
          "sidebar-open"
        )
      ) {
        document.body.style.overflow =
          "";
      }

    }


    return () => {

      if (
        !document.body.classList.contains(
          "sidebar-open"
        )
      ) {
        document.body.style.overflow =
          "";
      }

    };

  }, [showSplash]);


  // ==========================================================
  // SPLASH TIMER
  // ==========================================================

  useEffect(() => {

    if (!showSplash) return;


    const hideSplashTimer =
      window.setTimeout(() => {

        setSplashLeaving(true);


        window.setTimeout(() => {

          setShowSplash(false);

          hasShownSplash = true;


          if (onSplashEnd) {
            onSplashEnd();
          }

        }, 650);

      }, 2200);


    return () =>
      window.clearTimeout(
        hideSplashTimer
      );

  }, [showSplash, onSplashEnd]);


  // ==========================================================
  // HERO SLIDER TIMER
  // ==========================================================

  useEffect(() => {

    if (showSplash) return;


    const sliderTimer =
      window.setInterval(() => {

        setCurrentSlide(
          (prev) =>
            (prev + 1) %
            slides.length
        );

      }, 5000);


    return () =>
      window.clearInterval(
        sliderTimer
      );

  }, [showSplash, slides.length]);


  // ==========================================================
  // SHARE
  // ==========================================================

  const handleShare = async () => {

    try {

      if (navigator.share) {

        await navigator.share({
          title:
            "Rechi Construction",
          url:
            window.location.href,
        });

      } else {

        await navigator.clipboard.writeText(
          window.location.href
        );

      }

    } catch (error) {

      console.log(
        "Share cancelled"
      );

    }

  };


  // ==========================================================
  // CATEGORY CARD DATA
  // ==========================================================

  const projectCategoryCards = [

    {
      title: "Completed",
      count:
        completedProjects.length,
      path: "/projects/completed",
      gradient:
        "from-[#6b7cdd] to-[#4c5ebd]",
      Icon:
        CompletedProjectsIcon,
    },

    {
      title: "Ongoing",
      count:
        ongoingProjects.length,
      path: "/projects/ongoing",
      gradient:
        "from-[#fbb034] to-[#d98a12]",
      Icon:
        OngoingProjectsIcon,
    },

    {
      title: "Upcoming",
      count:
        upcomingProjects.length,
      path: "/projects/upcoming",
      gradient:
        "from-[#f08a8a] to-[#c95353]",
      Icon:
        UpcomingProjectsIcon,
    },

  ];


  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <div
      className="
        home-shell
        !m-0
        !w-full
        !max-w-none
        !p-0
        overflow-x-hidden
        bg-[#faf4ed]
        text-gray-900
      "
    >


      {/* ======================================================
          1. SPLASH SCREEN
      ====================================================== */}

      {showSplash && (

        <div
          className={`home-splash ${
            splashLeaving
              ? "home-splash--leave"
              : ""
          }`}
          aria-hidden="true"
        >

          <div className="home-splash__halo" />

          <div className="home-splash__card">

            <img
              src={rechiLogo}
              alt="Rechi Construction"
              className="
                home-splash__logo
                h-24
                w-auto
                object-contain
                mx-auto
                mb-2
                sm:h-32
                md:h-36
              "
            />

            <div className="home-splash__brand">

              <span
                className="home-splash__title"
                aria-label="Rechi Construction"
              >

                <span className="home-splash__title-part home-splash__title-part--left">
                  Rechi
                </span>

                <span className="home-splash__title-part home-splash__title-part--right">
                  Construction Pvt. Ltd.
                </span>

              </span>

              <span className="home-splash__subtitle">
                Building spaces with trust and precision
              </span>

            </div>

            <div className="home-splash__loader" />

          </div>

        </div>

      )}


      {/* ======================================================
          2. HERO IMAGE SLIDER
      ====================================================== */}

      <section
        className={`home-hero ${
          showSplash
            ? "home-hero--hidden"
            : "home-hero--enter"
        } relative !left-1/2 !w-[100vw] !min-w-[100vw] !max-w-[100vw] !-translate-x-1/2 !m-0 !p-0 bg-transparent`}
      >

        <div className="
          relative
          !w-full
          !max-w-none
          !m-0
          !p-0
          h-[88vh]
          min-h-[700px]
          max-h-[920px]
          overflow-hidden
        ">

          {/* Background Image Slides */}

          {slides.map(
            (image, index) => (

              <div
                key={index}
                className={`absolute inset-0 h-full w-full transition-all duration-[1200ms] ease-in-out ${
                  index === currentSlide
                    ? "z-10 scale-100 opacity-100"
                    : "z-0 scale-[1.04] opacity-0"
                }`}
              >

                <img
                  src={image}
                  alt={`Rechi Construction Project ${
                    index + 1
                  }`}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />

              </div>

            )
          )}


          {/* Vignette */}

          <div className="
            pointer-events-none
            absolute
            inset-0
            z-20
            bg-gradient-to-b
            from-black/30
            via-transparent
            to-black/40
          " />


          {/* Hero Typography */}

          <div className="
            absolute
            inset-0
            z-30
            flex
            items-center
            justify-start
            px-6
            sm:px-12
            lg:px-24
          ">

            <div className="max-w-xl bg-transparent">

              <AnimatePresence mode="wait">

                <motion.div
                  key={currentSlide}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -16,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                >

                  <h1 className="
                    font-display
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-stone-900
                    leading-[1.15]
                    drop-shadow-[0_2px_12px_rgba(255,255,255,0.85)]
                    sm:text-5xl
                    lg:text-6xl
                  ">
                    {heroTitles[
                      currentSlide %
                      heroTitles.length
                    ]}
                  </h1>


                  <div className="
                    mt-8
                    flex
                    flex-wrap
                    items-center
                    gap-4
                  ">

                    <a
                      href="#our-works"
                      className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-md
                        bg-[#fbb034]
                        px-6
                        py-3.5
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-gray-900
                        shadow-md
                        transition-all
                        duration-300
                        hover:bg-[#e09b2b]
                        hover:shadow-lg
                        active:scale-95
                        sm:text-sm
                      "
                    >
                      OUR PROJECTS

                      <ArrowRight className="h-4 w-4 stroke-[2.5]" />

                    </a>


                    <Link
                      to="/contact"
                      style={{
                        color: "#ffffff",
                      }}
                      className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-md
                        bg-stone-900
                        px-6
                        py-3.5
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        !text-white
                        shadow-md
                        transition-all
                        duration-300
                        hover:bg-black
                        hover:shadow-lg
                        active:scale-95
                        sm:text-sm
                      "
                    >

                      <span
                        style={{
                          color: "#ffffff",
                        }}
                        className="!text-white"
                      >
                        CONTACT US
                      </span>

                      <ArrowRight
                        className="
                          h-4
                          w-4
                          stroke-[2.5]
                          !text-white
                        "
                        style={{
                          color: "#ffffff",
                        }}
                      />

                    </Link>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>


          {/* ==================================================
              FLOATING ACTION MENU
          ================================================== */}

          <div
            className="
              absolute
              bottom-8
              right-[11%]
              z-40
              flex
              flex-col
              items-end
            "
            onMouseLeave={() =>
              setMenuOpen(false)
            }
          >

            <div
              className={`mb-3 w-[200px] overflow-hidden rounded-xl border border-white/15 bg-black/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 ${
                menuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-3 opacity-0 pointer-events-none"
              }`}
            >

              <button
                type="button"
                onClick={handleShare}
                className="
                  flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-end
                  gap-3
                  px-5
                  text-white
                  transition-colors
                  hover:bg-white/10
                "
              >

                <span className="
                  text-[14px]
                  font-medium
                  tracking-wide
                  text-white
                ">
                  Share
                </span>

                <Share2
                  size={18}
                  strokeWidth={2}
                  className="text-white"
                />

              </button>


              <Link
                to="/contact"
                className="
                  flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-end
                  gap-3
                  px-5
                  text-white
                  transition-colors
                  hover:bg-white/10
                "
              >

                <span className="
                  text-[14px]
                  font-medium
                  tracking-wide
                  text-white
                ">
                  Schedule a Visit
                </span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="text-white"
                />

              </Link>


              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-end
                  gap-3
                  px-5
                  text-white
                  transition-colors
                  hover:bg-white/10
                "
              >

                <span className="
                  text-[14px]
                  font-medium
                  tracking-wide
                  text-white
                ">
                  WhatsApp
                </span>

                <MessageCircle
                  size={18}
                  strokeWidth={2}
                  className="text-white"
                />

              </a>

            </div>


            <div className="
              rounded-full
              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-pink-500
              p-[3px]
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
            ">

              <button
                type="button"
                onClick={() =>
                  setMenuOpen(
                    (prev) => !prev
                  )
                }
                onMouseEnter={() =>
                  setMenuOpen(true)
                }
                className="
                  flex
                  h-[56px]
                  w-[56px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#3d4a66]
                "
              >

                <span
                  className={`transition-transform duration-300 ${
                    menuOpen
                      ? "rotate-45"
                      : "rotate-0"
                  }`}
                >

                  {menuOpen ? (
                    <X
                      size={24}
                      strokeWidth={2.3}
                    />
                  ) : (
                    <Plus
                      size={26}
                      strokeWidth={2.3}
                    />
                  )}

                </span>

              </button>

            </div>

          </div>

        </div>


        {/* Slider Indicators */}

        <div className="
          flex
          h-[58px]
          w-full
          items-center
          justify-center
          gap-2
          bg-transparent
        ">

          {slides.map(
            (_, index) => (

              <button
                key={index}
                type="button"
                onClick={() =>
                  setCurrentSlide(index)
                }
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-gray-900"
                    : "w-5 bg-gray-400 hover:bg-gray-600"
                }`}
              />

            )
          )}

        </div>

      </section>


      {/* ======================================================
          2.5 PROJECT CATEGORY NAVIGATION
      ====================================================== */}

      <section className="
        relative
        w-full
        max-w-[1600px]
        mx-auto
        bg-transparent
        px-4
        py-10
        sm:px-8
        sm:py-16
        lg:px-12
      ">

        <div className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          sm:gap-8
          lg:gap-10
        ">

          {projectCategoryCards.map(
            ({
              title,
              count,
              path,
              gradient,
              Icon,
            }) => (

              <Link
                key={title}
                to={path}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-8 sm:p-10 lg:p-12 text-white min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] flex flex-col justify-between shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 border border-white/10`}
              >

                <Icon
                  strokeWidth={1}
                  className="
                    absolute
                    -bottom-8
                    -right-8
                    h-48
                    w-48
                    text-white/10
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-110
                    group-hover:rotate-6
                    sm:h-64
                    sm:w-64
                    lg:h-80
                    lg:w-80
                  "
                />


                <div className="
                  z-10
                  flex
                  items-center
                ">

                  <div className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/20
                    shadow-inner
                    backdrop-blur-md
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    sm:h-16
                    sm:w-16
                  ">

                    <Icon
                      strokeWidth={1.8}
                      className="
                        h-7
                        w-7
                        text-white
                        sm:h-9
                        sm:w-9
                      "
                    />

                  </div>

                </div>


                <div className="
                  z-10
                  mt-8
                  flex
                  items-end
                  justify-between
                  sm:mt-12
                ">

                  <div>

                    <h3 className="
                      font-sans
                      text-3xl
                      font-light
                      tracking-tight
                      text-white
                      leading-[1.08]
                      sm:text-4xl
                      lg:text-5xl
                    ">

                      {title}

                      <span className="
                        block
                        font-bold
                      ">
                        Projects
                      </span>

                    </h3>


                    {!projectsLoading && (
                      <p className="
                        mt-3
                        text-sm
                        font-medium
                        text-white/80
                        sm:text-base
                      ">
                        {count}{" "}
                        {count === 1
                          ? "Project"
                          : "Projects"}
                      </p>
                    )}

                  </div>


                  <div className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    text-white
                    shadow-md
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:bg-white
                    group-hover:text-stone-900
                  ">

                    <ArrowUpRight
                      className="
                        h-6
                        w-6
                        stroke-[2]
                      "
                    />

                  </div>

                </div>

              </Link>

            )
          )}


          {/* OTHER SERVICES */}

          <Link
            to="/other-services"
            className="
              group
              relative
              flex
              min-h-[260px]
              flex-col
              justify-between
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-br
              from-[#52b7b5]
              to-[#2c8381]
              p-8
              text-white
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-1.5
              hover:shadow-2xl
              sm:min-h-[320px]
              sm:p-10
              lg:min-h-[360px]
              lg:p-12
            "
          >

            <OtherServicesIcon
              strokeWidth={1}
              className="
                absolute
                -bottom-8
                -right-8
                h-48
                w-48
                text-white/10
                transition-all
                duration-700
                ease-out
                group-hover:scale-110
                group-hover:rotate-6
                sm:h-64
                sm:w-64
                lg:h-80
                lg:w-80
              "
            />


            <div className="
              z-10
              flex
              items-center
            ">

              <div className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/30
                bg-white/20
                shadow-inner
                backdrop-blur-md
                transition-transform
                duration-500
                group-hover:scale-105
                sm:h-16
                sm:w-16
              ">

                <OtherServicesIcon
                  strokeWidth={1.8}
                  className="
                    h-7
                    w-7
                    text-white
                    sm:h-9
                    sm:w-9
                  "
                />

              </div>

            </div>


            <div className="
              z-10
              mt-8
              flex
              items-end
              justify-between
              sm:mt-12
            ">

              <div>

                <h3 className="
                  font-sans
                  text-3xl
                  font-light
                  tracking-tight
                  text-white
                  leading-[1.08]
                  sm:text-4xl
                  lg:text-5xl
                ">

                  Other

                  <span className="block font-bold">
                    Services
                  </span>

                </h3>

              </div>


              <div className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                shadow-md
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:bg-white
                group-hover:text-stone-900
              ">

                <ArrowUpRight
                  className="
                    h-6
                    w-6
                    stroke-[2]
                  "
                />

              </div>

            </div>

          </Link>

        </div>

      </section>


      {/* ======================================================
          3. WELCOME / ABOUT
      ====================================================== */}

      <section className="
        relative
        overflow-hidden
        bg-transparent
        pb-20
        pt-20
        sm:pb-28
        sm:pt-28
      ">

        <div className="
          relative
          mx-auto
          grid
          max-w-6xl
          grid-cols-1
          items-center
          gap-16
          px-4
          sm:px-6
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-12
        ">

          <div>

            <motion.span
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-amber-600
              "
            >
              {homeAboutData.eyebrow}
            </motion.span>


            <motion.h1
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
              className="
                mt-4
                text-balance
                font-display
                text-4xl
                font-semibold
                leading-[1.1]
                text-gray-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              {homeAboutData.title}
            </motion.h1>


            <motion.p
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
              className="
                mt-6
                max-w-xl
                text-base
                leading-relaxed
                text-gray-700
                sm:text-lg
              "
            >
              {homeAboutData.description}
            </motion.p>


            <motion.div
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-5
              "
            >

              <a
                href={homeAboutData.ctaHref}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-amber-500
                  bg-amber-500
                  px-6
                  py-3
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-gray-900
                  shadow-sm
                  transition-colors
                  hover:border-amber-400
                  hover:bg-amber-400
                  active:bg-amber-600
                  focus:bg-amber-500
                "
              >

                {homeAboutData.ctaLabel}

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                  "
                />

              </a>

            </motion.div>

          </div>


          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.1,
              ease,
              delay: 0.3,
            }}
            className="relative"
          >

            <div className="
              relative
              overflow-hidden
              rounded-[1.75rem]
              border
              border-white/60
              shadow-[0_28px_60px_-20px_rgba(0,0,0,0.12)]
            ">

              <img
                src={santiBhawan}
                alt="Santi Bhawan - Rechi Construction"
                className="
                  h-[420px]
                  w-full
                  object-cover
                  sm:h-[480px]
                "
              />

            </div>

          </motion.div>

        </div>

      </section>


      {/* ======================================================
          4. PILLARS
      ====================================================== */}

      <section className="
        relative
        w-full
        bg-transparent
        py-12
        sm:py-16
      ">

        <div className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
        ">

          <div className="
            grid
            grid-cols-1
            overflow-hidden
            rounded-2xl
            shadow-xl
            lg:grid-cols-3
          ">

            {homePillars.map(
              ({ title, text }, i) => {

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
                    className={`
                      flex
                      flex-col
                      justify-start
                      px-8
                      py-12
                      sm:px-10
                      sm:py-16
                      ${styles.bg}
                    `}
                  >

                    <h3
                      className={`
                        font-display
                        text-2xl
                        font-bold
                        tracking-tight
                        sm:text-3xl
                        ${styles.title}
                      `}
                    >
                      {title}
                    </h3>

                    <p
                      className={`
                        mt-6
                        text-sm
                        leading-relaxed
                        sm:text-base
                        ${styles.body}
                      `}
                    >
                      {text}
                    </p>

                  </div>
                );

              }
            )}

          </div>

        </div>

      </section>


      {/* ======================================================
          5. OUR STRENGTH
      ====================================================== */}

      <section className="
        relative
        bg-transparent
        py-20
        sm:py-28
        lg:py-32
      ">

        <div className="
          mx-auto
          max-w-6xl
          px-4
          sm:px-6
          lg:px-8
        ">

          <h2
            className="
              text-center
              font-display
              text-3xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
            style={{
              marginBottom: "80px",
            }}
          >
            {homeStrengthsData.title}
          </h2>


          <div
            className="
              grid
              cursor-pointer
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
            "
            style={{
              rowGap: "64px",
              columnGap: "64px",
            }}
          >

            {homeStrengthsData.items.map(
              ({ title, text }) => (

                <div
                  key={title}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    justify-start
                  "
                >

                  <div className="relative">

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        -left-3
                        -top-3
                        h-14
                        w-14
                        rounded-full
                        bg-stone-300/60
                        transition-all
                        duration-500
                        ease-out
                        group-hover:-translate-x-5
                        group-hover:-translate-y-5
                        group-hover:scale-0
                        group-hover:opacity-0
                      "
                    />

                    <h3 className="
                      relative
                      z-10
                      font-display
                      text-xl
                      font-bold
                      text-gray-900
                    ">
                      {title}
                    </h3>

                  </div>


                  <p className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-gray-600
                    sm:text-base
                  ">
                    {text}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ======================================================
          6. OUR WORKS / PROJECTS
      ====================================================== */}

      <section
        id="our-works"
        className="
          relative
          bg-transparent
          pb-24
          pt-8
          sm:pb-32
          sm:pt-12
        "
      >

        <div className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        ">


          {/* =========================
              SECTION HEADER
          ========================== */}

          <div className="text-center">

            <span className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-amber-600
            ">
              Our Works
            </span>


            <AnimatePresence mode="wait">

              <motion.h2
                key={activeTab}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  mt-2
                  font-display
                  text-3xl
                  font-bold
                  text-gray-900
                  sm:text-4xl
                "
              >

                {activeTab === "All Projects"
                  ? "Latest Projects"
                  : `${activeTab} Projects`}

              </motion.h2>

            </AnimatePresence>

          </div>


          {/* =========================
              CATEGORY FILTER
          ========================== */}

          <div className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            border-b
            border-gray-300/60
            pb-3
            sm:gap-6
          ">

            {categoryTabs.map(
              (tab) => {

                const isActive =
                  activeTab === tab;


                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() =>
                      setActiveTab(tab)
                    }
                    className={`relative px-4 py-2 text-sm sm:text-base font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-amber-600"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >

                    {tab}

                    {isActive && (

                      <motion.div
                        layoutId="activeTabUnderline"
                        className="
                          absolute
                          bottom-0
                          left-0
                          right-0
                          h-[3px]
                          rounded-full
                          bg-amber-500
                        "
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />

                    )}

                  </button>
                );

              }
            )}

          </div>


          {/* =========================
              PROJECT GRID
          ========================== */}

          <div className="
            mt-10
            min-h-[580px]
            sm:min-h-[680px]
          ">

            {projectsLoading ? (

              <div className="
                flex
                min-h-[400px]
                items-center
                justify-center
              ">

                <p className="
                  text-sm
                  text-gray-500
                ">
                  Loading projects...
                </p>

              </div>

            ) : projectsError ? (

              <div className="
                flex
                min-h-[400px]
                items-center
                justify-center
              ">

                <p className="
                  text-sm
                  text-red-500
                ">
                  {projectsError}
                </p>

              </div>

            ) : (

              <motion.div
                layout
                className="
                  grid
                  grid-cols-1
                  gap-6
                  sm:grid-cols-2
                  lg:grid-cols-4
                "
              >

                <AnimatePresence mode="popLayout">

                  {filteredProjects.map(
                    (project, idx) => (

                      <ProjectCard
                        key={
                          project.id ||
                          project.slug ||
                          idx
                        }
                        project={project}
                        index={idx}
                      />

                    )
                  )}

                </AnimatePresence>

              </motion.div>

            )}


            {/* =========================
                NO PROJECTS
            ========================== */}

            {!projectsLoading &&
              !projectsError &&
              filteredProjects.length === 0 && (

                <div className="
                  flex
                  min-h-[300px]
                  items-center
                  justify-center
                ">

                  <p className="
                    text-gray-500
                  ">
                    No{" "}
                    {activeTab === "All Projects"
                      ? ""
                      : activeTab.toLowerCase() + " "}
                    projects available.
                  </p>

                </div>

              )}

          </div>

        </div>

      </section>

    </div>
  );
}

