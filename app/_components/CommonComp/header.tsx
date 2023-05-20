"use client";
import { container, scrollX, scrollY } from "app/_framerVariants/framerVariants";
import { motion, Variants } from "framer-motion";

type headerType = {
  title: string;
  subTitle: string;
  style?: string;
  animateDirection?: "t" | "r" | "b" | "l";
};
export default function Header({ title, subTitle, style, animateDirection = "t", }: headerType) {
  type animateType = {
    l: Variants;
    r: Variants;
    t: Variants;
    b: Variants;
  };
  const animate: animateType = {
    l: scrollX(-50),
    r: scrollX(50),
    t: scrollY(-50),
    b: scrollY(50),
  };

  return (
    <motion.header
      className={` ${style}`}
      variants={container}
      initial="hidden"
      whileInView={"show"}>
      <motion.h2
        className="text-3xl md:text-4xl uppercase font-extrabold dark:text-white"
        title={title}
        variants={animate[animateDirection]}>
        {title}
      </motion.h2>
      <motion.h3
        className="text-gray-700 dark:text-gray-300 font-thin tracking-wider"
        variants={animate[animateDirection]}>
        {subTitle}
      </motion.h3>
    </motion.header>
  );
}
