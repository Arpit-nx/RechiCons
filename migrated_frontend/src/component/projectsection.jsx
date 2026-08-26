import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import {projects} from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      if (!cards.length) return;

      /* =========================
         INITIAL POSITION
      ========================== */

      cards.forEach((card, index) => {
        if (index === 0) {
          gsap.set(card, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            rotation: 0,
            zIndex: 50,
          });
        } else {
          gsap.set(card, {
            x: index * 70,
            y: index * 70,
            scale: 0.96,
            opacity: 1,
            rotation: index % 2 === 0 ? 2 : -2,
            zIndex: 50 - index,
          });
        }
      });

      /* =========================
         SCROLL TIMELINE
      ========================== */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",

          end: `+=${(cards.length - 1) * 900}`,

          scrub: 1,
          pin: true,

          anticipatePin: 1,
        },
      });

      /* =========================
         CARD ANIMATION
      ========================== */

      cards.forEach((card, index) => {
        if (index === 0) return;

        const previousCard = cards[index - 1];

        // New card moves to center
        timeline.to(
          card,
          {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "none",
          },
          ">"
        );

        // Previous card moves diagonally backward
        timeline.to(
          previousCard,
          {
            x: -35,
            y: -35,
            scale: 0.94,
            opacity: 0.5,
            duration: 1,
            ease: "none",
          },
          "<"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[#fff8ef]
      "
    >

      {/* =========================
          HEADING
      ========================== */}

      <div
        className="
          absolute
          left-6
          right-6
          top-8
          z-[100]
          md:left-12
          md:top-10
          lg:left-20
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-black/50
          "
        >
          Our Work
        </p>

        <h2
          className="
            mt-2
            text-4xl
            font-semibold
            tracking-tight
            text-black
            md:text-5xl
            lg:text-6xl
          "
        >
          Featured Projects
        </h2>
      </div>

      {/* =========================
          CARD CONTAINER
      ========================== */}

      <div
        className="
          absolute
          left-1/2
          top-[57%]
          z-10
          h-[65vh]
          w-[88vw]
          -translate-x-1/2
          -translate-y-1/2
          md:h-[62vh]
          md:w-[75vw]
          lg:w-[65vw]
        "
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(element) => {
              cardsRef.current[index] = element;
            }}
            className="
              absolute
              inset-0
              h-full
              w-full
              overflow-hidden
              rounded-[28px]
              will-change-transform
            "
          >
            <Link
              to={`/project/${project.slug}`}
              className="block h-full w-full"
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* =========================
          BOTTOM TEXT
      ========================== */}

      <div
        className="
          absolute
          bottom-8
          left-6
          z-[100]
          md:left-12
          lg:left-20
        "
      >
        <span className="text-xs uppercase tracking-[0.3em] text-black/40">
          Scroll to explore
        </span>
      </div>

      <div
        className="
          absolute
          bottom-8
          right-6
          z-[100]
        "
      >
        <span className="text-xs tracking-[0.3em] text-black/40">
          {String(projects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

    </section>
  );
}