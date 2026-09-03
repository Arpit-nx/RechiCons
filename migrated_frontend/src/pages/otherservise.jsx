import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { servicesHeader, servicesData } from "./data/projectfile.js";

// Direct Image Imports
import serviceImg1 from "../assets/project-imgs/otherservises.jpg";
import serviceImg2 from "../assets/project-imgs/testing1.jpg";

// Map image assets by service ID
const serviceImages = {
  1: serviceImg1,
  2: serviceImg2,
};

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function OtherServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#fff8ef] text-gray-900">
      {/* Page Header with shorter side lines */}
      <section className="pt-28 md:pt-36 pb-12 px-4">
        <div className="max-w-[1080px] mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center justify-center gap-3 sm:gap-5"
          >
            <div className="h-[1.5px] w-8 sm:w-12 md:w-16 bg-amber-500" />
            <h1 className="text-amber-600 text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] uppercase select-none">
              {servicesHeader.badge}
            </h1>
            <div className="h-[1.5px] w-8 sm:w-12 md:w-16 bg-amber-500" />
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="px-4 pb-20">
        <div className="max-w-[1080px] mx-auto">
          {servicesData.map((service, index) => (
            <React.Fragment key={service.id}>
              <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start py-8 md:py-12">
                
                {/* Image Block */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeLeft}
                >
                  <div className="w-full h-[240px] md:h-[300px] overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                    <img
                      src={serviceImages[service.id]}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover block transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Text Content Block */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeRight}
                >
                  <h2 className="text-3xl md:text-[2.2rem] font-bold tracking-tight text-gray-900 mb-5">
                    {service.title}
                  </h2>

                  <div className="text-[16px] md:text-[17px] leading-relaxed text-gray-800">
                    {service.paragraphs?.map((paragraph, pIdx) => (
                      <p key={pIdx} className="mb-5">
                        {paragraph}
                      </p>
                    ))}

                    {service.subheading && (
                      <p className="mb-3 font-bold text-gray-900">
                        {service.subheading}
                      </p>
                    )}

                    {service.subheadingText && (
                      <p className="mb-5">
                        {service.subheadingText}
                      </p>
                    )}

                    {service.bulletPoints && service.bulletPoints.length > 0 && (
                      <ul className="list-disc pl-5 space-y-2">
                        {service.bulletPoints.map((point, bIdx) => (
                          <li key={bIdx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </article>

              {/* Separator Divider */}
              {index < servicesData.length - 1 && (
                <div className="h-px bg-gray-200 my-6 md:my-10" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}