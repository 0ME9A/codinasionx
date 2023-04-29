"use client";
import { child, container } from "app/_framerVariants/framerVariants";
import { showoffRepoCardType } from "app/_types/Repos";
import { AiOutlineStar } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
import { motion } from "framer-motion";
import AstroImg from "../CommonComp/Img";
import React from "react";
import Link from "next/link";

export default function ShowoffRepoCard({
  id = 0,
  imgUrl,
  title,
  desc,
  repoUrl,
  style,
  order,
  status,
}: showoffRepoCardType) {
  return (
    <Link
      href={`/repositories/${repoUrl}`}
      title={title}
      className={'w-full block'}>
      <motion.div
        className={`grid grid-cols-12 gap-2 md:gap-8 xl:gap-10 rounded-[50px] hover:bg-white/50 dark:hover:bg-black/50 md:hover:bg-very-light dark:md:hover:bg-very-dark mx-auto ${style}`}
        variants={container}
        initial={"hidden"}
        whileInView={"show"}>
        {
          <AstroImg
            imgUrl={imgUrl}
            alt={title}
            style={`col-span-12 md:col-span-4 xl:col-span-6 !h-full ${order && order.includes(id) ? " md:order-1 " : " md:-order-1 "
              }`}
            imgSize={[400, 400]}
            radius={50}
          />
        }

        <div className={`col-span-12 md:col-span-8 xl:col-span-6 rounded-[50px] flex flex-col items-start p-2 justify-center text-black dark:text-white`}>
          <motion.h2
            title={title}
            variants={child}
            className={`font-semibold text-3xl md:text-4xl `}>
            {title}
          </motion.h2>
          <motion.p
            variants={child}
            className={`lg:w-[90%] text-lg md:text-xl dark:text-gray-300 text-gray-700 `}>
            {desc}
          </motion.p>
          <motion.ul variants={child} className="flex gap-2 text-sm pt-3">
            <li title={`${status.stars} Stars`} className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
              <AiOutlineStar />
              {status.stars}
            </li>
            <li title={`${status.forks} Forks`} className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
              <GoRepoForked />
              {status.forks}
            </li>
          </motion.ul>
        </div>
      </motion.div>
    </Link>
  );
}