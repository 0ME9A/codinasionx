import { Metadata } from "next";
import HomeArticles from "app/_components/ProgramComp/HomeArticles";
import HomeAside from "app/_components/ProgramComp/HomeAside";

export const metadata: Metadata = {
  title: `Program || Codinasion`,
  description: `Share solutions with the community on Codinasion's Program repository. Find good first issues, make coordinated contributions, and join an inclusive community.`,
};

export default function Page() {
  return (
    <section className={"flex lg:container mx-auto p-2 gap-3 relative"}>
      <HomeArticles />
      <HomeAside />
    </section>
  )
}
