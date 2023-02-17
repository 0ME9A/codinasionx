"use client";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
import { IoTelescope } from "react-icons/io5";
import LinkI from "../Links/BtnLink";
import Atropos from "atropos/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  scrollY,
  scrollScale,
  child,
  childScaleReverse,
  childScale,
  container,
} from "app/_framerVariants/framerVariants";

type status = {
  forks: number;
  stars: number;
};
type repoCardType = {
  id: number | 0;
  imgUrl: string;
  title: string;
  desc: string;
  repoUrl: string;
  style?: string;
  order: number[];
  status: status;
};
export default function ShowoffRepoCard({
  id = 0,
  imgUrl,
  title,
  desc,
  repoUrl,
  style,
  order,
  status,
}: repoCardType) {
  return (
    <motion.div
      className={`grid grid-cols-12 gap-2 md:gap-8 xl:gap-10 rounded-[50px] hover:bg-white/50 dark:hover:bg-black/50 md:hover:bg-very-light dark:md:hover:bg-very-dark mx-auto ${style}`}
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
    >
      <motion.div
        className={`col-span-12 md:col-span-4 xl:col-span-6 aspect-square w-full bg-very-dark dark:bg-very-light atropos-banner rounded-[50px]
        ${order && order.includes(id) ? " md:order-1 " : " md:-order-1 "}
        `}
        variants={childScale}
      >
        <Atropos
          activeOffset={40}
          shadowScale={0.8}
          highlight={true}
          className={`aspect-square`}
        >
          <Image
            src={imgUrl}
            width={"800"}
            height={"800"}
            alt={`${title} repo preview`}
            className={` w-full rounded-[50px] object-cover dark:shadow-darkShadow-lg shadow-lightShadow-lg
        `}
          />
        </Atropos>
      </motion.div>
      <div
        className={`col-span-12 md:col-span-8 xl:col-span-6 rounded-[50px] flex flex-col items-start gap-3 p-2 justify-center text-black dark:text-white`}
      >
        <motion.h2
          variants={child}
          className={`font-semibold text-3xl md:text-4xl `}
        >
          {title}
        </motion.h2>
        <motion.ul variants={child} className="flex gap-2 text-sm">
          <li className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <AiOutlineStar />
            {status.stars}
          </li>
          <li className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <GoRepoForked />
            {status.forks}
          </li>
        </motion.ul>
        <motion.p
          variants={child}
          className={`lg:w-[90%] text-lg md:text-xl dark:text-gray-300 text-gray-700 `}
        >
          {desc}
        </motion.p>
        <motion.div variants={child} className="flex gap-2 mt-2 lg:gap-5">
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
        </motion.div>
      </div>
    </motion.div>
  );
}
