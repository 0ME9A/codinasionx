"use client";
import { siteMap, SocialMedia, topRepos } from "@/data/navbarLinks";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import BtnLink from "../Links/BtnLink";
import Link from "next/link";
import Langs from "./Langs";
import { motion } from "framer-motion";
import { child, container } from "app/_framerVariants/framerVariants";

export default function FooterContainer() {
  return (
    <div className={`bg-light dark:bg-darkII relative z-20`}>
      <Langs />
      <motion.footer
        variants={container}
        initial={"hidden"}
        whileInView={"show"}
        className="lg:container mx-auto grid grid-cols-12 gap-5 py-16 p-2 md:p-5"
      >
        <div className="col-span-12 md:col-span-6">
          <div>
            <motion.h2
              variants={child}
              className="text-3xl md:text-4xl font-bold text-black dark:text-white "
            >
              CODINASION
            </motion.h2>
            <motion.p
              variants={child}
              className="text-gray-700 dark:text-gray-300"
            >
              {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
              earum hic magni, voluptatibus harum iusto accusantium. Odit
              voluptatem nobis cum. Possimus nobis, fuga doloribus fugit unde
              similique corrupti nihil!`}
            </motion.p>
          </div>
          <motion.div variants={child}>
            <BtnLink
              url={`https://github.com/codinasion`}
              style="rounded-tl-none mt-5 w-full sm:w-fit"
            >
              Contribute
              <BiLinkExternal className="group-hover:scale-125" />
            </BtnLink>
          </motion.div>
        </div>
        <motion.ul
          variants={child}
          className="col-span-12 md:col-span-3 dark:text-white"
        >
          <li className="font-semibold">Site Map</li>
          {siteMap &&
            siteMap.map((item) => (
              <li
                key={crypto.randomUUID()}
                className="text-gray-700 dark:text-gray-300"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
        </motion.ul>
        <motion.ul
          variants={child}
          className="col-span-12 md:col-span-3 dark:text-white"
        >
          <li className="font-semibold">Top Repos</li>
          {topRepos &&
            topRepos.map((item) => (
              <li
                key={crypto.randomUUID()}
                className="text-gray-700 dark:text-gray-300"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
        </motion.ul>
        <motion.div
          variants={child}
          className="py-5 text-white border-t col-span-12 flex text-3xl gap-2"
        >
          {SocialMedia &&
            SocialMedia.map((item) => (
              <Link
                key={crypto.randomUUID()}
                href={item.href}
                className="hover:scale-125"
              >
                {item.name.toLowerCase() === "github" && <FaGithub />}
                {item.name.toLowerCase() === "twitter" && <FaTwitter />}
                {item.name.toLowerCase() === "discord" && <FaDiscord />}
              </Link>
            ))}
        </motion.div>
      </motion.footer>
    </div>
  );
}
