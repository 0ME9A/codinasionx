import { devGitDataType } from 'app/_types/Devs';
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import DevInfo from 'app/_components/DevelopersComp/DevInfo';
import getDev from 'app/_api/getDev';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const fetchApi: Response = await getDev(params.dev);
  const jsonData: devGitDataType = await fetchApi.json();

  if (fetchApi.ok) return { title: `${jsonData.login} || Codinasion`, description: jsonData.bio };
  return { title: `User not found! || Codinasion`, description: `User not found! check spelling and try again or search different user.` }
}

export default async function Page({ params }: { params: { dev: string } }) {
  const fetchApi: Response = await getDev(params.dev);
  const jsonData: devGitDataType = await fetchApi.json();

  !fetchApi.ok && notFound();

  return <DevInfo api={{
    data: jsonData,
    status: fetchApi.status
  }} />;
}
