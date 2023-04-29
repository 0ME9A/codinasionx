import { ProgramType } from "app/_types";
import { objectWithTagsType, ResponseData, Tag, TagCount, tagCountType } from "app/_types/_functionsType";

export async function fetchData(url: string): Promise<ResponseData> {
  try {
    const fetchData: Response = await fetch(url);
    if (fetchData.status === 200) {
      const res: string[] = await fetchData.json();
      return { data: res, status: fetchData.status };
    }
    return { data: [], status: 404 };
  } catch (error) {
    console.log("Error code: FD0000X");
    return { data: [], status: 500 };
  }
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function dateFunc(date: number | string | Date): string {
  const newDate: Date = new Date(date);
  return newDate.toDateString();
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function checkNull(parent: any, child: string): string | null {
  return parent ? parent[child] : null;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export default function setThemeFun(dispatch: any) {
  switch (localStorage.getItem("theme")) {
    case null || "light":
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      dispatch({ type: "THEME", payload: "dark" });
      break;
    default:
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      dispatch({ type: "THEME", payload: "light" });
      break;
  }
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function isValidURL(str: string): boolean {
  var pattern: RegExp = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function random(): string {
  const characters: string = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength: number = characters.length;
  let result: string = "";
  for (var i: number = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function callImg(repoName?: string): string {
  return repoName
    ? `https://raw.githubusercontent.com/0ME9A/screenshots/main/${repoName}.png`
    : `https://images.unsplash.com/photo-1551482850-d649f078ed01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function countTag(objectWithTags: objectWithTagsType[]) {
  const tagCount: tagCountType = {};
  objectWithTags.forEach((obj: objectWithTagsType) => {
    // obj.tags.forEach((tag: string) => {
    obj.languages.forEach((tag: string) => {
      if (tag in tagCount) {
        tagCount[tag]++;
      } else {
        tagCount[tag] = 1;
      }
    });
  });
  return tagCount;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function tagArray(obj: TagCount | null): Tag[] {
  const langArray: Tag[] = [];
  if (obj) {
    for (let key in obj) {
      langArray.push({ language: key, program: obj[key] });
    }
  }

  return langArray;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function compareArrays(arr1: ProgramType[], arr2: ProgramType[]): ProgramType[] {
  const combinedArray: ProgramType[] = arr1.concat(arr2);

  const uniqueArray = combinedArray.reduce((accumulator: ProgramType[], current: ProgramType) => {
    const existingObj = accumulator.find((obj: ProgramType) => obj.title === current.title);
    if (!existingObj) accumulator.push(current);

    return accumulator;
  }, []);
  return uniqueArray;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export type projectPathType = {
  name: string;
  slug: string;
  active: boolean;
}[]
export function projectPath(path: string[]): projectPathType {
  let newPath = []
  for (let i = 0; i < path.length; i++) {
    newPath.push({ name: path[i], slug: `/${path.slice(0, i + 1).toString().replaceAll(',', '/')}`, active: path.length !== i + 1 })
  }
  return newPath;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function clipBoard(text: string): boolean {
  const elem: HTMLTextAreaElement = document.createElement('textarea');
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
  return true
}