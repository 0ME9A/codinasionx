import { Variants } from "framer-motion";

export const scrollY = (initial_pos: number) => {
  const variantsY: Variants = {
    offscreen: {
      opacity: 0,
      y: initial_pos,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", restSpeed: 30, duration: 0.2 },
    },
  };
  return variantsY;
};
export const scrollX = (initial_pos: number) => {
  const variantsX: Variants = {
    hidden: {
      opacity: 0,
      x: initial_pos,
    },
    show: {
      opacity: [0, 0, 0, 0, 0, 1],
      x: 0,
      transition: { type: "spring", restSpeed: 30 },
    },
  };
  return variantsX;
};
export const scrollHeight = (height: number | string) => {
  const variantsHeight: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    show: {
      opacity: 1,
      height: height,
      transition: { type: "spring", restSpeed: 30, duration: 0.2 },
    },
  };
  return variantsHeight;
};
export const scrollScale = (initial_pos: number) => {
  const variantsS: Variants = {
    offscreen: {
      opacity: 0,
      scale: initial_pos,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", restSpeed: 30, duration: 0.2 },
    },
  };
  return variantsS;
};

// --------------------------------------

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      type: "spring",
      duration: 0.5,
    },
  },
};

export const child = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: [0, 0, 1],
    x: 0,
  },
};

export const childScale = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    transformOrigin: "center",
  },
  show: {
    opacity: 1,
    transformOrigin: "center",
    scale: 1,
    duration: 0.2,
  },
};

export const childScaleReverse = {
  hidden: {
    opacity: 0,
    scale: 1.5,
    transformOrigin: "center",
  },
  show: {
    opacity: 1,
    transformOrigin: "center",
    scale: 1,
  },
};
export const childScaleII = {
  hidden: {
    opacity: 0,
    scale: 0,
    transformOrigin: "center",
  },
  show: {
    opacity: 1,
    transformOrigin: "center",
    scale: [1, 1.2, 1],
  },
};

export const childOpacity = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    duration: 2,
  },
};

export const childSocial = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
  show: {
    opacity: 1,
    scaleY: 1,
  },
};

export const childWidth = {
  hidden: {
    width: 0,
  },
  show: {
    width: "100%",
    transition: {
      duration: 10,
    },
  },
};
