import { keywords, twitterMeta } from "@/data/siteMetadata";
import { langType, repoType } from "app/_types/Repos";
import { devProjectGitType } from "app/_types/Devs";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Index from "app/_components/ReposComp/RepoPage";
import getRepo from "app/_api/getRepo";


export async function generateMetadata({ params }: { params: { repo: string } }): Promise<Metadata> {
  const [repoRes] = await getRepo(params.repo)

  if (repoRes.ok) {
    const repoData: repoType = await repoRes.json();
    const topics = repoData.topics || []
    const twitter = twitterMeta({
      title: repoData.name,
      desc: repoData.description,
      authors: [],
    })
    return {
      title: `${repoData.name} || Repositories || Codinasion`,
      description: repoData.description,
      keywords: keywords([...topics, repoData.name]),
      twitter: twitter
    }
  }
  return { title: `Repositorie not found! || Codinasion`, description: `Repositorie not found! check spelling and try again or search different repositorie.` }
}

export default async function Page({ params }: { params: { repo: string } }) {
  const [repoRes, langsRes, devsRes] = await getRepo(params.repo);

  const [repoData, langsData, devsData]:[repoType, langType, string[]] = await Promise.all([
    repoRes.json(),
    langsRes.json(),
    devsRes.json(),
  ]);
  
  if ([repoRes, langsRes, devsRes].some(res => res.status !== 200)) notFound()

  return <Index
    repo={{ data: repoData, status: repoRes.status }}
    lang={{ data: langsData, status: langsRes.status }}
    devs={{ data: devsData, status: devsRes.status }}
  />
}