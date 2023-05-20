import { devProjectGitApiType } from "app/_types/Devs"
import DevelopersArticle from "./DevelopersArticle"

export function Index({ api }: { api: devProjectGitApiType }) {
    return <DevelopersArticle api={api} />
}