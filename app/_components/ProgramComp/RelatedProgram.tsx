"use client";
import { dummyArray, random } from "app/_functions/functions";
import { filterRelatedProgram } from "app/_functions/filters";
import { programType, } from "app/_types/Program";
import { RootState } from "app/_rtk/Store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SHomeArticle from "../SkeletonComp/Program/SHomeArticle";
import NoRecord from "../Loading&ErrorComp/NoRecord";
import ProgramCard from "./ProgramCard";
import Box from "../LayoutsComp/Box";


export default function RelatedProgram({ data }: { data: programType }) {
    const { data: rData, status } = useSelector((state: RootState) => state.counter.program)
    const i: number[] = dummyArray(4);
    const [isMount, setMount] = useState(false);
    const filtered = filterRelatedProgram(rData, data.slug)

    useEffect(() => setMount(true), [])

    if (!isMount || status !== 200) {
        return (
            <Box title={"Explore more"} style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50`}>
                <div className="grid md:grid-cols-2">
                    {i.map(() => <SHomeArticle key={random()} />)}
                </div>
            </Box>
        )
    }

    return (
        <section className=" lg:container mx-auto p-2">
            <Box title={"Explore more"} style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50`}>
                <ul className="grid md:grid-cols-2">
                    {!filtered && <NoRecord text="No Related Program Found." style="col-span-full"/>}
                    {filtered && filtered.slice(0, 4).map((item: programType) =>
                        <li key={random()}>
                            <ProgramCard
                                parentPath={"/program/"}
                                style={`!border-transparent rounded-xl hover:shadow-lg hover:shadow-gray-500/20`}
                                programData={item}
                            />
                        </li>
                    )}
                </ul>
            </Box>
        </section>
    )
}