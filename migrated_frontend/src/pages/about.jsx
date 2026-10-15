
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { aboutData } from "./data/projectfile.js";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease },
  }),
};

const animationProps = (index = 0) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true },
  variants: fadeUp,
  custom: index,
});

const paragraphClass = "text-[15px] leading-[1.7] text-gray-800";
const headingClass = "text-[22px] font-bold leading-tight text-gray-900 mb-4";
const sectionClass = "mb-8";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const first = aboutData.introParagraphs[0];
  const second = aboutData.introParagraphs[1];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff8ef] text-gray-900">
      {/* Fixed navbar spacing */}
      <div className="h-40" />

      <main className="mx-auto max-w-5xl px-6 pb-20 sm:px-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <motion.div
            {...animationProps(0)}
            className="mb-4 flex items-center justify-center gap-4"
          >
            <span className="h-px w-12 bg-amber-600/70 sm:w-16" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-amber-600 sm:text-sm">
              {aboutData.header.badge}
            </span>
            <span className="h-px w-12 bg-amber-600/70 sm:w-16" />
          </motion.div>

          <motion.h1
            {...animationProps(1)}
            className="text-[28px] font-bold leading-tight text-gray-900 sm:text-[32px]"
          >
            {aboutData.header.title}
          </motion.h1>
        </header>

        
{/* Introduction */}
<section className="mb-8 space-y-5">
  <motion.p
    {...animationProps(0)}
    className="text-[15px] leading-[1.7] text-gray-800"
  >
    <strong className="font-bold">{first.company}</strong>{" "}
    {first.textBeforeDirector}
    {first.director}
    {first.textAfterDirector}{" "}
    <span className="font-bold underline underline-offset-2">
      {first.highlight}
    </span>
  </motion.p>

  <motion.p
    {...animationProps(1)}
    className="text-[15px] leading-[1.7] text-gray-800"
  >
    <strong className="font-bold">{second.company}</strong>{" "}
    {second.text}
  </motion.p>
</section>


        {/* Mission & Vision */}
        <section className={sectionClass}>
          <motion.div {...animationProps(0)}>
            <h2 className={headingClass}>
              {aboutData.missionVision.title}
            </h2>

            <p className={`${paragraphClass} mb-5`}>
              <strong className="font-bold">
                {aboutData.missionVision.company}
              </strong>{" "}
              {aboutData.missionVision.description}
            </p>

            <ul className="space-y-2.5 text-[15px] leading-[1.7] text-gray-800">
              {aboutData.missionVision.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className={sectionClass}>
          <motion.div {...animationProps(1)}>
            <h2 className={headingClass}>
              {aboutData.coreValues.title}
            </h2>

            <p className={paragraphClass}>
              {aboutData.coreValues.textBeforeUnit}{" "}
              <span className="font-bold underline underline-offset-2">
                {aboutData.coreValues.unitName}
              </span>
            </p>
          </motion.div>
        </section>

        {/* Additional Content */}
        <section className={sectionClass}>
          <motion.p
            {...animationProps(0)}
            className={paragraphClass}
          >
            {aboutData.coreValuesDuplicate}
          </motion.p>
        </section>
      </main>
    </div>
  );
}
