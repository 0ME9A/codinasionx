"use client";
import { searchProperties } from "../RTK/States/States";
import { programCompType } from "app/_types/Program";
import { random } from "app/_functions/functions";
import { useDispatch } from "react-redux";
import Tag from "../CommonComp/Tag";
import Link from "next/link";

export default function SProgramCard({ programData, style }: programCompType) {
    const dispatch = useDispatch()
    const title = programData.slug.replaceAll("-", " ");

    return (
        <Link
            href={`/program/${programData.slug}`}
            title={title}
            className={`p-2 py-5 block odd:bg-gray-500/10 hover:bg-light dark:hover:bg-dark focus:bg-light dark:focus:bg-dark focus:outline-0 ${style}`}
            onClick={() => dispatch(searchProperties({ type: "WINDOW", value: false }))}>
            <h2 className="text-xl">{title}</h2>
            <ul className="flex gap-2 pt-2 flex-wrap">
                {programData.languages.map((item: string) => <Tag key={random()} tag={item} style={'font-light'} />)}
            </ul>
        </Link>
    )
}