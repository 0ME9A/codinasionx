import { BiGitRepoForked } from "react-icons/bi";
import { asideType } from "app/_types/Repos";
import { FaStar } from "react-icons/fa";
import JoinContribution from "./JoinContribution";
import Contributor from "./Contributors";
import LastUpadat from "./LastUpadat";
import QuickLinks from "./QuickLinks";
import Topics from "./Topics";
import Langs from "./Langs";

export default function Aside({ repo, langs, devs, aside }: asideType) {

  return (
    <div
      className="absolute md:block md:relative right-0 top-0 w-full sm:w-[500px] h-fit overflow-y-auto lg:col-span-1 md:!scale-100 md:!opacity-100 bg-very-light dark:bg-very-dark md:!bg-transparent  dark:text-white origin-top overflow-hidden"
      style={{
        transform: `scaleY(${aside ? 1 : 0})`,
        opacity: aside ? 1 : 0,
      }}>
      <div>
        <div className="p-2 space-y-2 relative">
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
        <Contributor devs={devs} />
        <LastUpadat lastUpdata={repo.updated_at} />
        <JoinContribution repoName={repo.name} />
      </div>
    </div>
  );
}
