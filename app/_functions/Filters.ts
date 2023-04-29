import { ProgramType } from "app/_types"
import { issueType } from "app/_types/Issue"
import { repoType } from "app/_types/Repos"

// filter repositories
export const filterRepos = (keywords: string | null, data: repoType[]): repoType[] | null => {
    const layer1 = keywords && data.length ? data.filter((item: any) => {
        const key = item.name.toLocaleLowerCase()
        const keyword = keywords.toLocaleLowerCase()
        return key.includes(keyword)
    }) : null
    return layer1
}

// filter program
export function filterProgram(data: ProgramType[], tag: string, search: string | null): ProgramType[] {
    search = search ? search.trim().toLowerCase() : "";
    tag = tag.trim();

    const layer = data.filter((obj) => {
        // const titalCase = obj.title.toLowerCase().split(" ");
        const titalCase = obj.slug.toLowerCase().split("-");
        const keywords = search ? search.split(" ") : [];

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
export const filterProgramII = (keywords: string | null, data: ProgramType[]): ProgramType[] | null => {
    console.log(`keywords -> ${keywords}, data -> ${data}`)
    const layer1 = keywords && data.length ? data.filter(item => {
        const key = item.slug.toLowerCase().replaceAll('-', ' ');
        const keyword = keywords.toLowerCase();
        const tagFil = item.languages.filter(item2 => item2.toLowerCase().includes(keyword));
        return tagFil.length || key.includes(keyword)
    }) : null
    return layer1
}

// filter good1stissue
export function filterIssue(data: issueType[], tag: string, search: string | null): issueType[] {
    search = search ? search.trim().toLowerCase() : "";
    tag = tag.trim();

    const layer = data.filter((obj) => {
        const titalCase = obj.issue_title.toLowerCase().split(" ");
        const keywords = search ? search.split(" ") : [];

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
export function filterIssueII(data: issueType[], search: string | null): issueType[] | null {
    search = search ? search.trim().toLowerCase() : "";

    if (search) {
        const layer = data.filter((obj) => {
            const titalCase = obj.issue_title.toLowerCase().split(" ");
            const keywords = search ? search.split(" ") : [];
            const author = obj.issue_author.toLowerCase();
            return keywords.some((str) => titalCase.includes(str) || obj.issue_labels.includes(str)) || keywords.some((str) => author.includes(str));
        })
        return layer.length ? layer : null;
    }
    else { return null;}
}