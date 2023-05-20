"use client";
import { dummayArray, random } from "app/_functions/functions";
import { codinasionDevApiType } from "app/_types/Devs";
import { filterDevs } from "app/_functions/filters";
import { RootState } from "app/_rtk/Store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DevCard from "app/_components/DevelopersComp/Card/DevCard";
import SDevCard from "app/_components/SkeletonComp/Devs/SDevCard";
import NoRecord from "app/_components/Loading&ErrorComp/NoRecord";
import ArticleSection from "../LayoutsComp/ArticleSection";
import useInfinite from "app/_hooks/useInfinite";


export default function DevelopersSection() {
    const i = dummayArray(30)
    const [limit, setLimit] = useState<number>(1);
    const [isMount, setMount] = useState(false);
    const { data, status } = useSelector((state: RootState) => state.counter.developers);
    const search = useSelector((state: RootState) => state.counter.search);
    const filteredDevs = search.keywords ? filterDevs(search.keywords, data) : data;

    useInfinite({ funcVal: limit + 1, funcCall: setLimit });
    useEffect(() => setMount(true), []);

    if (!isMount || status !== 200) {
        return (
            <ArticleSection style="!bg-transparent !min-h-fit p-2 xl:container mx-auto !py-20">
                <div className="p-2 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12 rounded-2xl lg:rounded-3xl bg-too-light dark:bg-too-dark">
                    {i.map(() => <SDevCard key={random()} />)}
                </div>
            </ArticleSection>
        )
    }

    return (
        <ArticleSection style="!bg-transparent !min-h-fit px-2 xl:container mx-auto !py-20">
            <article className="w-full p-2 md:p-5 rounded-2xl lg:rounded-3xl text-black dark:text-white bg-white/50 dark:bg-black/50 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12">
                {!filteredDevs && <NoRecord style="!col-span-full" />}
                {filteredDevs &&
                    filteredDevs.slice(0, 50 * limit).map((item: codinasionDevApiType) => (
                        <DevCard
                            key={random()}
                            data={{
                                name: item.user.login,
                                avatar: `https://github.com/${item.user.login}.png`,
                                role: item.role
                            }}
                        />
                    ))
                }
            </article>
        </ArticleSection>
    );
}