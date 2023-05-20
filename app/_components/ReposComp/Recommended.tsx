import { random } from "app/_functions/functions"
import { repoType } from "app/_types/Repos"
import GitHubCard from "../CommonComp/GitHubCard"
import Box from "../LayoutsComp/Box"

export default function Recommended({ repos }: { repos: repoType[] | null }) {
    if (!repos) return <></>

    return (
        <Box title={"Recommended"}>
            <ul className="space-y-2">
                {repos.slice(0, 2).map((item) => (
                    <li key={random()}>
                        <GitHubCard repo={`codinasion/${item.name}`} />
                    </li>))
                }
            </ul>
        </Box>
    )
}