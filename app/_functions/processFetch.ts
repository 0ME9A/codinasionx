import { fetchData } from "./functions";

export async function fetchDaves(devs: any, dispatch: any) {
  const url: string = `https://api.github.com/repos/codinasion/program/contributors?page=${
    devs.page + 1
  }`;
  const data = await fetchData(url);
  data &&
    dispatch({
      type: "DEVS",
      payload: {
        data,
        page: devs.page + 1,
      },
    });
  console.log('from devs --', data)
}
export async function fetchRepos(repos: any, dispatch: any) {
  const url: string = `https://api.github.com/orgs/codinasion/repos?per_page=5&page=${
    repos.page + 1
  }`;
  const data = await fetchData(url);
  data &&
    dispatch({
      type: "REPOS",
      payload: {
        data,
        page: repos.page + 1,
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
  // console.log("function call- showoffrepos");
}