"use client";
import { callImg, random } from "app/_functions/functions";
import { repoType } from "app/_types/Repos";
import ShowoffRepo from "app/_components/Skeleton/Repo/ShowoffRepo";
import ShowoffRepoCard from "./ShowoffRepoCard";
import { useEffect, useState } from "react";

export default function ShowoffRepos({ api }: { api: { data: repoType[], status: number } }) {
  const i = Array.from(Array(4).keys());
  const { data, status } = api;
  const [isMount, setMount] = useState(false);

  const filtered =
    data.length && status === 200
      ? data.filter((item: repoType) => {
        // filter important repo.
        // tag words come from github repo tags section change it, but you have to also add that word in github repos as tag.
        const tag = "codinasion";
        return item.topics.includes(tag);
      })
      : [];

  useEffect(() => setMount(true), [])


  if (isMount) {
    return (
      <div className="px-2 lg:container mx-auto space-y-8 sm:space-y-5">
        {filtered.length
          ? filtered.slice(0, 4).map((item: repoType, key: number) => (
            <ShowoffRepoCard
              key={random()}
              id={key + 1}
              imgUrl={callImg(item.name)}
              title={item.name}
              desc={item.description}
              repoUrl={item.name}
              status={{
                forks: item.forks,
                stars: item.stargazers_count,
              }}
              order={[2, 4]}
            />
          ))
          : i.map((item) => (<ShowoffRepo key={random()} id={item + 1} order={[2, 4]} />))}
      </div>
    );
  } else {
    return (
      <div className="px-2 lg:container mx-auto space-y-8 sm:space-y-5">
        {i.map((item) => (<ShowoffRepo key={random()} id={item + 1} order={[2, 4]} />))}
      </div>
    );
  }
}
