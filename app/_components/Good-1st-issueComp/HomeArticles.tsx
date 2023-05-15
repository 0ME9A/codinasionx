"use client";
import { useDispatch, useSelector } from "react-redux";
import { issueProperties } from "../RTK/States/States";
import { filterIssue } from "app/_functions/Filters";
import { random } from "app/_functions/functions"
import { RootState } from "../RTK/Store/store";
import { issueType } from "app/_types/Issue";
import { useEffect } from "react";
import ProgramCardSkeleton from "app/_components/Skeleton/Program/ProgramCardSkeleton";
import useInfinite from "app/_hooks/useInfinite";
import NoRecord from "../SearchComp/NoRecord";
import IssueCard from "./IssueCard";


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
            {status !== 200 && i.map(() => <ProgramCardSkeleton key={random()} />)}
            {status === 200 && !filtered.length && <NoRecord />}
            {status === 200 && filtered.length > 0 &&
                filtered.slice(0, issueProp.limit * 10).map((item: issueType) =>
                    <IssueCard key={random()} issue={item} />
                )
            }
        </div >
    );
}
