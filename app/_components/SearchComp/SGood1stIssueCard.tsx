import { searchProperties } from "../RTK/States/States";
import { RiGitRepositoryLine } from "react-icons/ri";
import { random } from "app/_functions/functions";
import { issueType } from "app/_types/Issue";
import { useDispatch } from "react-redux";
import { HiUsers } from "react-icons/hi";
import Tag from "../CommonComp/Tag";
import Link from "next/link";


export default function SGood1stIssueCard({ issue_title, issue_url, issue_short_url, issue_labels, issue_author, style }: issueType) {
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
                <div className="md:flex md:space-x-10 text-md pt-2">
                    <div title={`Repository ${issue_short_url}`} className={`flex items-center gap-2`}>
                        <RiGitRepositoryLine className="inline-block text-gray-500 dark:text-gray-300" />{" "}
                        <span className="font-light text-md">Repository :{" "}<b>{issue_short_url}</b></span>
                    </div>
                    <div title={`Author ${issue_author}`} className={`flex items-center gap-2`}>
                        <HiUsers className="inline-block text-gray-500 dark:text-gray-300" />{" "}
                        <span className="font-light text-md">Author :{" "}<b>{issue_author}</b></span>
                    </div>
                </div>
            </article>
        </Link>
    )
}