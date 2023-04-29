import { basicRepoCardType } from "app/_types/Repos";
import { AiOutlineStar } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
import Link from "next/link";


export default function BasicRepoCard({ title, desc, repoUrl, style, status, }: basicRepoCardType) {
  return (
    <Link
      href={`/repositories/${repoUrl}`}
      title={title}
      className={`w-full grid gap-2 p-3 py-5 sm:p-5 border-b border-gray-500/20 hover:bg-very-light dark:hover:bg-very-dark dark:text-white text-black mx-auto ${style}`}>
      <h2
        title={title}
        className={` font-semibold text-2xl md:text-3xl `}>
        {title}
      </h2>
      <p className={`lg:w-[90%] dark:text-gray-300 text-gray-700 `}>{desc}</p>
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
    </Link>
  );
}
