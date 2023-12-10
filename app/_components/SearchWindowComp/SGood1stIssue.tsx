import { dummyArray, random } from "app/_functions/functions";
import { filterIssueII } from "app/_functions/filters";
import { issueType } from "app/_types/GoodFirstIssue";
import { RootState } from "app/_rtk/Store/store";
import { useSelector } from "react-redux";
import ProgramCardSkeleton from "../SkeletonComp/Program/SHomeArticle";
import NoRecord from "../Loading&ErrorComp/NoRecord";
import SGoodFirstIssue from "./SGoodFirstIssueCard";
import SearchTitle from "./SearchTitle";

export default function SPrograms() {
  const i = dummyArray(5);
  const search = useSelector((state: RootState) => state.counter.search);
  const { data, status } = useSelector(
    (state: RootState) => state.counter.goodFirstIssue
  );
  const filteredData: issueType[] | null = filterIssueII(data, search.keywords);

  return (
    <ul className={`w-full border-b-[1px] border-gray-500/20`}>
      {status !== 200 && i.map(() => <ProgramCardSkeleton key={random()} />)}
      {status === 200 && !filteredData && !search.keywords && (
        <SearchTitle style={`col-span-full`} />
      )}
      {status === 200 && !filteredData && search.keywords && (
        <NoRecord style={`col-span-full`} />
      )}
      {status === 200 &&
        filteredData &&
        filteredData?.map((item: issueType) => (
          <li key={random()}>
            <SGoodFirstIssue
              issue_short_url={item.issue_short_url}
              issue_labels={item.issue_labels}
              issue_author={item.issue_author}
              issue_title={item.issue_title}
              issue_url={item.issue_url}
            />
          </li>
        ))}
    </ul>
  );
}
