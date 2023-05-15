"use client";
import { devProjectGitApiType, devProjectGitType } from "app/_types/Devs";
import { filterProjecetDevs } from "app/_functions/Filters";
import { random } from "app/_functions/functions";
import { RootState } from "../RTK/Store/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import DevCardSkeleton from "app/_components/Skeleton/Devs/DevCardSkeleton";
import DevCard from "app/_components/DevsComp/Card/DevCard";
import useInfinite from "app/_hooks/useInfinite";
import NoRecord from "../SearchComp/NoRecord";


export default function kProjectDevs({ api }: { api: devProjectGitApiType }) {
    const i = Array.from(Array(5).keys());
    const [limit, setLimit] = useState<number>(1);
    const search = useSelector((state: RootState) => state.counter.search)
    const { data, status } = api;
    const filteredProjectDev = search.keywords ? filterProjecetDevs(search.keywords, data) : data

    useInfinite({ funcVal: limit + 1, funcCall: setLimit })

    return (
        <div className="lg:container mx-auto p-2 min-h-[50vh]">
            <div className="w-full p-2 md:p-5 rounded-2xl lg:rounded-3xl text-black dark:text-white bg-white/50 dark:bg-black/50 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12">
                {status !== 200 && i.map(() => <DevCardSkeleton key={random()} />)}
                {status === 200 && !filteredProjectDev.length && <NoRecord style="!col-span-full" />}
                {status === 200 && filteredProjectDev.length > 0 &&
                    filteredProjectDev.slice(0, 50 * limit).map((item: devProjectGitType) => (
                        <DevCard
                            key={random()}
                            data={{
                                name: item.login,
                                avatar: `https://github.com/${item.login}.png`,
                                role: "contributor"
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}
