"use client";
import { programType, codeType } from "app/_types/Program";
import { random } from "app/_functions/functions";
import { useEffect, useState } from "react";
import MarkdownPreviewSk from "../Skeleton/Program/MarkdownPreviewSk";
import Comment from "app/_components/ProgramComp/Comment";
import ShareOnTwitter from "../Links&Btns/share/Twitter";
import ClipBoard from "../Links&Btns/ClipBoard";
import Markdown from "../CommonComp/Markdown";
import Badge from "../Links&Btns/Badge";


export default function ProgramArticle({ data }: { data: programType }) {
    const [isMount, setMount] = useState(false);
    const [tab, setTab] = useState<string>(data.languages ? data.languages[0] : '');
    const code: codeType[] = data && data.codes.filter((item: codeType) => item.language.name === tab && <pre>{item.code}</pre>)
    const title = data.slug.replaceAll("-", " ");
    const [url, setUrl] = useState("https://codinasion.org")

    useEffect(() => {
        setUrl(window.location.href)
        setMount(true)
    }, [])

    if (!isMount) return <MarkdownPreviewSk />

    return (
        <section className={`w-full min-h-screen px-2 text-black dark:text-white rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-sm overflow-hidden space-y-10 shadow-xl shadow-gray-500/10`}>
            <div className="space-y-2">
                <div className="relative py-2 flex items-start justify-between">
                    <h1 title={title} className="text-2xl lg:text-4xl font-semibold tracking-tight ">{title}</h1>
                    <ShareOnTwitter title={title} url={url} />
                </div>
                <Markdown content={data.description} />
            </div>
            <div className="space-y-2">
                <div className="flex gap-2 flex-wrap">
                    {data.languages.map((item: string) => <Badge
                        key={random()}
                        BadgeData={{
                            text: item,
                            funcVal: item,
                            funcState: tab,
                            clickFunc: setTab
                        }}
                    />)}
                </div>

                <div className="pb-5 p-2 bg-white dark:bg-black rounded-lg shadow-lg shadow-gray-500/20 overflow-auto">
                    <ClipBoard clipText={code[0].code} />
                    <Markdown content={code[0].code} />
                </div>
            </div>

            <Comment />
        </section>
    )
}