import { twitterMeta } from "@/data/siteMetadata";
import { programType } from "app/_types/Program";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Index from "app/_components/ProgramComp/ProgramPage";
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
  const fetchApi: Response = await getProgram(params.slug);
  const jsonData: programType = await fetchApi.json();

  !fetchApi.ok && notFound();

  return (
    <Index api={{
      data: jsonData,
      status: fetchApi.status
    }} />
  );
}
