"use client"
import { activeProgramType, codeType } from "app/_types/Program";
import { random } from "app/_functions/functions";
import { useState } from "react";
import Comment from "app/_components/ProgramComp/Comment";
import ClipBoard from "../Links&Btns/ClipBoard";
import Badge from "../Links&Btns/Badge";

export default function ProgramArticle({ data }: { data: activeProgramType }) {
    const [tab, setTab] = useState<string>(data.languages ? data.languages[0] : '');
    const code: codeType[] = data && data.codes.filter((item: codeType) => item.language.name === tab && <pre>{item.code}</pre>)

    return (
        <section className={`w-full min-h-screen px-2 pt-5 text-black dark:text-white rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-sm overflow-hidden space-y-10`}>
            <header className="space-y-2">
                <h1 title={data.slug.replaceAll('-', ' ')} className="text-2xl lg:text-4xl font-semibold tracking-tight ">{data.slug.replaceAll('-', ' ')}</h1>
                <pre className="overflow-auto">{data.description}</pre>
            </header>

            <div className="space-y-2">
                <div className="flex gap-2 flex-wrap">
                    {data.languages.map((item: string) => <Badge
                        key={random()}
                        BadgeData={{
                            text: item,
                            funcVal: item,
                            funcState: tab,
                            clickFunc: setTab
                        }} />)
                    }
                </div>
                <pre className="pb-5 p-2 bg-white dark:bg-black rounded-lg shadow-lg shadow-gray-500/20 overflow-auto">
                    <ClipBoard clipText={code[0].code} />
                    <code>{code.map((item: any) => item.code)}</code>
                </pre>
            </div>

            <Comment />
        </section>
    )
}