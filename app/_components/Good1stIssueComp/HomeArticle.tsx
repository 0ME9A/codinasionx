"use client";
import { good1stIssueType } from "app/_types/good1stissue";
import { issueProperties } from "app/_rtk/States/States";
import { useDispatch, useSelector } from "react-redux";
import { filterIssue } from "app/_functions/filters";
import { random } from "app/_functions/functions"
import { RootState } from "app/_rtk/Store/store";
import { useEffect, useState } from "react";
import { LIMIT } from "app/_rtk/stateType";
import SHomeArticle from "../SkeletonComp/Program/SHomeArticle";
import ArticleSection from "../LayoutsComp/ArticleSection";
import NoRecord from "../Loading&ErrorComp/NoRecord";
import useInfinite from "app/_hooks/useInfinite";
import IssueCard from "./IssueCard";


export default function HomeArticle() {
    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.counter.search);
    const { data, status } = useSelector((state: RootState) => state.counter.good1stissue);
    const issueProp = useSelector((state: RootState) => state.counter.issueProperties);
    const filtered = status === 200 ? filterIssue(data, issueProp.tag, search.keywords) : [];
    const [isMount, setMount] = useState(false)

    useEffect(() => { dispatch(issueProperties({ type: LIMIT, value: 1 })) }, [issueProp.tag, search.keywords]);
    useInfinite({ funcVal: issueProperties({ type: LIMIT, value: issueProp.limit + 1 }), funcCall: dispatch });
    useEffect(() => setMount(true), []);

    if (!isMount || status !== 200) return (
        <ArticleSection>
            <SHomeArticle />
        </ArticleSection>
    )

    return (
        <ArticleSection>
            {!filtered && <NoRecord />}
            {filtered &&
                filtered.slice(0, issueProp.limit * 10).map((item: good1stIssueType) =>
                    <IssueCard
                        key={random()}
                        issue={item}
                    />
                )}
        </ArticleSection>
    );
}
