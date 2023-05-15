"use client";
import { issueProperties } from "../RTK/States/States";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/Store/store";
import { labelType } from "app/_types/Issue";
import GitHubCard from "../CommonComp/GitHubCard";
import Loading from "../Loading/Loading";
import Badge from "../Links&Btns/Badge";
import Box from "../LayoutsComp/Box";

export default function HomeAside({ data, status, allIssue }: { data: labelType[], status: number, allIssue: number }) {
    const dispatch = useDispatch();
    const issueProp = useSelector((state: RootState) => state.counter.issueProperties);

    return (
        <div
            className={`fixed top-28 right-0 lg:sticky lg:top-32 px-2 py-4 lg:pt-0 lg:px-0 lg:block w-full lg:w-[600px] !grid gap-3 h-fit bg-gray-500/50 backdrop-blur-sm lg:bg-transparent lg:h-fit origin-top-right scale-y-0 lg:!scale-y-100 opacity-0 lg:!opacity-100`}
            style={{ transform: `scaleY(${issueProp.aside ? 1 : 0})`, opacity: issueProp.aside ? 1 : 0 }}>
            <Box title={"Good first issue"} style={`p-2 pt-4 rounded-3xl bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 `}>
                {status === 200 ?
                    <div className={`flex flex-wrap gap-2 max-h-[70vh] overflow-auto p-1`}>
                        <Badge
                            key={'all'}
                            BadgeData={{
                                text: 'All',
                                highlightText: allIssue,
                                funcVal: issueProperties({ type: "TAG", value: 'All' }),
                                funcState: issueProp.tag,
                                clickFunc: dispatch
                            }} />
                        {
                            data.map((item) => <Badge
                                key={item.label + item.issue_count}
                                BadgeData={{
                                    text: item.label,
                                    highlightText: item.issue_count,
                                    funcVal: issueProperties({ type: "TAG", value: item.label }),
                                    funcState: issueProp.tag,
                                    clickFunc: dispatch
                                }} />)
                        }
                    </div> : <Loading basic={true} />
                }
            </Box>
            <GitHubCard repo={"codinasion/program"} />
        </div >
    )
}