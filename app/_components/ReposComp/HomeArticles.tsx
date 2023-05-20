"use client";
import { repositoriesProperties } from "app/_rtk/States/States";
import { useDispatch, useSelector } from "react-redux";
import { filterRepos } from "app/_functions/filters";
import { random } from "app/_functions/functions";
import { RootState } from "app/_rtk/Store/store";
import { repoType } from "app/_types/Repos";
import { useEffect, useState } from "react";
import { LIMIT } from "app/_rtk/stateType";
import BasicRepoCard from "app/_components/ReposComp/BasicRepoCard";
import NoRecord from "app/_components/Loading&ErrorComp/NoRecord";
import SHomeArticle from "../SkeletonComp/Repo/SHomeArticle";
import ArticleSection from "../LayoutsComp/ArticleSection";
import useInfinite from "app/_hooks/useInfinite";


export default function HomeArticle() {
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

    if (!isMount || status !== 200) {
        return (
            <ArticleSection >
                <SHomeArticle />
            </ArticleSection>
        )
    }

    return (
        <ArticleSection>
            {!filteredData && <NoRecord />}
            {filteredData &&
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
        </ArticleSection>
    )
}