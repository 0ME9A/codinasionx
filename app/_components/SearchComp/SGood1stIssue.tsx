import { filterIssueII } from "app/_functions/Filters";
import { random } from "app/_functions/functions";
import { RootState } from "../RTK/Store/store";
import { issueType } from "app/_types/Issue";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProgramCardSkeleton from "../Skeleton/Program/ProgramCardSkeleton";
import SGood1stIssue from "./SGood1stIssueCard";
import NoRecord from "./NoRecord";


type fetchIssue = {
    data: issueType[]
    status: number;
}
export default function SPrograms(): JSX.Element {
    const i = Array.from(Array(5).keys());
    const baseUrl = 'https://api.codinasion.org/';
    const search = useSelector((state: RootState) => state.counter.search)
    const [issue, setIssue] = useState<fetchIssue>({ data: [], status: 404 })
    const filteredData = filterIssueII(issue.data, search.keywords)

    useEffect(() => {
        async function fetchData(url: string) {
            const fetchApi = await fetch(url)
            const data = fetchApi.status === 200 ? await fetchApi.json() : []
            fetchApi.status === 200 && setIssue({ data, status: fetchApi.status })
        }
        fetchData(`${baseUrl}good-1st-issue`)
    }, [])
    return (
        <div className={`w-full border-b-[1px] border-gray-500/20`}>
            {issue.status === 200 &&
                filteredData ?
                filteredData.map((item: issueType) =>
                    <SGood1stIssue
                        issue_short_url={item.issue_short_url}
                        issue_labels={item.issue_labels}
                        issue_author={item.issue_author}
                        issue_title={item.issue_title}
                        issue_url={item.issue_url}
                        key={random()}
                    />) : <NoRecord style={`col-span-full`} />
            }
            {issue.status !== 200 && i.map(() => <ProgramCardSkeleton key={random()} />)}
        </div>
    )
}