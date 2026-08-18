import React, { useEffect, useRef } from "react";

import img1 from "../assets/project-imgs/rechi1.jpeg";
import img2 from "../assets/project-imgs/rechi2.jpg";

export default function OtherServices() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const items = root.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.remove(
            "opacity-0",
            "translate-y-8",
            "-translate-x-10",
            "translate-x-10"
          );

          entry.target.classList.add(
            "opacity-100",
            "translate-y-0",
            "translate-x-0"
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={rootRef}
      className="min-h-screen bg-[#fff8ef] text-[#4f2b12]"
    >
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <section className="pt-28 md:pt-32 pb-8 px-4">
        <div className="max-w-[1080px] mx-auto text-center">
          <div
            data-reveal
            className="
              opacity-0
              translate-y-8
              transition-all
              duration-700
              ease-out
            "
          >
            <p className="text-[#7a3d10] text-sm font-semibold tracking-[3px] uppercase">
              Other Services
            </p>

            <div className="w-14 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#7a3d10] to-[#9a5b1a]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES CONTENT
      ====================================================== */}
      <section className="px-4 pb-20">
        <div className="max-w-[1080px] mx-auto">

          {/* =================================================
              SERVICE 1
          ================================================== */}
          <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start py-8 md:py-12">

            {/* Image */}
            <div
              data-reveal
              className="
                opacity-0
                -translate-x-10
                transition-all
                duration-700
                ease-out
              "
            >
              <div
                className="
                  w-full
                  h-[240px]
                  md:h-[300px]
                  overflow-hidden
                  rounded-xl
                  shadow-[0_8px_24px_rgba(79,43,18,0.10)]
                "
              >
                <img
                  src={img1}
                  alt="Construction and other services"
                  className="
                    w-full
                    h-full
                    object-cover
                    block
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </div>

            {/* Content */}
            <div
              data-reveal
              className="
                opacity-0
                translate-x-10
                transition-all
                duration-700
                ease-out
              "
            >
              <h1 className="font-serif text-3xl md:text-[2.2rem] font-normal tracking-tight mb-5">
                Other Services
              </h1>

              <div className="font-sans text-[16px] md:text-[17px] leading-relaxed">
                <p className="mb-5">
                  Rechi Construction (P) Ltd., with its experience in the
                  industry of homemaking, had to work over the years with
                  different well known and knowledgeable stakeholders in the
                  fields of Architecture, Designing, Planning and Law.
                </p>

                <p className="mb-5">
                  It has acquired immense knowledge and expertise not only in
                  construction but also in other such fields. Hence, it has
                  been providing other services in the following fields:
                </p>

                <p className="mb-3">
                  <strong>
                    1. Interior Designing and Execution:
                  </strong>
                </p>

                <p className="mb-5">
                  Rechi Construction provides end-to-end solutions in terms of
                  purchase of completed furnished flats. It has a strong
                  liaison with designers, carpenters, decorators, etc. and can
                  execute projects at a fraction of the cost of other solution
                  providers.
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Assistance in mutation of names</li>

                  <li>
                    Assistance in transfer and sale of properties
                  </li>

                  <li>
                    Assistance in legal matters related to land and property
                  </li>

                  <li>
                    Assistance in Home Loan sanctioning
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* =================================================
              DIVIDER
          ================================================== */}
          <div className="h-px bg-[rgba(79,43,18,0.10)] my-6 md:my-10" />

          {/* =================================================
              SERVICE 2
          ================================================== */}
          <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start py-8 md:py-12">

            {/* Image */}
            <div
              data-reveal
              className="
                opacity-0
                -translate-x-10
                transition-all
                duration-700
                ease-out
              "
            >
              <div
                className="
                  w-full
                  h-[240px]
                  md:h-[300px]
                  overflow-hidden
                  rounded-xl
                  shadow-[0_8px_24px_rgba(79,43,18,0.10)]
                "
              >
                <img
                  src={img2}
                  alt="Testing service"
                  className="
                    w-full
                    h-full
                    object-cover
                    block
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </div>

            {/* Content */}
            <div
              data-reveal
              className="
                opacity-0
                translate-x-10
                transition-all
                duration-700
                ease-out
              "
            >
              <h2 className="font-serif text-3xl md:text-[2.2rem] font-bold mb-4">
                Testing 1
              </h2>

              <p className="font-sans text-[16px] md:text-[17px] leading-relaxed">
                Testing service......
              </p>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}