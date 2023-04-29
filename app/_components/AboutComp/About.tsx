"use client";
import { childScale, childScaleReverse, container } from "app/_framerVariants/framerVariants";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import BtnLink from "app/_components/Links&Btns/BtnLink";
import Header from "app/_components/CommonComp/header";

export default function About() {
  return (
    <div className="lg:container mx-auto py-52 pb-64">
      <motion.div
        className="items-center justify-center flex flex-col gap-5 px-5"
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
          others developer problems by our open-source projects. We provide a
          wide range of programmings and tools in multiple languages which is
          created by our independent developers. Our all time favorite repo by
          developers is Program, offer you every type of programming in multiple
          languages. And codinasion is open-source it means any developer who
          know programmings can contribute.
        </motion.p>
        <motion.div
          className="flex justify-center mt-6 gap-2"
          variants={childScale}
        >
          <BtnLink
            url={"https://github.com/codinasion"}
            title={"Join Codinasion"}
            target="_blank"
          >
            <FaGithub className="group-hover:scale-125" />
            Join Codinasion
          </BtnLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
