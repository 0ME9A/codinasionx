import { twitterMeta } from "@/data/siteMetadata";
import { programType } from "app/_types/Program";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import RelatedProgram from "app/_components/ProgramComp/RelatedProgram";
import ProgramArticle from "app/_components/ProgramComp/ProgramArticle";
import ProgramAside from "app/_components/ProgramComp/ProgramAside";
import getProgram from "app/_api/getProgram"

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const fetchApi: Response = await getProgram(params.slug)

  if (fetchApi.ok) {
    const jsonData: programType = await fetchApi.json();
    const programTitle = jsonData.slug.replaceAll("-", " ")
    const twitterMetaData = twitterMeta({ title: programTitle, desc: jsonData.description, authors: jsonData.contributors })

    return {
      title: `${programTitle} || Codinasion`,
      description: jsonData.description,
      twitter: twitterMetaData,
    };
  }
  return { title: `Program not found! || Codinasion`, description: `Program not found! check spelling and try again or search different program.` }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const fetchApi = await getProgram(params.slug);
  const jsonData = await fetchApi.json();

  !fetchApi.ok && notFound();

  return (
    <>
      <section className={"lg:flex lg:container mx-auto p-2 pb-0 gap-3 relative"}>
        <ProgramArticle data={jsonData} />
        <ProgramAside data={jsonData} />
      </section>

      <RelatedProgram data={jsonData} />
    </>
  );
}
