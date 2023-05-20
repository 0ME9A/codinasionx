"use client";
import { child, container } from "app/_framerVariants/framerVariants";
import { isValidURL } from "app/_functions/functions";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { devApiGitInfoType } from "app/_types/Devs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SDevProfile from "app/_components/SkeletonComp/Devs/SDevProfile";
import ArticleSection from "../LayoutsComp/ArticleSection";
import BtnLink from "../Links&BtnsComp/BtnLink";
import History from "../Links&BtnsComp/History";
import Article from "../LayoutsComp/Article";
import AstroImg from "../CommonComp/Img";


export default function DevInfo({ api: { data, status } }: { api: devApiGitInfoType }) {
  const [isMount, setMount] = useState(false);
  const { name, login, bio, blog, public_repos, followers, following, location, twitter_username, avatar_url, type } = data
  const isValidUrl = isValidURL(blog)

  useEffect(() => setMount(true), [])

  if (!isMount && status !== 200) {
    return (
      <ArticleSection style="!bg-transparent !min-h-fit px-2 pb-20">
        <SDevProfile />
      </ArticleSection>
    )
  }

  return (
    <motion.section
      variants={container}
      initial={'hidden'}
      whileInView={'show'}
      className="p-2 w-full h-full py-20">
      <Article style="!min-h-fit xl:container mx-auto flex flex-col md:flex-row justify-center gap-10 relative py-10 md:py-20 p-3 shadow-xl shadow-gray-500/10">
        <AstroImg
          imgUrl={avatar_url}
          style={"w-[20%] md:max-w-[300px] !rounded-full"}
          radius={200}
          imgSize={[200, 200]}
          alt={login}
        />

        <motion.section
          variants={child}
          className={`dark:text-white pt-0 md:pt-20 w-full md:w-[60%] lg:w-[40%]`}>
          <header title={`${name} (${login})`} >
            <h1 className={`text-2xl font-semibold`}>
              {name}{" "}
              {type === "Organization" && (
                <span className="text-sm text-green-500 font-light">(org)</span>
              )}
            </h1>
            <h2 className={`text-gray-500`}>{login}</h2>
          </header>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{bio}</p>
          <table className={`w-full max-w-xl bg-light/50 dark:bg-dark/50 rounded-xl mt-2 md:mt-5 text-left shadow-xl shadow-gray-500/20 hover:scale-105 `}>
            <thead>
              <tr>
                <th title={`${public_repos} repo`} className={`p-5 pb-0`}>Repo</th>
                <th title={`${followers} followers`} className={`p-5 pb-0`}>Followers</th>
                <th title={`${following} following`} className={`p-5 pb-0`}>Following</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`p-5 pt-1`}>{public_repos}</td>
                <td className={`p-5 pt-1`}>{followers}</td>
                <td className={`p-5 pt-1`}>{following}</td>
              </tr>
            </tbody>
          </table>

          <ul className={`w-full rounded-xl mt-2 md:mt-5 p-3 gap-3 text-left grid grid-cols-3`}>
            {!!location && (
              <li className={`col-span-3 sm:col-span-1 group flex gap-2 items-center`}>
                <MdOutlineMyLocation className={`group-hover:scale-125`} />
                {location}
              </li>
            )}
            {isValidUrl && (
              <li>
                <BtnLink
                  href={blog}
                  title={'Website'}
                  target="_blank"
                  style={`!bg-transparent col-span-3 sm:col-span-2 !p-0 border-none w-fit !shadow-none`}>
                  <GiEarthAsiaOceania className={`group-hover:scale-125`} />
                  Website
                </BtnLink>
              </li>
            )}
            {!!twitter_username && (
              <BtnLink
                href={`http://twitter.com/${twitter_username}`}
                title={'Twitter'}
                target="_blank"
                style={`!bg-transparent col-span-3 sm:col-span-1 !p-0 border-none w-fit !shadow-none`}>
                <FaTwitter className={`group-hover:scale-125`} />
                Twitter
              </BtnLink>
            )}
            <BtnLink
              href={`https://github.com/${login}`}
              title={'Github'}
              target="_blank"
              style={`!bg-transparent col-span-3 sm:col-span-2 !p-0 border-none w-fit !shadow-none`}>
              <FaGithub className={`group-hover:scale-125`} />
              GitHub
            </BtnLink>
          </ul>
        </motion.section>

        <History
          text={"Back"}
          style={" md:self-start order-5 md:absolute md:top-5 md:left-5 "}
        />
      </Article>
    </motion.section>
  )
}
