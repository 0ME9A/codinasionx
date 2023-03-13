import HomeArticles from "app/_components/ProgramComp/HomeArticles";
import HomeAside from "app/_components/ProgramComp/HomeAside";

export default function Page() {
  return (
    <div className={"flex lg:container mx-auto p-2 gap-3 relative"}>
      <HomeArticles />
      <HomeAside />
    </div>
  )
}
