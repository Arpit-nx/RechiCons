import { motion } from 'framer-motion';
import { EnquiryCard } from '../component/enquiry/EnquiryCard';
import { pageVariants, backgroundVariants } from '../animations/enquiryVariants';

const EnquiryPage = () => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ivory px-6 py-16 sm:px-10 sm:py-24"
    >
      {/* Soft ambient glow — inherits the hidden/visible state from motion.main */}
      <motion.div variants={backgroundVariants} aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
      </motion.div>

      <div className="relative z-10 flex w-full justify-center">
        <EnquiryCard />
      </div>
    </motion.main>
  );
};

export default EnquiryPage;
