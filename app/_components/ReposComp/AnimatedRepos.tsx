"use client";
import { callImg, random } from "app/_functions/functions";
import { repoType } from "app/_types/Repos";
import { useEffect, useState } from "react";
import ShowoffRepo from "app/_components/Skeleton/Repo/ShowoffRepo";
import ShowoffRepoCard from "./AnimatedRepoCard";

export default function AnimatedRepos({ api }: { api: { data: repoType[], status: number } }) {
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
      <div className="p-2 lg:container mx-auto grid md:grid-cols-2 justify-center items-start gap-4 md:gap-6 lg:gap-10">
        <div className="grid gap-4 md:gap-6 lg:gap-10">
          {
            filtered.slice(0, 2).map((item: repoType, key: number) => (
              <ShowoffRepoCard
                key={random()}
                imgUrl={callImg(item.name)}
                title={item.name}
                desc={item.description}
                repoUrl={item.name}
                status={{
                  forks: item.forks,
                  stars: item.stargazers_count,
                }}
              />
            ))
          }
        </div>
        <div className="grid gap-4 md:gap-6 lg:gap-10 md:pt-[50%]">
          {
            filtered.slice(2, 4).map((item: repoType, key: number) => (
              <ShowoffRepoCard
                key={random()}
                imgUrl={callImg(item.name)}
                title={item.name}
                desc={item.description}
                repoUrl={item.name}
                status={{
                  forks: item.forks,
                  stars: item.stargazers_count,
                }}
              />
            ))
          }
        </div>
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
