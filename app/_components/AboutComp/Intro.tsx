"use client";
import { container, scrollY, variantsX } from "app/_framerVariants/framerVariants";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import BtnLink from "../Links&Btns/BtnLink";
import Wave from "../LayoutsComp/Wave";


export default function Intro() {
  return (
    <div className="relative w-full min-h-[50%] h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-very-light via-very-light/80 to-lightII/50 dark:from-very-dark dark:via-very-dark/70 dark:to-darkII/70"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl to-lightII/50 dark:from-very-dark dark:to-darkII/50"></div>
      <Wave />
      <div className="w-full h-full py-60 absolute top-0 z-20 flex justify-center items-center">
        <motion.div
          className="lg:container h-fit flex flex-col justify-end items-center px-5 relative z-20"
          variants={container}
          initial={"hidden"}
          whileInView={"show"}>
          <motion.h1
            className="text-[13vw] xl:text-[12rem] text-center leading-[100%] lg:leading-[75%] tracking-wider dark:text-white font-extrabold text-stroke"
            variants={variantsX}>
            CODINASION
          </motion.h1>
          <motion.p
            className="max-w-6xl text-md sm:text-xl text-gray-700 dark:text-gray-300 tracking-wider font-thin text-center md:pt-5"
            variants={scrollY(50)}>
            "Welcome to Codinasion - a community of passionate developers, where we share our knowledge and experience with each other.
            Whether you are a beginner or an experienced developer.
            Join us today and become a part of our thriving community!"
          </motion.p>
          <motion.div className="flex mt-6 gap-2" variants={scrollY(50)}>
            <BtnLink href={"https://github.com/codinasion"} title={'Join Codinasion'} target="_blank">
              <FaGithub className="group-hover:scale-125" />
              Join Codinasion
            </BtnLink>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

