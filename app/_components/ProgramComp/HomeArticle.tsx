"use client";
import { programProperties } from "app/_rtk/States/States";
import { useDispatch, useSelector } from "react-redux";
import { filterProgram } from "app/_functions/filters";
import { random } from "app/_functions/functions";
import { programType } from "app/_types/Program";
import { RootState } from "app/_rtk/Store/store";
import { useEffect, useState } from "react";
import { LIMIT } from "app/_rtk/stateType";
import SHomeArticle from "app/_components/SkeletonComp/Program/SHomeArticle";
import ArticleSection from "../LayoutsComp/ArticleSection";
import NoRecord from "../Loading&ErrorComp/NoRecord";
import useInfinite from "app/_hooks/useInfinite";
import ProgramCard from "./ProgramCard";


export default function HomeArticle() {
    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.counter.search);
    const { data, status } = useSelector((state: RootState) => state.counter.program);
    const programProp = useSelector((state: RootState) => state.counter.programProperties);
    const filtered: programType[] | null = search ? filterProgram(data, programProp.tag, search.keywords) : data
    const [isMount, setMount] = useState(false)

    useEffect(() => { dispatch(programProperties({ type: LIMIT, value: 1 })) }, [programProp.tag, search.keywords]);
    useInfinite({ funcVal: programProperties({ type: LIMIT, value: programProp.limit + 1 }), funcCall: dispatch });
    useEffect(() => setMount(true), []);

    if (!isMount || status !== 200) return (
        <ArticleSection>
            <SHomeArticle />
        </ArticleSection>
    )

    return (
        <ArticleSection>
            {!filtered && <NoRecord />}
            {filtered &&
                filtered.slice(0, programProp.limit * 10).map((item: programType) =>
                    <ProgramCard
                        key={random()}
                        parentPath={`/program/`}
                        programData={item}
                    />
                )}
        </ArticleSection>
    );
}
