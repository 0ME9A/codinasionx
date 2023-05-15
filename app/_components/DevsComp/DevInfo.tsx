"use client";
import { child, container } from "app/_framerVariants/framerVariants";
import { isValidURL } from "app/_functions/functions";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { devApiGitInfoType } from "app/_types/Devs";
import { motion } from "framer-motion";
import DevsInfoSkeleton from "app/_components/Skeleton/Devs/DevsInfoSkeleton";
import BtnLink from "../Links&Btns/BtnLink";
import History from "../Links&Btns/History";
import AstroImg from "../CommonComp/Img";


export default function DevInfo({ api: { data, status } }: { api: devApiGitInfoType }) {

  return data && status === 200 ? (
    <motion.div
      variants={container}
      initial={'hidden'}
      whileInView={'show'}
      className="p-2">
      <div className="p-2 md:p-10 lg:p-16 justify-center flex flex-col md:flex-row gap-3 md:gap-5 lg:container mx-auto bg-gradient-to-tr from-light via-very-light to-very-light dark:from-darkII dark:via-very-dark relative dark:to-very-dark bg-darkII rounded-2xl lg:rounded-[50px] shadow-lg shadow-gray-500/50">
        <AstroImg
          imgUrl={data.avatar_url}
          style={"w-[20%] md:max-w-[300px] !rounded-full"}
          radius={200}
          imgSize={[200, 200]}
          alt={data.login}
        />
        <motion.article
          variants={child}
          className={`dark:text-white pt-0 md:pt-20 w-full md:w-[60%] lg:w-[40%]`}>
          <h1 title={data.name} className={`text-2xl font-semibold`}>
            {data.name}{" "}
            {data.type === "Organization" && (
              <span className="text-sm text-green-500 font-light">(org)</span>
            )}
          </h1>
          <h2 className={`text-gray-500`}>{data.login}</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{data.bio}</p>
          <table className={`w-full bg-light/50 dark:bg-dark/50 rounded-xl mt-2 md:mt-5 text-left`}>
            <thead>
              <tr>
                <th title={`${data.public_repos} repo`} className={`p-5 pb-0`}>Repo</th>
                <th title={`${data.followers} followers`} className={`p-5 pb-0`}>Followers</th>
                <th title={`${data.following} following`} className={`p-5 pb-0`}>Following</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`p-5 pt-1`}>{data.public_repos}</td>
                <td className={`p-5 pt-1`}>{data.followers}</td>
                <td className={`p-5 pt-1`}>{data.following}</td>
              </tr>
            </tbody>
          </table>
          <div className={`w-full rounded-xl mt-2 md:mt-5 p-3 gap-3 text-left grid grid-cols-3`}>
            {!!data.location && (
              <span className={`col-span-3 sm:col-span-1 group flex gap-2 items-center`}>
                <MdOutlineMyLocation className={`group-hover:scale-125`} />
                {data.location}
              </span>
            )}
            {isValidURL(data.blog) && (
              <BtnLink
                href={data.blog}
                title={'Website'}
                target="_blank"
                style={`!bg-transparent col-span-3 sm:col-span-2 !p-0 border-none w-fit !shadow-none`}>
                <GiEarthAsiaOceania className={`group-hover:scale-125`} />
                Website
              </BtnLink>
            )}
            {!!data.twitter_username && (
              <BtnLink
                href={`http://twitter.com/${data.twitter_username}`}
                title={'Twitter'}
                target="_blank"
                style={`!bg-transparent col-span-3 sm:col-span-1 !p-0 border-none w-fit !shadow-none`}>
                <FaTwitter className={`group-hover:scale-125`} />
                Twitter
              </BtnLink>
            )}
            <BtnLink
              href={`https://github.com/${data.login}`}
              title={'Github'}
              target="_blank"
              style={`!bg-transparent col-span-3 sm:col-span-2 !p-0 border-none w-fit !shadow-none`}>
              <FaGithub className={`group-hover:scale-125`} />
              GitHub
            </BtnLink>
          </div>
        </motion.article>
        <History
          text={"Back"}
          style={" md:self-start order-5 md:absolute md:top-5 md:left-5 "}
        />
      </div>
    </motion.div>
  ) : (
    <DevsInfoSkeleton />
  );
}
