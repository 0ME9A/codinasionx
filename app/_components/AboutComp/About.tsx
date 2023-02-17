"use client";
import BtnLink from "app/_components/Links/BtnLink";
import Header from "app/_components/CommonComp/header";
import { FaGithub } from "react-icons/fa";
import {
  motion,
} from "framer-motion";
import {
  childScale,
  childScaleReverse,
  container,
} from "app/_framerVariants/framerVariants";

export default function About() {
  return (
    <motion.div
      className="container items-center justify-center flex flex-col gap-5 p-5 mx-auto py-24 min-h-[90vh]"
      variants={container}
      initial="hidden"
      whileInView={"show"}
    >
      <Header
        title="About us"
        subTitle={`Developers from all over the world`}
        style="text-center"
        animateDirection={"b"}
      />
      <motion.p
        className="text-xl max-w-4xl w-full mx-auto text-center dark:text-white"
        variants={childScaleReverse}
      >
        We are a group of developer/programer from all over the world helps
        others developer problems by our open-source projects. We provide a wide
        range of programmings and tools in multiple languages which is created
        by our independent developers. Our all time favorite repo by developers
        is Program, offer you every type of programming in multiple languages.
        And codinasion is open-source it means any developer who know
        programmings can contribute.
      </motion.p>
      <motion.div
        className="flex justify-center mt-6 gap-2"
        variants={childScale}
      >
        <BtnLink
          url={"https://github.com/codinasion"}
          target="_blank"
          style="rounded-tl-none"
        >
          <FaGithub className="group-hover:scale-125" />
          Join Codinasion
        </BtnLink>
      </motion.div>
    </motion.div>
  );
}
