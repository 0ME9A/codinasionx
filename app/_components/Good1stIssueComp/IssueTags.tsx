import { issueProperties } from "app/_rtk/States/States";
import { useDispatch, useSelector } from "react-redux";
import { labelType } from "app/_types/good1stissue";
import { RootState } from "app/_rtk/Store/store";
import Badge from "../Links&BtnsComp/Badge";
import Box from "../LayoutsComp/Box";


export default function IssueTags({ data, status, allIssue }: { data: labelType[], status: number, allIssue: number }) {
    const dispatch = useDispatch()
    const issueProp = useSelector((state: RootState) => state.counter.issueProperties);

    if (!Array.isArray(data) || status !== 200) return <></>

    return (
        <Box title={"Good first issue"} style={`max-h-[600px]`}>
            <ul className={`flex flex-wrap gap-2 max-h-[70vh] overflow-auto p-1`}>
                <li key={'all'}>
                    <Badge
                        BadgeData={{
                            text: 'All',
                            highlightText: allIssue,
                            funcVal: issueProperties({ type: "TAG", value: 'All' }),
                            funcState: issueProp.tag,
                            clickFunc: dispatch
                        }}
                    />
                </li>
                {data.map((item: labelType) =>
                    <li key={item.label + item.issue_count}>
                        <Badge
                            BadgeData={{
                                text: item.label,
                                highlightText: item.issue_count,
                                funcVal: issueProperties({ type: "TAG", value: item.label }),
                                funcState: issueProp.tag,
                                clickFunc: dispatch
                            }}
                        />
                    </li>
                )}
            </ul>
        </Box >
    )
}