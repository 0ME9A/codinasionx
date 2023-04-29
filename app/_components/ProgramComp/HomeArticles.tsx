"use client";
import { dateFunc, random } from "app/_functions/functions";
import { programProperties } from "../RTK/States/States";
import { useDispatch, useSelector } from "react-redux";
import { filterProgram } from "app/_functions/Filters";
import { RootState } from "../RTK/Store/store";
import { Suspense, useEffect } from "react";
import { ProgramType } from "app/_types";
import ProgramCardSkeleton from "app/_components/Skeleton/Program/ProgramCardSkeleton";
import useInfinite from "app/_hooks/useInfinite";
import NoRecord from "../SearchComp/NoRecord";
import dynamic from "next/dynamic";
const ProgramCard = dynamic(() => import("./ProgramCard"), { loading: () => <ProgramCardSkeleton /> });


export default function HomeArticles() {
    const dispatch = useDispatch();
    const i: number[] = Array.from(Array(10).keys());
    const search = useSelector((state: RootState) => state.counter.search);
    const program = useSelector((state: RootState) => state.counter.program);
    const programProp = useSelector((state: RootState) => state.counter.programProperties);
    const filtered: ProgramType[] = program.status === 200 ? filterProgram(program.data, programProp.tag, search.keywords) : []


    useEffect(() => { dispatch(programProperties({ type: "LIMIT", value: 1 })) }, [programProp.tag, search.keywords]);
    useInfinite({ funcVal: programProperties({ type: "LIMIT", value: programProp.limit + 1 }), funcCall: dispatch });

    return (
        <div className={`w-full min-h-screen text-white rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-sm overflow-hidden`}>
            <Suspense fallback={i.map(() => <ProgramCardSkeleton key={random()} />)}>
                {
                    filtered.length ? filtered.slice(0, programProp.limit * 10).map((item: any) =>
                        <ProgramCard
                            key={random()}
                            parentPath={`/program/`}
                            ProgramData={{
                                slug: item.slug,
                                // title: item.title,
                                title: item.slug,
                                track_id: item.track_id,
                                // tags: [...item.tags],
                                languages: [...item.languages],
                                contributors: [...item.contributors],
                                last_updated: dateFunc(item.last_updated)
                            }} />
                    ) : <NoRecord />
                }
            </Suspense>
        </div>
    );
}
