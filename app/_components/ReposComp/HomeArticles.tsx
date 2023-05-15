"use client";
import { repositoriesProperties } from "app/_components/RTK/States/States";
import { RootState } from "app/_components/RTK/Store/store";
import { useDispatch, useSelector } from "react-redux";
import { filterRepos } from "app/_functions/Filters";
import { random } from "app/_functions/functions";
import { useEffect, useState } from "react";
import { repoType } from "app/_types/Repos";
import { LIMIT } from "../RTK/stateType";
import ReposSkeleton from "app/_components/Skeleton/Repo/ReposSkeleton";
import BasicRepoCard from "app/_components/ReposComp/BasicRepoCard";
import NoRecord from "app/_components/CommonComp/NoRecord";
import useInfinite from "app/_hooks/useInfinite";


export default function HomeArticles() {
    const dispatch = useDispatch()
    const i = Array.from(Array(5).keys());
    const search = useSelector((state: RootState) => state.counter.search)
    const limit = useSelector((state: RootState) => state.counter.repositoriesProperties.limit)
    const { data, status } = useSelector((state: RootState) => state.counter.repositories)
    const [isMount, setMount] = useState(false);
    const filteredData = search.keywords ? filterRepos(search.keywords, data) : data;

    useInfinite({
        funcVal: repositoriesProperties({
            type: LIMIT, value: limit + 1
        }),
        funcCall: dispatch
    })
    useEffect(() => setMount(true), [])

    if (!isMount) return (
        <div className={`w-full min-h-screen text-white rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-sm overflow-hidden mt-20`}>
            {i.map(() => <ReposSkeleton key={random()} />)}
        </div>
    )

    return (
        <div className={`w-full min-h-screen text-white rounded-2xl lg:rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-sm overflow-hidden`}>
            {status !== 200 && i.map(() => <ReposSkeleton key={random()} />)}
            {status === 200 && !filteredData.length && <NoRecord />}
            {status === 200 && filteredData.length > 0 &&
                filteredData.slice(0, limit * 10).map((item: repoType) => (
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
        </div>
    )

}