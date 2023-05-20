import { Index } from "app/_components/ReposComp/RepoPage/DeveloperPage";
import { devProjectGitType } from "app/_types/Devs";
import { notFound } from "next/navigation";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: `Contributors || Repositories || Codinasion`,
  description: `Discover and contribute to open-source projects on Codinasion's repository. Find 'good first issue' tickets and make high-quality code contributions. Join our developer community events for collaboration and growth`,
};

export default async function Page({ params }: { params: { repo: string; devs: string; } }) {
  const data: devProjectGitType[] = [];
  let status = 200;
  let page = 1;

  while (status === 200) {
    const url = `https://api.github.com/repos/codinasion/${params.repo}/contributors?per_page=100&page=${page}`;
    const fetchApi = await fetch(url);
    const jsonData: devProjectGitType[] = fetchApi.status === 200 ? await fetchApi.json() : [];

    data.push(...jsonData);
    status = fetchApi.status;

    if (jsonData.length > 0) { page++; }
    else { break; }
  }

  if (status !== 200) notFound()

  return <Index api={{ data, status }} />
}