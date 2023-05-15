import { Url } from "next-router-mock";

export default async function getDev(program: string) {
    const url: Url = `https://api.codinasion.org/program/${program}`;
    return await fetch(url, { next: { revalidate: 60 }, });
}
