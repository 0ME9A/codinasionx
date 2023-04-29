"use client";
import { repositoriesProperties } from "app/_components/RTK/States/States";
import { RootState } from "app/_components/RTK/Store/store";
import { useDispatch, useSelector } from "react-redux";
import { filterRepos } from "app/_functions/Filters";
import { random } from "app/_functions/functions";
import { repoType } from "app/_types/Repos";
import { Suspense } from "react";
import BasicRepoCard from "app/_components/ReposComp/BasicRepoCard";
import GitHubCard from "app/_components/CommonComp/GitHubCard";
import CardSkeleton from "app/_components/Skeleton/Repo/Card";
import useInfinite from "app/_hooks/useInfinite";


export default function Page() {
  const dispatch = useDispatch()
  const i = Array.from(Array(5).keys());
  const search = useSelector((state: RootState) => state.counter.search)
  const data = useSelector((state: RootState) => state.counter.repositories.data)
  const properties = useSelector((state: RootState) => state.counter.repositoriesProperties)
  const filteredData= filterRepos(search.keywords, data)
  useInfinite({ funcVal: repositoriesProperties({ type: "LIMIT", value: properties.limit + 1 }), funcCall: dispatch })

  return (
    <div className={"flex lg:container mx-auto p-2 gap-3 relative"}>
      <div className={`w-full min-h-screen text-white rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-sm overflow-hidden `}>
        <Suspense fallback={i.map(() => <CardSkeleton key={random()} />)}>
        {!filteredData &&
            data.slice(0, properties.limit * 10).map((item: repoType) => (
              <BasicRepoCard
                key={random()}
                title={item.name}
                desc={item.description}
                repoUrl={item.name}
                status={{
                  forks: item.forks,
                  stars: item.stargazers_count,
                }} />
            ))
          }
          {filteredData &&
            filteredData.length &&
            filteredData.slice(0, properties.limit * 10).map((item: repoType) => (
              <BasicRepoCard
                key={random()}
                title={item.name}
                desc={item.description}
                repoUrl={item.name}
                status={{
                  forks: item.forks,
                  stars: item.stargazers_count,
                }} />
            ))}
        </Suspense>
      </div>
      <div
        className={`fixed top-28 right-0 lg:sticky lg:top-32 max-w-[500px] px-2 pt-4 lg:pt-0 lg:px-0 lg:block w-full lg:w-[600px] bg-gray-500/50 backdrop-blur-sm lg:bg-transparent h-full lg:h-fit origin-top-right scale-y-0 lg:!scale-y-100 opacity-0 lg:!opacity-100`}
        style={{ transform: `scaleY(${properties.aside ? 1 : 0})`, opacity: properties.aside ? 1 : 0 }}>
        <div className="rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 ">
          <GitHubCard repo={"codinasion/program"} />
        </div>
      </div >
    </div>
  );
}