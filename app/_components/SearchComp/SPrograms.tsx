import { filterProgramII } from "app/_functions/Filters";
import { random } from "app/_functions/functions";
import { programType } from "app/_types/Program";
import { RootState } from "../RTK/Store/store";
import { useSelector } from "react-redux";
import ProgramCardSkeleton from "../Skeleton/Program/ProgramCardSkeleton";
import SProgramCard from "./SProgramCard";
import NoRecord from "../CommonComp/NoRecord";


export default function SPrograms() {
    const i = Array.from(Array(5).keys());
    const search = useSelector((state: RootState) => state.counter.search)
    const { data, status } = useSelector((state: RootState) => state.counter.program)
    const filteredData = filterProgramII(search.keywords, data)

    return (
        <div className={`w-full border-b-[1px] border-gray-500/20`}>
            {status !== 200 && i.map(() => <ProgramCardSkeleton key={random()} />)}
            {status === 200 && !filteredData.length && <NoRecord style={`col-span-full`} />}
            {status === 200 && filteredData.length > 0  &&
                filteredData.map((item: programType) =>
                    <SProgramCard
                        key={random()}
                        programData={item}
                    />
                )
            }
        </div>
    )
}