import { filterProgramII } from "app/_functions/filters";
import { random } from "app/_functions/functions";
import { programType } from "app/_types/Program";
import { RootState } from "app/_rtk/Store/store";
import { useSelector } from "react-redux";
import ProgramCardSkeleton from "../SkeletonComp/Program/SHomeArticle";
import NoRecord from "../Loading&ErrorComp/NoRecord";
import SProgramCard from "./SProgramCard";
import SearchTitle from "./SearchTitle";


export default function SPrograms() {
    const i = Array.from(Array(5).keys());
    const search = useSelector((state: RootState) => state.counter.search);
    const { data, status } = useSelector((state: RootState) => state.counter.program);
    const filteredData: programType[] | null = filterProgramII(search.keywords, data);

    return (
        <ul className={`w-full border-b-[1px] border-gray-500/20`}>
            {status !== 200 && i.map(() => <ProgramCardSkeleton key={random()} />)}
            {status === 200 && !filteredData && !search.keywords && <SearchTitle style={`col-span-full`} />}
            {status === 200 && !filteredData && search.keywords && <NoRecord style={`col-span-full`} />}
            {status === 200 && filteredData &&
                filteredData.map((item: programType) =>
                    <li key={random()}>
                        <SProgramCard
                            programData={item}
                        />
                    </li>
                )
            }
        </ul>
    )
}