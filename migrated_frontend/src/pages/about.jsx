import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff8ef] text-gray-900 overflow-x-hidden">
      
      {/* Spacer for fixed navbar */}
      <div style={{ height: "160px" }}></div>

      <div className="mx-auto max-w-5xl px-6 sm:px-8 pb-20">
        
        {/* Header - About Us centered like "GET IN TOUCH" */}
        <section className="pb-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="h-[1px] w-12 sm:w-16 bg-amber-600/70"></span>
            <span className="text-[13px] sm:text-[14px] font-semibold tracking-[0.25em] uppercase text-amber-600">
              {aboutData.header.badge}
            </span>
            <span className="h-[1px] w-12 sm:w-16 bg-amber-600/70"></span>
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-[28px] sm:text-[32px] font-bold leading-tight text-gray-900"
          >
            {aboutData.header.title}
          </motion.h1>
        </section>

        {/* Intro Paragraphs */}
        <section className="pb-8 space-y-5">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-[15px] leading-[1.7] text-gray-800"
          >
            <strong className="font-bold">{aboutData.introParagraphs[0].company}</strong>
            {aboutData.introParagraphs[0].textBeforeDirector}
            {aboutData.introParagraphs[0].director}
            {aboutData.introParagraphs[0].textAfterDirector}
            <span className="font-bold underline underline-offset-2">
              {aboutData.introParagraphs[0].highlight}
            </span>
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-[15px] leading-[1.7] text-gray-800"
          >
            <strong className="font-bold">{aboutData.introParagraphs[1].company}</strong>
            {aboutData.introParagraphs[1].text}
          </motion.p>
        </section>

        {/* Mission & Vision */}
        <section className="py-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-[22px] font-bold text-gray-900 mb-4">
              {aboutData.missionVision.title}
            </h2>

            <p className="text-[15px] leading-[1.7] text-gray-800 mb-5">
              <strong className="font-bold">{aboutData.missionVision.company}</strong>
              {aboutData.missionVision.description}
            </p>

            <ul className="space-y-2.5 text-[15px] leading-[1.65] text-gray-800">
              {aboutData.missionVision.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="py-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <h2 className="text-[22px] font-bold text-gray-900 mb-4">
              {aboutData.coreValues.title}
            </h2>

            <p className="text-[15px] leading-[1.7] text-gray-800">
              {aboutData.coreValues.textBeforeUnit}
              <span className="font-bold underline underline-offset-2">
                {aboutData.coreValues.unitName}
              </span>
            </p>
          </motion.div>
        </section>

        {/* Duplicated Core Values */}
        <section className="pt-2 pb-2">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-[15px] leading-[1.7] text-gray-800"
          >
            {aboutData.coreValuesDuplicate}
          </motion.p>
        </section>

        {/* CTA */}
        <section className="pt-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <a
              href={aboutData.cta.href}
              className="inline-flex items-center gap-1.5 bg-[#f5a623] hover:bg-[#e09415] px-5 py-2.5 text-[12px] font-bold uppercase tracking-wide text-gray-900 transition-colors rounded-sm"
            >
              {aboutData.cta.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}