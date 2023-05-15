"use client";
import { programProperties } from "../RTK/States/States";
import { useDispatch, useSelector } from "react-redux";
import { filterProgram } from "app/_functions/Filters";
import { random } from "app/_functions/functions";
import { programType } from "app/_types/Program";
import { RootState } from "../RTK/Store/store";
import { useEffect, useState } from "react";
import { LIMIT } from "../RTK/stateType";
import ProgramCardSkeleton from "app/_components/Skeleton/Program/ProgramCardSkeleton";
import useInfinite from "app/_hooks/useInfinite";
import NoRecord from "../CommonComp/NoRecord";
import ProgramCard from "./ProgramCard";


export default function HomeArticles() {
    const dispatch = useDispatch();
    const i: number[] = Array.from(Array(10).keys());
    const search = useSelector((state: RootState) => state.counter.search);
    const { data, status } = useSelector((state: RootState) => state.counter.program);
    const programProp = useSelector((state: RootState) => state.counter.programProperties);
    const filtered: programType[] = search ? filterProgram(data, programProp.tag, search.keywords) : data
    const [isMount, setMount] = useState(false)

    useEffect(() => { dispatch(programProperties({ type: LIMIT, value: 1 })) }, [programProp.tag, search.keywords]);
    useInfinite({ funcVal: programProperties({ type: LIMIT, value: programProp.limit + 1 }), funcCall: dispatch });
    useEffect(() => setMount(true), []);

    if (!isMount) return (
        <div className={`w-full min-h-screen text-white rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-sm overflow-hidden shadow-xl shadow-gray-500/10`}>
            {i.map(() => <ProgramCardSkeleton key={random()} />)}
        </div>
    )

    return (
        <div className={`w-full min-h-screen text-white rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-sm overflow-hidden shadow-xl shadow-gray-500/10`}>
            {status !== 200 && i.map(() => <ProgramCardSkeleton key={random()} />)}
            {status === 200 && !filtered.length && <NoRecord />}
            {status === 200 && filtered.length &&
                filtered.slice(0, programProp.limit * 10).map((item: programType) =>
                    <ProgramCard
                        key={random()}
                        parentPath={`/program/`}
                        programData={item}
                    />
                )}
        </div>
    );
}
