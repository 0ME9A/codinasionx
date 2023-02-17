import { fetchData } from "app/_functions/functions";
import Loading from "app/_components/Loading/Loading";
import Readme from "app/_components/ReposComp/Readme/Readme";
import { repos } from "@/data/Obj/repos";
import { devs } from "@/data/Obj/contributors";

export type readmeType = {
  name: string;
  description: string;
  languages_url: string;
  contributors_url: string;
  updated_at: string;
  homepage: string;
  stargazers_count: number;
  open_issues_count: number;
  topics: Array<string>;
  forks: number;
};
export type devsType = Array<{
  id: number;
  login: string;
  avatar_url: string;
}>;
type repoType = {
  params: { repo: string };
};
export default async function Page({ params }: repoType) {
  const repoUrl = `https://api.github.com/repos/codinasion/${params.repo}`;
  const langsUrl = `https://api.github.com/repos/codinasions/${params.repo}/languages`;
  const devsUrl = `https://api.github.com/repos/codinasion/${params.repo}/contributors`;
  // console.log(params);
  const repo = await fetchData(repoUrl);
  const langs = await fetchData(langsUrl);
  const devs = await fetchData(devsUrl);
  // const devs = null
  // const repo = null
  // const langs = null;
  // console.log(devs, "--------------page repo------", typeof devs);

  return (
    <div className="bg-very-light dark:bg-very-dark">
      {/* <Readme repo={repo} devs={devs} langs={langs} /> */}
      <Readme repo={repo} devs={devs} langs={langs} />
    </div>
  );
}
