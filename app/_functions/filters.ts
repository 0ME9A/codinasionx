import { devProjectGitType } from "app/_types/Devs";
import { issueType } from "app/_types/Good1stIssue";
import { programType } from "app/_types/Program";
import { repoType } from "app/_types/Repos";

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// filter repositories
export function filterRepos(
  keywords: string | null,
  data: repoType[]
): repoType[] | null {
  if (!Array.isArray(data) || data.length === 0 || !keywords?.trim())
    return null;

  const filtered = data.filter((item: any) => {
    const key: string = item.name.toLocaleLowerCase();
    const keyword: string | null = keywords.toLocaleLowerCase();
    return key.includes(keyword);
  });
  return filtered.length > 0 ? filtered : null;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// filter repositories by keyword which is already in gitrepo tag section
export function filterUniqueRepos(
  data: repoType[],
  keyword: string | null
): repoType[] | null {
  if (!Array.isArray(data) || data.length === 0 || !keyword?.trim())
    return null;

  const filtered = data.filter((item: repoType) => {
    return item.topics.includes(keyword);
  });
  return filtered.length > 0 ? filtered : null;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// filter developers by role team, member, contributer
// export function filterUniqueCondinasionDevsOld(
//   data: codinasionDevApiType[],
//   keyword: string | null
// ): codinasionDevApiType[] | null {
//   if (!Array.isArray(data) || data.length === 0 || !keyword?.trim())
//     return null;

//   const filtered = data.filter((item: codinasionDevApiType) => {
//     return item.role.includes(keyword);
//   });

//   return filtered.length > 0 ? filtered : null;
// }
export function filterUniqueCondinasionDevs(
  data: string[],
  keyword: string | null
): string[] | null {
  if (!Array.isArray(data) || data.length === 0 || !keyword?.trim())
    return null;

  const filtered = data.filter((item: string) => {
    return item.includes(keyword);
  });

  return filtered.length > 0 ? filtered : null;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// filter developers by name or role which is fetched from codinasion developer api
// export function filterDevsOld(
//   keywords: string | null,
//   data: codinasionDevApiType[]
// ): codinasionDevApiType[] | null {
//   if (!Array.isArray(data) || data.length === 0 || !keywords?.trim())
//     return null;

//   const keywordList: string[] = keywords.toLowerCase().split(" ");

//   const filtered = data.filter((item: codinasionDevApiType) => {
//     const role: string = item.role.toLocaleLowerCase();
//     const name: string = item.user.login.toLocaleLowerCase();
//     return (
//       keywordList.some((keyword) => name.includes(keyword)) ||
//       keywordList.some((keyword) => role.includes(keyword))
//     );
//   });

//   return filtered.length > 0 ? filtered : null;
// }
export function filterDevs(
  keywords: string | null,
  data: string[]
): string[] | null {
  if (!Array.isArray(data) || data.length === 0 || !keywords?.trim())
    return null;

  const keywordList: string[] = keywords.toLowerCase().split(" ");

  const filtered = data.filter((item: string) => {
    return (
      keywordList.some((keyword) => item.includes(keyword))
    );
  });

  return filtered.length > 0 ? filtered : null;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// filter developers by name which is fetched from github api not codinasion developer api
export function filterProjecetDevs(
  keywords: string | null,
  data: devProjectGitType[]
): devProjectGitType[] | null {
  if (!Array.isArray(data) || data.length === 0 || !keywords?.trim())
    return null;

  const keywordList: string[] = keywords.toLowerCase().split(" ");

  const filtered = data.filter((item: devProjectGitType) => {
    const name: string = item.login.toLowerCase();
    return keywordList.some((keyword) => name.includes(keyword));
  });

  return filtered.length > 0 ? filtered : null;
}

// export const filterData = (keywords: string | null, data: devsDataType[]): devsDataType[] => {
//     const layer1 = keywords && data.length ? data.filter(item => {
//         const key = item.login.toLocaleLowerCase()
//         const keyword = keywords.toLocaleLowerCase()
//         return key.includes(keyword)
//     }) : []
//     return layer1
// }

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// filter program
export function filterProgram(
  data: programType[],
  tag: string,
  search: string | null
): programType[] | null {
  if (!Array.isArray(data) || data.length === 0) return null;

  search = search ? search.trim().toLowerCase() : "";
  tag = tag.trim();

  const filtered = data.filter((obj) => {
    // const titalCase = obj.title.toLowerCase().split(" ");
    const titalCase: string[] = obj.slug.toLowerCase().split("-");
    const keywords: string[] = search ? search.split(" ") : [];

    if (search) {
      // if (tag !== "All") return keywords.some((str) => titalCase.includes(str) && obj.tags.includes(tag));
      if (tag !== "All")
        return keywords.some(
          (str) => titalCase.includes(str) && obj.languages.includes(tag)
        );
      if (tag === "All") return keywords.some((str) => titalCase.includes(str));
    } else {
      // if (tag !== "All") return obj.tags.includes(tag);
      if (tag !== "All") return obj.languages.includes(tag);
      if (tag === "All") return data;
    }
  });
  return filtered.length > 0 ? filtered : null;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// filter program in search window
export const filterProgramII = (
  keywords: string | null,
  data: programType[]
): programType[] | null => {
  if (!Array.isArray(data) || data.length === 0 || !keywords?.trim())
    return null;

  const filtered = data.filter((item) => {
    const key: string = item.slug.toLowerCase().replaceAll("-", " ");
    const keyword: string = keywords.toLowerCase();
    const tagFil: string[] = item.languages.filter((item2) =>
      item2.toLowerCase().includes(keyword)
    );
    return tagFil.length || key.includes(keyword);
  });
  return filtered.length > 0 ? filtered : null;
};

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// filter related program
export function filterRelatedProgram(
  data: programType[],
  currentProgramTitle: string
): programType[] | null {
  if (!Array.isArray(data) || data.length === 0 || !currentProgramTitle?.trim())
    return null;

  const filtered = data?.length
    ? data.filter((item: programType) => {
        const programSlug: string[] = item.slug.split("-");
        const currentSlug: String[] = currentProgramTitle.split("-");
        return (
          currentSlug[0] === programSlug[0] && item.slug !== currentProgramTitle
        );
      })
    : [];
  return filtered.length > 0 ? filtered : null;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// filter good1stissue
export function filterIssue(
  data: issueType[],
  tag: string,
  search: string | null
): issueType[] | null {
  if (!Array.isArray(data) || data.length === 0) return null;

  search = search ? search.trim().toLowerCase() : "";
  tag = tag.trim();

  const filtered = data.filter((obj) => {
    const titalCase: string[] = obj.issue_title.toLowerCase().split(" ");
    const keywords: string[] = search ? search.split(" ") : [];

    if (search) {
      if (tag !== "All")
        return keywords.some(
          (str) => titalCase.includes(str) && obj.issue_labels.includes(tag)
        );
      if (tag === "All") return keywords.some((str) => titalCase.includes(str));
    } else {
      if (tag !== "All") return obj.issue_labels.includes(tag);
      if (tag === "All") return data;
    }
  });
  return filtered.length > 0 ? filtered : null;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// filter good1stissue in search window
export function filterIssueII(
  data: issueType[],
  search: string | null
): issueType[] | null {
  if (!Array.isArray(data) || data.length === 0 || !search?.trim()) return null;

  search = search.toLowerCase();

  const filtered = data.filter((obj) => {
    const titalCase: string[] = obj.issue_title.toLowerCase().split(" ");
    const keywords: string[] = search ? search.split(" ") : [];
    const author: string = obj.issue_author.toLowerCase();
    return (
      keywords.some(
        (str) => titalCase.includes(str) || obj.issue_labels.includes(str)
      ) || keywords.some((str) => author.includes(str))
    );
  });
  return filtered.length > 0 ? filtered : null;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
