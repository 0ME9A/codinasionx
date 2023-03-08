"use client";
import { container } from "app/_framerVariants/framerVariants";
import { scrollX } from "app/_framerVariants/framerVariants";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import BtnLink from "../Links&Btns/BtnLink";

export default function Intro() {
  return (
    <motion.div
      className="lg:container py-32 min-h-screen mx-auto flex flex-col justify-end px-5 pb-[55%] sm:pb-[25%] lg:pb-[15%]"
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
    >
      <motion.h1
        className="text-[15vw] md:text-[10vw] xl:text-[10rem] leading-[15vw] md:leading-[10vw] xl:leading-[10rem] tracking-wider dark:text-white font-extrabold "
        variants={scrollX(-50)}
      >
        CODINASION
      </motion.h1>
      <motion.p
        className="max-w-4xl text-md sm:text-xl text-gray-700 dark:text-gray-300 tracking-wider font-thin"
        variants={scrollX(-50)}
      >
        We are a group of developer/programer from all over the world helps
        other developers to start their open source journey with our{" "}
        <span className="px-2 rounded-full bg-yellow-500 text-black uppercase text-sm font-normal">
          Good First
        </span>{" "}
        Issue projects.{" "}
      </motion.p>
      <motion.div className="flex mt-6 gap-2" variants={scrollX(-50)}>
        {/* <BtnLink url={"https://github.com/codinasion"} target="_blank" style="rounded-tl-none">
          <FaGithub className="group-hover:scale-125" />
          Sponsor
        </BtnLink> */}
        <BtnLink url={"https://github.com/codinasion"} title={'Join Codinasion'} target="_blank">
          <FaGithub className="group-hover:scale-125" />
          Join Codinasion
        </BtnLink>
      </motion.div>
    </motion.div>
  );
}
