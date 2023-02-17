"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import BtnLink from "../Links/BtnLink";

export default function Intro() {
  return (
    <div className="container py-32 min-h-[90vh] mx-auto flex flex-col items-center justify-center">
      <motion.h1
        className="text-[15vw] xl:text-[10rem] leading-[15vw] xl:leading-[10rem] tracking-wider text-center dark:text-white font-extrabold dark:animate-glowTextLight animate-glowTextDark"
        initial={{ opacity: 0, letterSpacing: ".5em" }}
        whileInView={{ opacity: 1, letterSpacing: ".05em" }}
        transition={{ type: "tween", ease: "linear" }}
      >
        CODINASION
      </motion.h1>
      <motion.p
        className="max-w-4xl text-center text-md sm:text-xl px-2 md:p-0 text-gray-700 dark:text-gray-300 tracking-wider font-thin"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", ease: "linear", delay: 0.6 }}
      >
        We are a group of developer/programer from all over the world helps
        other developers to start their open source journey with our{" "}
        <span className="px-2 rounded-full bg-yellow-500 text-black uppercase text-sm font-normal">
          Good First
        </span>{" "}
        Issue projects.{" "}
      </motion.p>
      <motion.div
        className="flex justify-center mt-6 gap-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", ease: "linear", delay: 1 }}
      >
        <BtnLink url={"https://github.com/codinasion"} target="_blank">
          <FaGithub className="group-hover:scale-125" />
          Join Codinasion
        </BtnLink>
      </motion.div>
    </div>
  );
}
