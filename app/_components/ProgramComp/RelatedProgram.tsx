"use client";
import { filterRelatedProgram } from "app/_functions/Filters";
import { programType, } from "app/_types/Program";
import { random } from "app/_functions/functions";
import { RootState } from "../RTK/Store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProgramCardSkeleton from "../Skeleton/Program/ProgramCardSkeleton";
import ProgramCard from "./ProgramCard";
import Box from "../LayoutsComp/Box";

export default function RelatedProgram({ data }: { data: programType }) {
    const { data: rData, status } = useSelector((state: RootState) => state.counter.program)
    const i: number[] = Array.from(Array(4).keys());
    const [isMount, setMount] = useState(false);
    const filteredRelated = status === 200 ? filterRelatedProgram(rData, data.slug) : []

    useEffect(() => setMount(true), [])

    if (!isMount) return (
        <Box title={"Explore more"} style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50`}>
            <div className="grid md:grid-cols-2">{i.map(() => <ProgramCardSkeleton key={random()} />)}</div>
        </Box>
    )

    return <div className=" lg:container mx-auto p-2">
        <Box title={"Explore more"} style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50`}>
            <div className="grid md:grid-cols-2">
                {filteredRelated.length ? filteredRelated.slice(0, 4).map((item: programType) =>
                    <ProgramCard
                        key={random()}
                        parentPath={"/program/"}
                        style={`!border-transparent rounded-xl hover:shadow-lg hover:shadow-gray-500/20`}
                        programData={item} />
                ) : i.map(() => <ProgramCardSkeleton key={random()} />)
                }
            </div>
        </Box>
    </div>
}