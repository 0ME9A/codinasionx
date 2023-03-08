import { asideType } from "app/_types/Repos";
import { BiGitRepoForked } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import JoinContribution from "./JoinContribution";
import Contributor from "./Contributors";
import QuickLinks from "./QuickLinks";
import LastUpadat from "./LastUpadat";
import Topics from "./Topics";
import Langs from "./Langs";

export default function Aside({
  state,
  setState,
  repo,
  langs,
  devs,
}: asideType) {
  return (
    <div
      className="lg:p-5 absolute md:block md:relative right-0 top-0 w-full bg-very-light dark:bg-very-dark sm:w-[500px] h-fit overflow-y-auto lg:col-span-1 md:!scale-100 md:!opacity-100 dark:text-white origin-top-right overflow-hidden"
      style={{
        transform: `scale(${state ? 1 : 0})`,
        opacity: state ? 1 : 0,
      }}
    >
      <div>
        <div className="p-2 space-y-2 relative">
          <IoClose
            className="dark:text-white text-black absolute right-2 top-2 md:hidden hover:scale-125 cursor-pointer text-2xl"
            onClick={() => setState(!state)}
          />
          <span title={`${repo.stargazers_count} Stars`} className="flex gap-2 items-center">
            <FaStar />
            {repo ? repo.stargazers_count : 0} Stars
          </span>
          <span title={`${repo.forks} Forks`} className="flex gap-2 items-center">
            <BiGitRepoForked />
            {repo ? repo.forks : 0} Forks
          </span>
        </div>
        <QuickLinks repo={repo} />
        <Topics topics={repo.topics} />
        <Langs langs={langs} />
        <Contributor devs={devs} repoName={repo.name} />
        <LastUpadat lastUpdata={repo.updated_at} />
        <JoinContribution repoName={repo.name} />
      </div>
    </div>
  );
}
