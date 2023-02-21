"use client";
import { scrollX } from "app/_framerVariants/framerVariants";
import { ImgUrl, imgUrl, random } from "app/_functions/functions";
import { fetchRepos } from "app/_functions/processFetch";
import { theContext } from "app/_context/theContext";
import { Suspense, useContext } from "react";
import { repos } from "@/data/Obj/repos";
import { motion } from "framer-motion";
import ShowoffRepoCard from "./ShowoffRepoCard";
import BasicRepoCard from "./BasicRepoCard";
import Loading from "../Loading/Loading";
import Button from "../Links/Button";

type reposType = {
  showOff: boolean;
};
export default function Repos({ showOff = false }: reposType) {
  const context = useContext(theContext);
  const {
    dispatch,
    values: {
      repos,
      repos: { data },
      showoffRepos,
    },
  } = context;

  if (showOff) {
    const filtered = showoffRepos.data.filter((item: any) => {
      // filter important repo.
      // tag words come from github repo tags section change it, but you have to also add that word in github repos as tag.
      const tag = "codinasion";
      return item.topics.includes(tag);
    });

    return filtered.length > 0 ? (
      <div className="px-2 lg:container mx-auto space-y-5">
        <Suspense>
          {filtered.slice(0, 4).map((item: any, key: number) => {
            return (
              <ShowoffRepoCard
                key={random()}
                id={key + 1}
                imgUrl={imgUrl}
                title={item.name}
                desc={item.description}
                repoUrl={item.name}
                status={{
                  forks: item.forks,
                  stars: item.stargazers_count,
                }}
                order={[2, 4]}
              />
            );
          })}
        </Suspense>
      </div>
    ) : (
      <Loading />
    );
  } else {
    return repos.data.length > 0 ? (
      <Suspense fallback={<Loading basic={true} />}>
        <div
          className="
          p-2 my-24 lg:container mx-auto space-y-5
          "
        >
          <motion.div
            className="rounded-[50px] bg-white/50 dark:bg-black/50 backdrop-blur-sm space-y-3 md:space-y-5"
            variants={scrollX(-50)}
            initial={"hidden"}
            whileInView={"show"}
          >
            {data.map((item: any) => (
              <BasicRepoCard
                key={random()}
                imgUrl={ImgUrl(item.name)}
                title={item.name}
                desc={item.description}
                repoUrl={item.name}
                status={{
                  forks: item.forks,
                  stars: item.stargazers_count,
                }}
              />
            ))}
          </motion.div>
          <motion.div
            variants={scrollX(50)}
            initial={"hidden"}
            whileInView={"show"}
          >
            <Button val={{ value: repos, dispatch }} fun={fetchRepos}>
              Expend...
            </Button>
          </motion.div>
        </div>
      </Suspense>
    ) : (
      <Loading />
    );
  }
}
