import { dateFunc, random } from "app/_functions/functions";
import { HiUsers, HiClock } from "react-icons/hi";
import { ProgramType } from "app/_types/Program";
import Tag from "../CommonComp/Tag";
import Link from "next/link";

type programDataType = {
  ProgramData: ProgramType;
  parentPath: string;
}
export default function ProgramCard({ ProgramData, parentPath }: programDataType) {

  return (
    <Link href={parentPath + ProgramData.slug}>
      <article title={ProgramData.title} className={`w-full space-y-4 text-black dark:text-white p-3 sm:p-5 !py-10 hover:bg-very-light dark:hover:bg-very-dark border-b-[1px] border-gray-500/20 mx-auto`}>
        <h2 title={ProgramData.title} className="text-2xl font-semibold tracking-tight ">
          {ProgramData.title}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {ProgramData.tags.map((tag) => (
            <Tag key={random()} tag={tag} />
          ))}
        </ul>


        <div className="md:flex md:space-x-10">
          <div title={`Total contributers ${ProgramData.contributors.length}`}>
            <HiUsers className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-md">Contributors :</span>{" "}
            <span className="text-md">
              <b>{ProgramData.contributors.length}</b>
            </span>
          </div>
          <div title={`Last updated ${dateFunc(ProgramData.latestUpdateDate)}`}>
            <HiClock className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-md">Last Updated :</span>{" "}
            <span className="text-md">
              <b>{dateFunc(ProgramData.latestUpdateDate)}</b>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
