import { Metadata } from "next";
import HomeArticles from "app/_components/ReposComp/HomeArticles";
import HomeAside from "app/_components/ReposComp/HomeAside";

export const metadata: Metadata = {
  title: `Repositories || Codinasion`,
  description: `Discover and contribute to open-source projects on Codinasion's repository. Find 'good first issue' tickets and make high-quality code contributions. Join our developer community events for collaboration and growth`,
};

export default function Page() {
  return (
    <div className={"flex lg:container mx-auto p-2 gap-3 relative"}>
      <HomeArticles />
      <HomeAside />
    </div>
  )
}