import { Url } from "next-router-mock";

export default async function getInitialApi() {
  const urls = {
    repositories: process.env.REPOSITORIESURL || "",
    developers: process.env.DEVELOPERSURL || "",
    programs: process.env.PROGRAMSURL || "",
  };

  return await Promise.all([
    fetch(urls.programs),
    fetch(urls.repositories),
    fetch(urls.developers),
  ]);
}

const fetchApi = async (url: string) => {
  try {
    const req = await fetch(url);
    const res = await req.json();
    return { data: res, status: req.status, error: false };
  } catch (error) {
    return { data: [], status: 404, error: true };
  }
};

export { fetchApi };
