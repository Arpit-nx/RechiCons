import React from 'react';
import { motion } from 'framer-motion';
import { EnquiryCard } from '../component/enquiry/EnquiryCard';
import { pageVariants, backgroundVariants } from '../animations/enquiryVariants';

const EnquiryPage = () => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#faf4ed] px-6 py-16 sm:px-10 sm:py-24"
    >
      {/* Deep Layered Ambient Blur Background */}
      <motion.div
        variants={backgroundVariants}
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top-center vibrant amber glow */}
        <div className="absolute left-1/2 -top-24 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-amber-400/25 blur-[140px]" />
        
        {/* Bottom-right warm accent orb */}
        <div className="absolute -bottom-20 -right-20 h-[520px] w-[520px] rounded-full bg-amber-500/20 blur-[130px]" />
        
        {/* Left ambient glow for depth */}
        <div className="absolute top-1/3 -left-20 h-[450px] w-[450px] rounded-full bg-orange-300/20 blur-[120px]" />
      </motion.div>

      <div className="relative z-10 flex w-full justify-center">
        <EnquiryCard />
      </div>
    </motion.main>
  );
};

export default EnquiryPage;