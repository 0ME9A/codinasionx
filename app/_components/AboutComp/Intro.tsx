"use client";
import { container, scrollY } from "app/_framerVariants/framerVariants";
import { motion, Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import BtnLink from "../Links&Btns/BtnLink";

const variantsX: Variants = {
  hidden: {
    opacity: 0,
    letterSpacing: "100px"
  },
  show: {
    opacity: [0, 0, 0, 0, 0, 1],
    x: 0,
    letterSpacing: "5px",
    transition: {
      type: "spring",
      restSpeed: 30
    },
  },
};

export default function Intro() {
  return (
    <motion.div
      className="lg:container py-32 min-h-screen mx-auto flex flex-col justify-end items-center px-5 my-auto pb-[30vh]"
      variants={container}
      initial={"hidden"}
      whileInView={"show"}>
      <motion.h1
        className="text-[15vw] xl:text-[12rem] text-center leading-[100%] lg:leading-[75%] tracking-wider dark:text-white font-extrabold title-shadow"        
        variants={variantsX}>
        CODINASION
      </motion.h1>
      <motion.p
        className="max-w-4xl text-md sm:text-xl text-gray-700 dark:text-gray-300 tracking-wider font-thin text-center md:pt-5"
        variants={scrollY(50)}>
        We are a group of developer/programer from all over the world helps
        other developers to start their open source journey with our{" "}
        <span className="px-2 rounded-full bg-yellow-500 text-black uppercase text-sm font-normal inline-block">
          Good First
        </span>{" "}
        Issue projects.{" "}
      </motion.p>
      <motion.div className="flex mt-6 gap-2" variants={scrollY(50)}>
        <BtnLink url={"https://github.com/codinasion"} title={'Join Codinasion'} target="_blank">
          <FaGithub className="group-hover:scale-125" />
          Join Codinasion
        </BtnLink>
      </motion.div>
    </motion.div>
  );
}
