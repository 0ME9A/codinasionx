// import { devsDataType } from "app/_types/Devs";
import { codinasionDevApiType, devProjectGitType } from "app/_types/Devs";
import { issueType } from "app/_types/Issue";
import { programType } from "app/_types/Program";
import { repoType } from "app/_types/Repos";

// filter repositories
export const filterRepos = (keywords: string | null, data: repoType[]): repoType[] => {
    if (keywords && data.length) {
        const filtred = data.filter((item: any) => {
            const key: string = item.name.toLocaleLowerCase()
            const keyword: string | null = keywords.toLocaleLowerCase()
            return key.includes(keyword)
        })
        return filtred
    }
    return []
}

// filter developers
export const filterDevs = (keywords: string | null, data: codinasionDevApiType[]): codinasionDevApiType[] => {
    const layer1 = keywords && data.length ? data.filter((item: codinasionDevApiType) => {
        const name: string = item.user.login.toLocaleLowerCase()
        const role: string = item.role.toLocaleLowerCase()
        const keyword: string = keywords.toLocaleLowerCase()
        return name.includes(keyword) || role.includes(keyword)
    }) : []
    return layer1
}

export const filterProjecetDevs = (keywords: string | null, data: devProjectGitType[]): devProjectGitType[] => {
    const layer1 = keywords && data.length ? data.filter((item: devProjectGitType) => {
        const name: string = item.login.toLocaleLowerCase();
        const keyword: string[] = keywords.toLocaleLowerCase().split(" ");
        return keyword.includes(name)
    }) : []
    return layer1
}

// export const filterData = (keywords: string | null, data: devsDataType[]): devsDataType[] => {
//     const layer1 = keywords && data.length ? data.filter(item => {
//         const key = item.login.toLocaleLowerCase()
//         const keyword = keywords.toLocaleLowerCase()
//         return key.includes(keyword)
//     }) : []
//     return layer1
// }

// filter program
export function filterProgram(data: programType[], tag: string, search: string | null): programType[] {
    search = search ? search.trim().toLowerCase() : "";
    tag = tag.trim();

    const layer = data.filter((obj) => {
        // const titalCase = obj.title.toLowerCase().split(" ");
        const titalCase: string[] = obj.slug.toLowerCase().split("-");
        const keywords: string[] = search ? search.split(" ") : [];

        if (search) {
            // if (tag !== "All") return keywords.some((str) => titalCase.includes(str) && obj.tags.includes(tag));
            if (tag !== "All") return keywords.some((str) => titalCase.includes(str) && obj.languages.includes(tag));
            if (tag === "All") return keywords.some((str) => titalCase.includes(str));
        } else {
            // if (tag !== "All") return obj.tags.includes(tag);
            if (tag !== "All") return obj.languages.includes(tag);
            if (tag === "All") return data
        }
    });
    return layer;
}

// filter program in search window
export const filterProgramII = (keywords: string | null, data: programType[]): programType[] => {
    const layer1 = keywords && data.length ? data.filter(item => {
        const key: string = item.slug.toLowerCase().replaceAll('-', ' ');
        const keyword: string = keywords.toLowerCase();
        const tagFil: string[] = item.languages.filter(item2 => item2.toLowerCase().includes(keyword));
        return tagFil.length || key.includes(keyword)
    }) : []
    return layer1
}

// filter related program
export function filterRelatedProgram(data: programType[], currentProgramTitle: string) {
    const related = data?.length ? data.filter((item: programType) => {
        const programSlug: string[] = item.slug.split('-')
        const currentSlug: String[] = currentProgramTitle.split('-')
        return currentSlug[0] === programSlug[0] && item.slug !== currentProgramTitle
    }) : []
    return related
}

// filter good1stissue
export function filterIssue(data: issueType[], tag: string, search: string | null): issueType[] {
    search = search ? search.trim().toLowerCase() : "";
    tag = tag.trim();

    const layer = data.filter((obj) => {
        const titalCase: string[] = obj.issue_title.toLowerCase().split(" ");
        const keywords: string[] = search ? search.split(" ") : [];

        if (search) {
            if (tag !== "All") return keywords.some((str) => titalCase.includes(str) && obj.issue_labels.includes(tag));
            if (tag === "All") return keywords.some((str) => titalCase.includes(str));
        } else {
            if (tag !== "All") return obj.issue_labels.includes(tag);
            if (tag === "All") return data
        }
    });
    return layer;
}

// filter good1stissue in search window
export function filterIssueII(data: issueType[], search: string | null): issueType[] {
    search = search ? search.trim().toLowerCase() : "";

    if (search) {
        const layer = data.filter((obj) => {
            const titalCase: string[] = obj.issue_title.toLowerCase().split(" ");
            const keywords: string[] = search ? search.split(" ") : [];
            const author: string = obj.issue_author.toLowerCase();
            return keywords.some((str) => titalCase.includes(str) || obj.issue_labels.includes(str)) || keywords.some((str) => author.includes(str));
        })
        return layer.length ? layer : [];
    }
    else { return []; }
}