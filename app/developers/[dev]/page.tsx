import { fetchData } from "app/_functions/functions";
import DevInfo from "app/_components/DevsComp/DevInfo";

export default async function Page({ params }: { params: { dev: string }}) {
  const url = `https://api.github.com/users/${params.dev}`;
  const dev = await fetchData(url);

  return <DevInfo dev={dev} />;
}
