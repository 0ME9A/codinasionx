import { Url } from "next-router-mock";

export default async function getRepo(repository: string) {
    const repo: Url = `https://api.github.com/repos/codinasion/${repository}`;
    const langs: Url = `https://api.github.com/repos/codinasion/${repository}/languages`;
    const devs: Url = `https://api.github.com/repos/codinasion/${repository}/contributors`;

    return await Promise.all([
        fetch(repo),
        fetch(langs),
        fetch(devs),
    ]);
}