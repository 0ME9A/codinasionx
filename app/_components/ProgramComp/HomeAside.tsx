"use client";
import { RootState } from "app/_rtk/Store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SHomeAside from "../SkeletonComp/Program/SHomeAside";
import GitHubCard from "../CommonComp/GitHubCard";
import Aside from "../LayoutsComp/Aside";
import ProgramTags from "./ProgramTags";


export default function HomeAside() {
    const { data, status } = useSelector((state: RootState) => state.counter.program)
    const [isMount, setMount] = useState(false);

    useEffect(() => setMount(true), [])

    if (!isMount || status !== 200) {
        return (
            <Aside>
                <SHomeAside />
            </Aside>
        )
    }

    return (
        <Aside>
            <ProgramTags data={data} />
            <GitHubCard repo={"codinasion/program"} />
        </Aside >
    )
}