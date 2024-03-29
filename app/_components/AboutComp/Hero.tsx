"use client";
import { container, scrollY, variantsX } from "app/_framerVariants/framerVariants";
import { externaL } from "@/data/siteLinks";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import BtnLink from "../Links&BtnsComp/BtnLink";
import Wave from "../LayoutsComp/Wave";


export default function Hero() {
  return (
    <section className="relative w-full min-h-[50%] h-screen">
      <div className="absolute top-0 left-0 w-full h-full "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-lightII dark:from-darkII"></div>
      <Wave />
      <div className="w-full h-full py-60 absolute top-0 z-20 flex justify-center items-center overflow-x-hidden">
        <motion.div
          className="lg:container w-full h-fit flex flex-col justify-end items-center px-5 relative z-20 pt-32"
          variants={container}
          initial={"hidden"}
          whileInView={"show"}>
          <motion.h1
            className="text-[13vw] xl:text-[12rem] text-center leading-[100%] lg:leading-[75%] tracking-wider dark:text-white font-extrabold text-stroke"
            variants={variantsX}>
            CODINASION
          </motion.h1>
          <motion.p
            className="w-full max-w-6xl text-md sm:text-xl text-gray-700 dark:text-gray-300 tracking-wider font-thin text-center md:pt-5 overflow-x-hidden"
            variants={scrollY(50)}>
            Welcome to Codinasion - a community of passionate developers, where we share our knowledge and experience with each other.
            Whether you are a beginner or an experienced developer.
            Join us today and become a part of our thriving community!
          </motion.p>
          <motion.div className="flex mt-6 gap-2" variants={scrollY(50)}>
            <BtnLink href={externaL.invite.href} title={externaL.invite.name} target="_blank">
              <FaGithub className="group-hover:scale-125" />
              Join Codinasion
            </BtnLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

