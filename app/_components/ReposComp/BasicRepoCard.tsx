"use clint";
import { AiOutlineStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { GoRepoForked } from "react-icons/go";
import { IoTelescope } from "react-icons/io5";
import LinkI from "../Links/BtnLink";
import Atropos from "atropos/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { childScale, scrollScale } from "app/_framerVariants/framerVariants";

type status = {
  forks: number;
  stars: number;
};
type repoCardType = {
  imgUrl: string;
  title: string;
  desc: string;
  repoUrl: string;
  style?: string;
  status: status;
};
export default function BasicRepoCard({
  imgUrl,
  title,
  desc,
  repoUrl,
  style,
  status,
}: repoCardType) {
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{ amount: 0.6, once: false }}
      variants={scrollScale(0.8)}
      className={`grid grid-cols-12 gap-2 md:gap-8 xl:gap-10 rounded-[50px] hover:bg-very-light dark:hover:bg-very-dark mx-auto ${style}`}
    >
      <Atropos
        className={`col-span-12 lg:col-span-3 lg:aspect-square aspect-video w-full rounded-[50px] bg-very-dark dark:bg-very-light dark:shadow-darkShadow-lg shadow-lightShadow-lg atropos-banner `}
      >
        <Image
          src={imgUrl}
          width={"800"}
          height={"800"}
          alt={`${title} repo preview`}
          className={`w-full h-full rounded-[50px] object-cover 
        `}
        />
      </Atropos>
      <div
        className={`col-span-12 md:col-span-9 rounded-[50px] flex flex-col items-start gap-3 p-2 justify-center text-black dark:text-white `}
      >
        <h2 className={` font-semibold text-2xl md:text-3xl `}>{title}</h2>
        <ul className="flex gap-2 text-sm">
          <li className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <AiOutlineStar />
            {status.stars}
          </li>
          <li className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <GoRepoForked />
            {status.forks}
          </li>
        </ul>
        <p className={`lg:w-[90%] dark:text-gray-300 text-gray-700 `}>{desc}</p>
        <div className="flex gap-2 mt-2 lg:gap-5">
          <LinkI
            url={`/repositories/${repoUrl}`}
            style="rounded-tl-none w-full sm:w-fit"
          >
            <IoTelescope className="group-hover:scale-125" />
            ReadMe
          </LinkI>
          <LinkI
            url={`https://github.com/codinasion/${repoUrl}`}
            target="_blank"
            style="w-full sm:w-fit"
          >
            Contribute
            <BiLinkExternal className="group-hover:scale-125" />
          </LinkI>
        </div>
      </div>
    </motion.div>
  );
}
