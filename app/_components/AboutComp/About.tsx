"use client";
import { childScale, childScaleReverse, container } from "app/_framerVariants/framerVariants";
import { CgOrganisation } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import BtnLink from "app/_components/Links&Btns/BtnLink";
import Header from "app/_components/CommonComp/header";
import { commonData } from "@/data/siteMetadata";

export default function About() {
  return (
    <div className="lg:container mx-auto py-52 pb-64">
      <motion.div
        className="items-center justify-center flex flex-col gap-5 px-5"
        variants={container}
        initial="hidden"
        whileInView={"show"}>
        <Header
          title="About us"
          subTitle={`Developers from all over the world`}
          style="text-center"
          animateDirection={"b"}
        />
        <motion.p
          className="text-xl max-w-5xl w-full mx-auto text-center dark:text-white"
          variants={childScaleReverse}>
          {commonData.description}
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center mt-6 gap-2"
          variants={childScale}>
          <BtnLink
            href={"https://github.com/codinasion"}
            title={"Join Codinasion"}
            target="_blank"
            style="w-full sm:w-fit">
            <FaGithub className="group-hover:scale-125" />
            Join Codinasion
          </BtnLink>
          <BtnLink
            href={"/about"}
            title={"Read more"}
            style="w-full sm:w-fit">
            <CgOrganisation className="group-hover:scale-125" />
            Read more
          </BtnLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
