import { dateFunc, random } from "app/_functions/functions";
import { programCompType } from "app/_types/Program";
import { HiUsers, HiClock } from "react-icons/hi";
import Tag from "../CommonComp/Tag";
import Link from "next/link";


export default function ProgramCard({ ProgramData, parentPath, style }: programCompType) {
  return (
    <Link href={parentPath + ProgramData.slug} className={`flex`}>
      <article title={ProgramData.title} className={`w-full space-y-4 text-black dark:text-white p-3 sm:p-5 !py-10 hover:bg-very-light dark:hover:bg-very-dark border-b-[1px] border-gray-500/20 mx-auto ${style}`}>
        <h2 title={ProgramData.slug.replaceAll("-", " ")} className="text-2xl font-semibold tracking-tight ">
          {ProgramData.slug.replaceAll('-', ' ')}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {ProgramData.languages.map((tag) => (
            <Tag key={random()} tag={tag} />
          ))}
        </ul>
        <div className="md:flex md:space-x-10 text-md">
          <div title={`Total contributers ${ProgramData.contributors.length}`} className={`flex items-center gap-2`}>
            <HiUsers className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="font-light text-md">Contributors : {" "}
              <b>{ProgramData.contributors.length}</b>
            </span>
          </div>
          <div title={`Last updated ${dateFunc(ProgramData.last_updated)}`} className={`flex items-center gap-2`}>
            <HiClock className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className=" font-light text-md">Last Updated : {" "}
              <b>{dateFunc(ProgramData.last_updated)}</b>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
