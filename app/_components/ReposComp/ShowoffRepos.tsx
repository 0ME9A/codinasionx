"use client";
import { callImg, random } from "app/_functions/functions";
import { useContext } from "react";
import ShowoffRepo from "app/_components/Skeleton/Repo/ShowoffRepo";
import ShowoffRepoCard from "./ShowoffRepoCard";

export default function ShowoffRepos() {
  const i = Array.from(Array(4).keys());
  const status = 200;
  const data:any = ['a', 'b', 'c', 'd']

  // const filtered =
  //   status === 200
  //     ? data.filter((item: any) => {
  //         // filter important repo.
  //         // tag words come from github repo tags section change it, but you have to also add that word in github repos as tag.
  //         const tag = "codinasion";
  //         return item.topics.includes(tag);
  //       })
  //     : [];

  return (
    <div className="px-2 lg:container mx-auto space-y-8 sm:space-y-5">
      {status === 200
        ? data.slice(0, 4).map((item: any, key: number) => (
            <ShowoffRepoCard
              key={random()}
              id={key + 1}
              imgUrl={callImg()}
              title={'item.name'}
              desc={'item.description'}
              repoUrl={'item.name'}
              // status={{
              //   forks: item.forks,
              //   stars: item.stargazers_count,
              // }}
              status={{
                forks: 200,
                stars: 30,
              }}
              order={[2, 4]}
            />
          ))
        : i.map((item) => (
            <ShowoffRepo key={random()} id={item + 1} order={[2, 4]} />
          ))}
    </div>
  );
}
