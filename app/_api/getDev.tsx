import { Url } from "next-router-mock";

export default async function getDev(dev: string) {
    const url: Url = `https://api.github.com/users/${dev}`;
    return await fetch(url)
}
