"use clint";
import { BiLinkExternal } from "react-icons/bi";
import { repoCardType } from "app/_types/Repos";
import { AiOutlineStar } from "react-icons/ai";
import { IoTelescope } from "react-icons/io5";
import { GoRepoForked } from "react-icons/go";
import LinkI from "../Links&Btns/BtnLink";
import Img from "../CommonComp/Img";

export default function BasicRepoCard({
  imgUrl,
  title,
  desc,
  repoUrl,
  style,
  status,
}: repoCardType) {
  return (
    <div
      className={`grid grid-cols-12 gap-2 md:gap-8 xl:gap-10 rounded-[50px] hover:bg-very-light dark:hover:bg-very-dark mx-auto ${style}`}
    >
      <Img
        imgUrl={imgUrl}
        alt={title}
        radius={50}
        framer={false}
        imgSize={[400, 400]}
        style={
          "col-span-12 lg:col-span-3 lg:aspect-square aspect-video w-full "
        }
      />
      <div
        className={`col-span-12 md:col-span-9 rounded-[50px] flex flex-col items-start gap-3 p-2 py-5 justify-center text-black dark:text-white `}
      >
        <h2 title={title} className={` font-semibold text-2xl md:text-3xl `}>{title}</h2>
        <ul className="flex gap-2 text-sm">
          <li title={`${status.stars} Stars`} className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <AiOutlineStar />
            {status.stars}
          </li>
          <li title={`${status.forks} Forks`} className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <GoRepoForked />
            {status.forks}
          </li>
        </ul>
        <p className={`lg:w-[90%] dark:text-gray-300 text-gray-700 `}>{desc}</p>
        <div className="flex gap-2 mt-2 lg:gap-5">
          <LinkI
            title="ReadMe"
            url={`/repositories/${repoUrl}`}
            style="rounded-tl-none w-full sm:w-fit"
          >
            <IoTelescope className="group-hover:scale-125" />
            ReadMe
          </LinkI>
          <LinkI
            title="Contribute"
            url={`https://github.com/codinasion/${repoUrl}`}
            target="_blank"
            style="w-full sm:w-fit"
          >
            Contribute
            <BiLinkExternal className="group-hover:scale-125" />
          </LinkI>
        </div>
      </div>
    </div>
  );
}
