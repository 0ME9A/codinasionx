"use client";
import { issueType } from "app/_types/Issue";
import { useDispatch, useSelector } from "react-redux";
import { issueProperties } from "../RTK/States/States";
import { filterIssue } from "app/_functions/Filters";
import { random } from "app/_functions/functions"
import { RootState } from "../RTK/Store/store";
import { Suspense, useEffect } from "react";
import ProgramCardSkeleton from "app/_components/Skeleton/Program/ProgramCardSkeleton";
import NoRecord from "../SearchComp/NoRecord";
import IssueCard from "./IssueCard";
import useInfinite from "app/_hooks/useInfinite";


export default function HomeArticles({ data, status }: { data: issueType[], status: number }) {
    const dispatch = useDispatch();
    const i: number[] = Array.from(Array(10).keys());
    const search = useSelector((state: RootState) => state.counter.search);
    const issueProp = useSelector((state: RootState) => state.counter.issueProperties);
    const filtered = status === 200 ? filterIssue(data, issueProp.tag, search.keywords) : [];
    useEffect(() => { dispatch(issueProperties({ type: "LIMIT", value: 1 })) }, [issueProp.tag, search.keywords]);
    useInfinite({ funcVal: issueProperties({ type: "LIMIT", value: issueProp.limit + 1 }), funcCall: dispatch });

    return (
        <div className={`w-full min-h-screen text-white rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-sm overflow-hidden`}>
            <Suspense fallback={i.map(() => <ProgramCardSkeleton key={random()} />)}>
                {
                    filtered.length ? filtered.slice(0, issueProp.limit * 10).map((item: issueType) =>
                        <IssueCard issueData={{
                            issue_title: item.issue_title,
                            issue_author: item.issue_author,
                            issue_url: item.issue_url,
                            issue_short_url: item.issue_short_url,
                            issue_labels: [...item.issue_labels]
                        }} parentPath={"/good-1st-issue/"} />) : <NoRecord />
                }
            </Suspense>
        </div >
    );
}
