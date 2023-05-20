"use client";
import { RootState } from "app/_rtk/Store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SHomeAside from "../SkeletonComp/Program/SHomeAside";
import GitHubCard from "../CommonComp/GitHubCard";
import Aside from "../LayoutsComp/Aside";
import IssueTags from "./IssueTags";


// export default function HomeAside({ data, status, allIssue }: { data: labelType[], status: number, allIssue: number }) {
export default function HomeAside() {
    const { data, status } = useSelector((state: RootState) => state.counter.issueLabel)
    const { data: isseuData, status: issueStatus } = useSelector((state: RootState) => state.counter.good1stissue)
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
            <IssueTags data={data} status={status} allIssue={isseuData.length} />
            <GitHubCard repo={"codinasion/good1stissue"} />
        </Aside >
    )
}