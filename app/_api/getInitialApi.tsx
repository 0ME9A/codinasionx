import { Url } from "next-router-mock";

export default async function getInitialApi() {
    const programUrl: Url = `https://api.codinasion.org/program`;
    const repoUrl: Url = `https://api.github.com/orgs/codinasion/repos`;
    const devsUrl: Url = `https://api.codinasion.org/github/user`;
    const issueUrl: Url = `https://api.codinasion.org/good-1st-issue`;
    const issueLabelUrl: Url = `https://api.codinasion.org/good-1st-issue/labels`;

    return await Promise.all([
        fetch(programUrl),
        fetch(repoUrl),
        fetch(devsUrl),
    ]);
}