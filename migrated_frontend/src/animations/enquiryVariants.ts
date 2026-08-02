import type { Variants } from 'framer-motion';

/**
 * Root page fade — the first beat of the cinematic entrance.
 */
export const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

/**
 * Ambient background glow — settles in slightly slower than the page shell.
 */
export const backgroundVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.1, ease: 'easeInOut' },
  },
};

/**
 * Enquiry card — rises 40px while fading in, then staggers its children
 * (heading, field rows, submit button) in on top of that motion.
 */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      when: 'beforeChildren',
      delayChildren: 0.2,
      staggerChildren: 0.09,
    },
  },
};

/**
 * Individual field group — inherits stagger timing from cardVariants.
 */
export const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};
