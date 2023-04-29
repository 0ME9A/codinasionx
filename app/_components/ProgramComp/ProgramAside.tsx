"use client";
import { availableSolutionType } from "app/_types/Program";
import GitHubCard from "../CommonComp/GitHubCard";
import PContributors from "./PContributors";
import PSolutions from "./PSolutions";
import PUpdated from "./PUpdated";

export default function ProgramAside({ data }: availableSolutionType): JSX.Element {
    const { contributors, languages, track_id } = data;

    return (
        <div
            className={`relative right-0 lg:sticky lg:top-32 pt-4 lg:pt-0 lg:px-0 grid auto-rows-min gap-2 w-full lg:w-[600px] h-fit`}>
            <PSolutions languages={languages} track_id={track_id} />
            <PContributors contributors={contributors} />
            <PUpdated last_updated={data.last_updated} />
            <GitHubCard repo={"codinasion/program"} />
        </div >
    )
}