import { Variants } from "framer-motion";

export const titleVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.25,
      type: "spring",
      bounce: 0.2,
    },
  },
};

export const contentVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.75,
      type: "spring",
      bounce: 0.2,
    },
  },
};

export const heroVariants: Variants = {
  hidden: {
    x: 500,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
      delay: 0.2,
      type: "spring",
      bounce: 0.25,
    },
  },
};

export const navbarVariants = {
  hidden: { y: -500 },
  visible: {
    y: 0,
    transition: {
      duration: 1.5,
      delay: 0.2,
      type: "spring",
      bounce: 0.25,
    },
  },
};
