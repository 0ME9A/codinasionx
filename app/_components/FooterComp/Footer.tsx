"use client";
import { child, container } from "app/_framerVariants/framerVariants";
import { projects, siteMap, SocialMedia, topRepos } from "@/data/siteLinks";
import { random } from "app/_functions/functions";
import { BiLinkExternal } from "react-icons/bi";
import { socialType } from "app/_types/siteMap";
import { motion } from "framer-motion";
import BtnLink from "../Links&Btns/BtnLink";
import Link from "next/link";
import Langs from "./Langs";

export default function Footer() {
  return (
    <div className={`bg-light dark:bg-darkII relative z-20`} id={"footer"}>
      <Langs />
      <motion.footer
        variants={container}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="lg:container mx-auto grid grid-cols-12 gap-5 py-16 p-2 md:p-5">
        <div className="col-span-12 md:col-span-6">
          <div>
            <motion.h2
              title="Codinasion"
              variants={child}
              className="text-3xl md:text-4xl font-bold text-black dark:text-white ">
              CODINASION
            </motion.h2>
            <motion.p
              variants={child}
              className="text-gray-700 dark:text-gray-300">
              {`We provide a wide range of programmings and tools in multiple languages which is created by our independent developers. Our all time favorite repo by developers is Program, offer you every type of programming in multiple languages.`}
            </motion.p>
          </div>
          <motion.div variants={child}>
            <BtnLink
              title={'Contribute'}
              url={`https://github.com/codinasion`}
              style="rounded-tl-none mt-5 w-full sm:w-fit">
              Contribute
              <BiLinkExternal className="group-hover:scale-125" />
            </BtnLink>
          </motion.div>
        </div>

        <motion.ul
          variants={child}
          className="col-span-12 md:col-span-2 dark:text-white">
          <li className="font-semibold">Site Map</li>
          {siteMap &&
            siteMap.map((item) => (
              <li key={random()} className="text-gray-700 dark:text-gray-300 capitalize">
                <Link href={item.url} title={item.name}>{item.name}</Link>
              </li>
            ))}
        </motion.ul>

        <motion.ul
          variants={child}
          className="col-span-12 md:col-span-2 dark:text-white capitalize">
          <li className="font-semibold">Top Repos</li>
          {topRepos &&
            topRepos.map((item) => (
              <li key={random()} className="text-gray-700 dark:text-gray-300">
                <Link href={item.href} title={item.name}>{item.name}</Link>
              </li>
            ))}
        </motion.ul>

        <motion.ul
          variants={child}
          className="col-span-12 md:col-span-2 dark:text-white capitalize">
          <li className="font-semibold">Projects</li>
          {projects &&
            projects.map((item) => (
              <li key={random()} className="text-gray-700 dark:text-gray-300">
                <Link href={item.href} title={item.name}>{item.name}</Link>
              </li>
            ))}
        </motion.ul>


        <motion.div
          variants={child}
          className="py-5 text-white border-t col-span-12 flex text-3xl gap-2 capitalize">
          {SocialMedia &&
            SocialMedia.map((item: socialType) => (
              <Link
                key={random()}
                href={item.href}
                title={item.name}
                className="hover:scale-125">
                {item.icon}
              </Link>
            ))}
        </motion.div>
      </motion.footer>
    </div>
  );
}
