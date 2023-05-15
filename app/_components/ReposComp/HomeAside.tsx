"use client";
import { RootState } from "../RTK/Store/store";
import { repoType } from "app/_types/Repos";
import { useSelector } from "react-redux";
import AsideContributors from "../CommonComp/AsideContributors";
import GitHubCard from "../CommonComp/GitHubCard";
import Box from "../LayoutsComp/Box";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { codinasionDevApiType } from "app/_types/Devs";


const initialDev: codinasionDevApiType[] = [
    {
        user: {
            id: 12345,
            login: '0me9a',
        },
        role: "team"
    },
    {
        user: {
            id: 12345,
            login: '0me9a',
        },
        role: "team"
    }
]

export default function HomeAside() {
    const aside = useSelector((state: RootState) => state.counter.commonProperties.projectLayout.aside);
    const { data: devs, status: devStatus } = useSelector((state: RootState) => state.counter.developers)
    const { data: repos, status } = useSelector((state: RootState) => state.counter.repositories)
    const [isMount, setMount] = useState(false);

    const filtered = repos.length && status === 200
        ? repos.filter((item: repoType) => { return item.topics.includes("codinasion"); }) : [];

    const filteredDev = devs.length && status === 200 ? devs.filter((item: codinasionDevApiType) => { return item.role === 'team' }) : initialDev

    useEffect(() => setMount(true), [])

    if (!isMount) return (
        <div
            className={`fixed top-28 right-0 lg:sticky lg:top-32 max-w-[500px] px-2 pt-4 lg:px-0 flex flex-col gap-2  w-full lg:w-[600px] bg-gray-500/50 backdrop-blur-sm lg:bg-transparent h-full lg:h-fit origin-top-right scale-y-0 lg:!scale-y-100 opacity-0 lg:!opacity-100`}
            style={{ transform: `scaleY(${aside ? 1 : 0})`, opacity: aside ? 1 : 0 }}>
            <Loading basic={true} />
        </div >
    )

    return (
        <div
            className={`fixed top-28 right-0 lg:sticky lg:top-32 max-w-[500px] px-2 pt-4 lg:pt-0 lg:px-0 flex flex-col gap-2 w-full lg:w-[600px] bg-gray-500/50 backdrop-blur-sm lg:bg-transparent h-full lg:h-fit origin-top-right scale-y-0 lg:!scale-y-100 opacity-0 lg:!opacity-100`}
            style={{ transform: `scaleY(${aside ? 1 : 0})`, opacity: aside ? 1 : 0 }}>
            <Box title={"Codinasion repositories"} style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 grid gap-2`}>
                <p>
                    Codinasion&apos;s repositories are a collection of open-source codebases that offer solutions for a variety of programming challenges.
                    They provide a great opportunity for developers to contribute to open-source projects and gain experience in collaborative programming.
                    Codinasion&apos;s repositories welcome different types of contributions and offer &quot;good first issue&quot; tickets for beginners to start their journey in open-source development.
                </p>
            </Box>
            <AsideContributors contributors={filteredDev} />
            {filtered.length ? (
                <Box title={"Recommended"} style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 grid gap-2`}>
                    <>
                        {filtered.slice(0, 2).map((item) => (<GitHubCard repo={`codinasion/${item.name}`} key={Math.random()} />))}
                    </>
                </Box>) : null
            }

        </div >
    )
}