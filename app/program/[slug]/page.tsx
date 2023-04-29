import ProgramAside from "app/_components/ProgramComp/ProgramAside";
import ProgramArticle from "app/_components/ProgramComp/ProgramArticle";
import RelatedProgram from "app/_components/ProgramComp/RelatedProgram";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const fetchApi = await fetch(`https://api.codinasion.org/program/${slug}`, { next: { revalidate: 60 }, });
  const data = fetchApi.status === 200 ? await fetchApi.json() : []
  return (
    <>
      <section className={"lg:flex lg:container mx-auto p-2 pb-0 gap-3 relative"}>
        <ProgramArticle data={data} />
        <ProgramAside data={data} />
      </section>
      <RelatedProgram data={data} />
    </>
  )
}
