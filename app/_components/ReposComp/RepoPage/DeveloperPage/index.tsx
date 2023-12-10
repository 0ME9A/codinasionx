import { devProjectGitType } from "app/_types/Devs";
import DevelopersArticle from "./DevelopersArticle";

export function Index({
  api,
}: {
  api: { data: devProjectGitType[]; status: number };
}) {
  return <DevelopersArticle api={api} />;
}
