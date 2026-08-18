import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import rechi1 from "../assets/project-imgs/rechi1.jpeg";
import rechi2 from "../assets/project-imgs/rechi2.jpg";
import rechi3 from "../assets/project-imgs/rechi3.jpeg";

gsap.registerPlugin(ScrollTrigger);

const verticals = [
  {
    title: "Residential",
    image: rechi1,
  },
  {
    title: "Retail",
    image: rechi2,
  },
  {
    title: "Hospitality",
    image: rechi3,
  },
  {
    title: "Commercial",
    image: rechi3,
  },
  {
    title: "Edu-Health",
    image: rechi1,
  },
];

export default function ManiVerticals() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // Initial card positions
      cards.forEach((card, index) => {
        gsap.set(card, {
          yPercent: index === 0 ? 0 : 110,
          opacity: 1,
          scale: 1,
          zIndex: index + 1,
        });
      });

      // Scroll animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",

          // Scroll distance for all cards
          end: `+=${(cards.length - 1) * 1000}`,

          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        const previousCard = cards[index - 1];

        // New card comes from the bottom
        timeline.to(card, {
          yPercent: 0,
          duration: 1,
          ease: "none",
        });

        // Previous card disappears
        timeline.to(
          previousCard,
          {
            scale: 0.94,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "<0.7"
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
        bg-[#f8efe2]
        backdrop-blur-xl
        border-b
        border-black/10
        shadow-[0_20px_60px_rgba(0,0,0,0.35),0_8px_25px_rgba(0,0,0,0.25)]
      "
    >
      <div className="relative h-full w-full">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div
          className="
            absolute
            left-8
            top-10
            z-[100]
            md:left-16
            md:top-14
          "
        >
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-black/50
            "
          >
            Our Business
          </p>

          <h2
            className="
              mt-2
              text-4xl
              font-bold
              text-black
              md:text-6xl
            "
          >
            Mani Verticals
          </h2>
        </div>

        {/* =========================
            CARD CONTAINER
        ========================== */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[75vh]
            w-[90vw]
            -translate-x-1/2
            -translate-y-1/2
            md:w-[85vw]
          "
        >

          {verticals.map((vertical, index) => (
            <div
              key={vertical.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-3xl
              "
            >

              {/* =========================
                  IMAGE
              ========================== */}
              <img
                src={vertical.image}
                alt={vertical.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* =========================
                  IMAGE OVERLAY
              ========================== */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/30
                "
              />

              {/* =========================
                  CARD CONTENT
              ========================== */}
              <div
                className="
                  absolute
                  bottom-10
                  left-10
                  z-10
                  text-white
                  md:bottom-16
                  md:left-16
                "
              >
                <p
                  className="
                    mb-3
                    text-sm
                    uppercase
                    tracking-[0.3em]
                  "
                >
                  0{index + 1}
                </p>

                <h3
                  className="
                    text-5xl
                    font-bold
                    md:text-7xl
                  "
                >
                  {vertical.title}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}