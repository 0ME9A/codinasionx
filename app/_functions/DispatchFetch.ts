// Not in use 
import { ProgramType } from "app/_types";
import { fetchData } from "./functions";

export async function fetchDaves(devs: any, dispatch: any) {
  const url: string = `https://api.github.com/repos/codinasion/program/contributors?page=${devs.page + 1
    }`;
  const data = await fetchData(url);
  data &&
    dispatch({
      type: "DEVS",
      payload: {
        data,
      },
    });
}
export async function fetchRepos(repos: any, dispatch: any) {
  const url: string = `https://api.github.com/orgs/codinasion/repos?per_page=5&page=${repos.page + 1
    }`;
  const data = await fetchData(url);
  data &&
    dispatch({
      type: "REPOS",
      payload: {
        data,
      },
    });
}
export async function fetchShowoffRepos(dispatch: any) {
  const url: string = `https://api.github.com/orgs/codinasion/repos?per_page=50`;
  const data = await fetchData(url);
  data &&
    dispatch({
      type: "SHOWOFFREPOS",
      payload: {
        data,
      },
    });
}
export async function dispatchProgram(dispatch: any, data: ProgramType[], status: number) {
  status === 200 &&
    dispatch({
      type: "PROGRAM",
      payload: {
        data,
        status
      },
    });
}
export async function dispatchProgramTag(dispatch: any, payload: string) {
  dispatch({
    type: "PROGRAMTAG",
    payload: { tag: payload },
  });
}
