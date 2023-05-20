"use client";
import { codeType, programApiType } from "app/_types/Program";
import { random } from "app/_functions/functions";
import { useEffect, useState } from "react";
import SProgramArticle from "app/_components/SkeletonComp/Program/SProgramArticle";
import ShareOnTwitter from "app/_components/Links&BtnsComp/share/Twitter";
import ClipBoard from "app/_components/Links&BtnsComp/ClipBoard";
import Article from "app/_components/LayoutsComp/Article";
import Comment from "app/_components/ProgramComp/Comment";
import Badge from "app/_components/Links&BtnsComp/Badge";
import Markdown from "../../CommonComp/Markdown";


export default function ProgramArticle({ api: { data, status } }: programApiType) {
    const [isMount, setMount] = useState(false);
    const [tab, setTab] = useState<string>(data.languages ? data.languages[0] : '');
    const code: codeType[] = data && data.codes.filter((item: codeType) => item.language.name === tab && <pre>{item.code}</pre>)
    const title = data.slug.replaceAll("-", " ");
    const [url, setUrl] = useState("https://codinasion.org")

    useEffect(() => {
        setUrl(window.location.href)
        setMount(true)
    }, [])

    if (!isMount || status !== 200) {
        return (
            <Article>
                <SProgramArticle />
            </Article>
        )
    }

    return (
        <Article style="p-2 space-y-5">
            <header className="py-2 flex items-start justify-between">
                <h1 title={title} className="text-2xl lg:text-4xl font-semibold tracking-tight ">{title}</h1>
                <ShareOnTwitter title={title} url={url} />
            </header>

            {data && <Markdown content={data.description} />}

            <ul className="flex gap-2 flex-wrap p-2 shadow-xl shadow-gray-500/10 rounded-2xl lg:rounded-3xl ">
                {data && data.languages.map((item: string) =>
                    <li key={random()}>
                        <Badge
                            BadgeData={{
                                text: item,
                                funcVal: item,
                                funcState: tab,
                                clickFunc: setTab
                            }}
                        />
                    </li>
                )}
            </ul>

            <section className="pb-5 p-3 bg-white dark:bg-black shadow-xl shadow-gray-500/10 rounded-2xl lg:rounded-3xl">
                <ClipBoard clipText={code[0].code} />
                <Markdown content={code[0].code} />
            </section>

            <Comment />
        </Article>
    )
}