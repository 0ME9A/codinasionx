"use client";
import { isValidURL } from "app/_functions/functions";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import Loading from "../Loading/Loading";
import History from "../Links/History";
import { motion } from "framer-motion";
import BtnLink from "../Links/BtnLink";
import Img from "../CommonComp/Img";
import { child, container } from "app/_framerVariants/framerVariants";

type devinfoType = {
  login: string;
  avatar_url: string;
  type: string;
  name: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
};

function DevInfo({ dev }: { dev: devinfoType }) {
  return dev ? (
    <motion.div
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      className="p-2 md:p-10 lg:p-16 justify-center flex flex-col md:flex-row gap-3 md:gap-5 lg:container mx-auto bg-gradient-to-tr from-light via-very-light to-very-light dark:from-darkII dark:via-very-dark relative dark:to-very-dark bg-darkII rounded-2xl lg:rounded-[50px] my-20 mb-2"
    >
      <Img
        imgUrl={dev.avatar_url}
        style={"w-[20%] md:max-w-[300px]"}
        alt={dev.login}
      />
      <motion.article
        variants={child}
        className={`dark:text-white pt-0 md:pt-20 w-full md:w-[60%] lg:w-[40%]`}
      >
        <h1 className={`text-2xl font-semibold`}>
          {dev.name}{" "}
          {dev.type === "Organization" && (
            <span className="text-sm text-green-500 font-light">(org)</span>
          )}
        </h1>
        <h2 className={`text-gray-500`}>{dev.login}</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{dev.bio}</p>
        <table
          className={`w-full bg-light/50 dark:bg-dark/50 rounded-xl mt-2 md:mt-5 text-left`}
        >
          <thead>
            <tr>
              <th className={`p-5 pb-0`}>Repo</th>
              <th className={`p-5 pb-0`}>Followers</th>
              <th className={`p-5 pb-0`}>Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`p-5 pt-1`}>{dev.public_repos}</td>
              <td className={`p-5 pt-1`}>{dev.followers}</td>
              <td className={`p-5 pt-1`}>{dev.following}</td>
            </tr>
          </tbody>
        </table>
        <div
          className={`w-full rounded-xl mt-2 md:mt-5 p-3 gap-3 text-left grid grid-cols-3`}
        >
          {!!dev.location && (
            <span
              className={`col-span-3 sm:col-span-1 group flex gap-2 items-center`}
            >
              <MdOutlineMyLocation className={`group-hover:scale-125`} />
              {dev.location}
            </span>
          )}
          {isValidURL(dev.blog) && (
            <BtnLink
              url={dev.blog}
              target="_blank"
              style={`!bg-transparent col-span-3 sm:col-span-2 !p-0 border-none w-fit !shadow-none`}
            >
              <GiEarthAsiaOceania className={`group-hover:scale-125`} />
              Website
            </BtnLink>
          )}
          {!!dev.twitter_username && (
            <BtnLink
              url={`http://twitter.com/${dev.twitter_username}`}
              target="_blank"
              style={`!bg-transparent col-span-3 sm:col-span-1 !p-0 border-none w-fit !shadow-none`}
            >
              <FaTwitter className={`group-hover:scale-125`} />
              Twitter
            </BtnLink>
          )}
          <BtnLink
            url={`https://github.com/${dev.login}`}
            target="_blank"
            style={`!bg-transparent col-span-3 sm:col-span-2 !p-0 border-none w-fit !shadow-none`}
          >
            <FaGithub className={`group-hover:scale-125`} /> GitHub
          </BtnLink>
        </div>
      </motion.article>
      <History
        text={"Back"}
        style={" md:self-start order-5 md:absolute md:top-5 md:left-5 "}
      />
    </motion.div>
  ) : (
    <Loading />
  );
}

export default DevInfo;
