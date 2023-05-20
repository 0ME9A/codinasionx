"use client";
import { programApiType } from "app/_types/Program";
import { useEffect, useState } from "react";
import ProgramAsideSk from "app/_components/SkeletonComp/Program/SProgramAside";
import Aside from "app/_components/LayoutsComp/Aside";
import GitHubCard from "../../CommonComp/GitHubCard";
import AsideContributors from "../AsideContributors";
import PSolutions from "../PSolutions";
import PUpdated from "../PUpdated";

export default function ProgramAside({ api: { data, status } }: programApiType) {
    const { contributors, languages, track_id } = data;
    const [isMount, setMount] = useState(false);

    useEffect(() => setMount(true), [])

    if (!isMount || status !== 200) {
        return (
            <Aside>
                <ProgramAsideSk />
            </Aside>
        )
    }

    return (
        <Aside>
            <PSolutions languages={languages} track_id={track_id} />
            <AsideContributors contributors={contributors} />
            <PUpdated last_updated={data.last_updated} />
            <GitHubCard repo={"codinasion/program"} />
        </Aside >
    )
}