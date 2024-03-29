"use client";
import { searchProperties } from "app/_rtk/States/States";
import { RiGitRepositoryLine } from "react-icons/ri";
import { issueType } from "app/_types/GoodFirstIssue";
import { random } from "app/_functions/functions";
import { useDispatch } from "react-redux";
import { HiUsers } from "react-icons/hi";
import Tag from "../CommonComp/Tag";
import Link from "next/link";


export default function SgoodFirstIssueCard({ issue_title, issue_url, issue_short_url, issue_labels, issue_author, style }: issueType) {
    const dispatch = useDispatch()

    return (
        <Link
            href={issue_url}
            target={"_blank"}
            onClick={() => dispatch(searchProperties({ type: "WINDOW", value: false }))}
            className={`p-2 py-5 block odd:bg-gray-500/10 hover:bg-light dark:hover:bg-dark focus:bg-light dark:focus:bg-dark focus:outline-0 ${style}`}>
            <article title={issue_title} className={`w-full text-black dark:text-white  mx-auto`}>
                <h2 className="text-xl">{issue_title}</h2>
                <ul className="flex gap-2 pt-2 flex-wrap">
                    {issue_labels.map(item => <Tag key={random()} tag={item} style={'font-light'} />)}
                </ul>
                <ul className="md:flex md:space-x-10 text-md pt-2">
                    <li title={`Repository ${issue_short_url}`} className={`flex items-center gap-2`}>
                        <RiGitRepositoryLine className="inline-block text-gray-500 dark:text-gray-300" />{" "}
                        <span className="font-light text-md">Repository :{" "}<b>{issue_short_url}</b></span>
                    </li>
                    <li title={`Author ${issue_author}`} className={`flex items-center gap-2`}>
                        <HiUsers className="inline-block text-gray-500 dark:text-gray-300" />{" "}
                        <span className="font-light text-md">Author :{" "}<b>{issue_author}</b></span>
                    </li>
                </ul>
            </article>
        </Link>
    )
}