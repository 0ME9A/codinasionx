"use client";
import { programType } from "app/_types/Program";
import { useEffect, useState } from "react";
import AsideContributors from "./AsideContributors";
import ProgramAsideSk from "../Skeleton/Program/ProgramAsideSk";
import GitHubCard from "../CommonComp/GitHubCard";
import PSolutions from "./PSolutions";
import PUpdated from "./PUpdated";

export default function ProgramAside({ data }: { data: programType }) {
    const { contributors, languages, track_id } = data;
    const [isMount, setMount] = useState(false);

    useEffect(() => setMount(true), [])

    if (!isMount) return <ProgramAsideSk />

    return (
        <div className={`relative right-0 lg:sticky lg:top-32 pt-4 lg:pt-0 flex flex-col gap-2 w-full lg:w-[600px] h-fit `}>
            <PSolutions languages={languages} track_id={track_id} />
            <AsideContributors contributors={contributors}/>
            <PUpdated last_updated={data.last_updated} />
            <GitHubCard repo={"codinasion/program"} />
        </div >
    )
}