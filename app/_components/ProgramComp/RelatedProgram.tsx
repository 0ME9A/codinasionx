"use client";
import { activeProgramType, ProgramType } from "app/_types/Program";
import { random } from "app/_functions/functions";
import { RootState } from "../RTK/Store/store";
import { useSelector } from "react-redux";
import ProgramCardSkeleton from "../Skeleton/Program/ProgramCardSkeleton";
import ProgramCard from "./ProgramCard";
import Box from "../LayoutsComp/Box";

export default function RelatedProgram({ data }: { data: activeProgramType }) {
    const program = useSelector((state: RootState) => state.counter.program)
    const activeProgramSlug: string[] = data && data.slug.split('-')
    const i: number[] = Array.from(Array(4).keys());

    const relatedProgram: ProgramType[] = program.data.length ? program.data.filter((item: ProgramType) => {
        const programSlug: string[] = item.slug.split('-')
        return activeProgramSlug[0] === programSlug[0] && item.slug !== data.slug
    }) : []

    return <div className=" lg:container mx-auto p-2">
        <Box title={"Explore more"} style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50`}>
            <div className="grid md:grid-cols-2">
                {
                    relatedProgram.length ? relatedProgram.slice(0, 4).map((item: ProgramType) =>
                        <ProgramCard
                            key={random()}
                            ProgramData={item}
                            parentPath={"/program/"}
                            style={`!border-transparent rounded-xl hover:shadow-lg hover:shadow-gray-500/20`} />
                    ) : i.map(() => <ProgramCardSkeleton key={random()} />)
                }
            </div>
        </Box>
    </div>
}