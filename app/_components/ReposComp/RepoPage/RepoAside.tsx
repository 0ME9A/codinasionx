import { BiGitRepoForked } from "react-icons/bi";
import { asideType } from "app/_types/Repos";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import SRepoAside from "app/_components/SkeletonComp/Repo/SRepoAside";
import Aside from "app/_components/LayoutsComp/Aside";
import JoinContribution from "./JoinContribution";
import Contributor from "./Contributors";
import LastUpadat from "./LastUpadat";
import QuickLinks from "./QuickLinks";
import Topics from "./Topics";
import Langs from "./Langs";

export default function RepoAside({ repo, langs, devs }: asideType) {
  const { data: langsData, status: langsStatus } = langs;
  const { data: repoData, status: repoStatus } = repo;
  const { data: devsData, status: devsStatus } = devs;
  const [isMount, setMount] = useState(false);

  useEffect(() => setMount(true), [])

  if (!isMount || repoStatus !== 200) {
    return (
      <Aside style="!absolute lg:!relative !top-0">
        <SRepoAside />
      </Aside>
    )
  }

  return (
    <Aside style="!absolute lg:!relative !top-0">
      <ul className="p-2 space-y-2 relative ">
        <li title={`${repoData.stargazers_count} Stars`} className="flex gap-2 items-center text-black dark:text-white">
          <FaStar />
          {repo ? repoData.stargazers_count : 0} Stars
        </li>
        <li title={`${repoData.forks} Forks`} className="flex gap-2 items-center text-black dark:text-white">
          <BiGitRepoForked />
          {repo ? repoData.forks : 0} Forks
        </li>
      </ul>

      <QuickLinks repo={repoData} />
      <Topics topics={repoData.topics} />
      <Langs langs={langsData} />
      <Contributor devs={devsData} />

      <LastUpadat lastUpdata={repoData.updated_at} />
      <JoinContribution repoName={repoData.name} />
    </Aside >

  );
}
