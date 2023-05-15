"use client";
import { RootState } from "app/_components/RTK/Store/store";
import { codinasionDevApiType } from "app/_types/Devs";
import { filterDevs } from "app/_functions/Filters";
import { random } from "app/_functions/functions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DevCardSkeleton from "app/_components/Skeleton/Devs/DevCardSkeleton";
import DevCard from "app/_components/DevsComp/Card/DevCard";
import NoRecord from "app/_components/SearchComp/NoRecord";
import useInfinite from "app/_hooks/useInfinite";
import Container from "../LayoutsComp/Container";


export default function AllDevs() {
    const i = Array.from(Array(30).keys());
    const [limit, setLimit] = useState<number>(1)
    const [isMount, setMount] = useState(false)
    const { data, status } = useSelector((state: RootState) => state.counter.developers)
    const search = useSelector((state: RootState) => state.counter.search)
    const filteredDevs = search.keywords ? filterDevs(search.keywords, data) : data;

    useInfinite({ funcVal: limit + 1, funcCall: setLimit })
    useEffect(() => setMount(true), []);

    if (!isMount) return (
        <div className="lg:container mx-auto pb-2 lg:py-10">
            <div className="w-full p-2 md:p-5 mt-2 rounded-3xl text-black dark:text-white bg-white/50 dark:bg-black/50 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12">
                {i.map(() => <DevCardSkeleton key={random()} />)}
            </div>
        </div>
    )

    return (
        <div className="lg:container mx-auto p-2 min-h-[50vh]">
            <div className="w-full p-2 md:p-5 rounded-2xl lg:rounded-3xl text-black dark:text-white bg-white/50 dark:bg-black/50 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12">
                {status !== 200 && i.map(() => <DevCardSkeleton key={random()} />)}
                {status === 200 && !filteredDevs.length && <NoRecord style="!col-span-full" />}
                {status === 200 && filteredDevs.length > 0 &&
                    filteredDevs.slice(0, 50 * limit).map((item: codinasionDevApiType) => (
                        <DevCard
                            key={random()}
                            data={{
                                name: item.user.login,
                                avatar: `https://github.com/${item.user.login}.png`,
                                role: item.role
                            }} />
                    ))
                }
            </div>
        </div>
    );
}