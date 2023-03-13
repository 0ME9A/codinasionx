"use client";
import { compareArrays, dateFunc, random } from "app/_functions/functions";
import { theContext } from "app/_context/theContext";
import { ProgramType } from "app/_types";
import { useContext } from "react";
import ProgramCardSkeleton from "app/_components/Skeleton/Program/ProgramCard"
import useInfinite from "app/_hooks/useInfinite";
import dynamic from "next/dynamic";
const ProgramCard = dynamic(() => import("./ProgramCard"), { loading: () => <ProgramCardSkeleton /> })

export default function HomeArticles() {
    const i: number[] = Array.from(Array(10).keys());
    const context = useContext(theContext);
    const { program: {
        data,
        status,
        compStatus: {
            tag,
            limit,
            search,
        }
    } } = context.values;

    const dispatch: any = context.dispatch;

    let filterBySearch: ProgramType[] = [];

    if (search) {
        const searchSplit: string[] = search?.split(" ") || [];
        const searchFinalKeyword = searchSplit.filter((item) => item.length > 0)
        filterBySearch = searchFinalKeyword.length > 0 ? data.filter((item: any) =>
            searchFinalKeyword.some((str) => item.title.toLowerCase().includes(str.toLowerCase()))
        ) : [];
    }

    const filterByTag: ProgramType[] = tag !== "All" ? data.filter((item: any) => item.tags.includes(tag)) : [];
    const filtersApplied = compareArrays(filterByTag, filterBySearch)

    const finalData: ProgramType[] = filtersApplied.length > 0 ? filtersApplied : data
    useInfinite({ funcVal: { type: "PROGRAMLIMIT", payload: limit + 1 }, funcCall: dispatch })

    return (
        <div className={`w-full min-h-screen text-white rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-sm overflow-hidden`}>
            {status === 200 ?
                finalData.slice(0, limit * 10).map((item: any) =>
                    <ProgramCard
                        key={random()}
                        parentPath={`/program/`}
                        ProgramData={{
                            slug: item.slug,
                            title: item.title,
                            trackId: item.trackId,
                            tags: [...item.tags],
                            contributors: [...item.contributors],
                            latestUpdateDate: dateFunc(item.latestUpdateDate)
                        }} />
                ) : i.map(() => <ProgramCardSkeleton key={random()} />)
            }
        </div>
    );
}
