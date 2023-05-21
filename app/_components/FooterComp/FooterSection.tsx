"use client";
import { projects, siteMap, SocialMedia, topRepos } from "@/data/siteLinks";
import { container, scrollX } from "app/_framerVariants/framerVariants";
import { siteMapType, socialType, urlType } from "app/_types/siteMap";
import { random } from "app/_functions/functions";
import { commonData } from "@/data/siteMetadata";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RootFootr from "../SkeletonComp/Footer/RootFooter";
import FooterBox from "../LayoutsComp/FooterBox";
import About from "./AboutUs";
import Link from "next/link";
import Langs from "./Langs";

export default function Footer() {
  const [isMount, setMount] = useState(false);

  useEffect(() => setMount(true), [])

  if (!isMount) {
    return <RootFootr />
  }

  return (
    <motion.footer
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      className={`w-full relative z-10 bg-light dark:bg-darkII`}>

      <Langs />

      <div className="xl:container mx-auto grid grid-cols-12 gap-5 py-16 relative z-10 px-3">
        <About description={commonData.description} />

        <FooterBox title={`Site Map`} >
          <ul>
            {siteMap &&
              siteMap.map((item: siteMapType) => (
                <li key={random()} className="text-gray-700 dark:text-gray-300 capitalize">
                  <Link href={item.url} title={item.name}>{item.name}</Link>
                </li>
              ))}
          </ul>
        </FooterBox>

        <FooterBox title={`Top Repos`} >
          <ul>
            {topRepos &&
              topRepos.map((item: urlType) => (
                <li key={random()} className="text-gray-700 dark:text-gray-300">
                  <Link href={item.href} title={item.name}>{item.name}</Link>
                </li>
              ))}
          </ul>
        </FooterBox>

        <FooterBox title={`Projects`} >
          <ul>
            {projects &&
              projects.map((item) => (
                <li key={random()} className="text-gray-700 dark:text-gray-300">
                  <Link href={item.href} title={item.name}>{item.name}</Link>
                </li>
              ))}
          </ul>
        </FooterBox>
      </div>

      <motion.ul
        variants={scrollX(-50)}
        className="xl:container mx-auto py-5 text-white border-t col-span-12 flex text-3xl gap-2 capitalize px-3 pb-10">
        {SocialMedia &&
          SocialMedia.map((item: socialType) => (
            <li key={random()}>
              <Link
                href={item.href}
                title={item.name}
                className="hover:scale-125">
                {item.icon}
              </Link>
            </li>
          ))}
      </motion.ul>
      <p
        id="scroll-to-bottom"
        lang="en"
        title="Copyright information"
        className="text-center font-extralight opacity-50 text-xs p-2 py-1 bg-very-light dark:bg-very-dark text-black dark:text-white">
        Made With <span className="px-1 animate-pulse">❤️</span> By Codinasion | Open-Source Forever.
      </p>
    </motion.footer>
  )
}