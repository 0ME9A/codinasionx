import { filterProgramII } from "app/_functions/Filters";
import { useDispatch, useSelector } from "react-redux";
import { random } from "app/_functions/functions";
import { program } from "../RTK/States/States";
import { RootState } from "../RTK/Store/store";
import { ProgramType } from "app/_types";
import { useEffect } from "react";
import ProgramCardSkeleton from "../Skeleton/Program/ProgramCardSkeleton";
import SProgramCard from "./SProgramCard";
import NoRecord from "./NoRecord";


export default function SPrograms() {
    const dispatch = useDispatch()
    const i = Array.from(Array(5).keys());
    const search = useSelector((state: RootState) => state.counter.search)
    const programs = useSelector((state: RootState) => state.counter.program)
    const filteredData = filterProgramII(search.keywords, programs.data)
    const url = 'https://api.codinasion.org/program';

    useEffect(() => {
        async function fetchData(url: string) {
            const fetchApi = await fetch(url)
            const data = fetchApi.status === 200 ? await fetchApi.json() : []
            fetchApi.status === 200 && dispatch(program({ api: data, status: 200 }))
        }
        programs.status !== 200 && fetchData(url)
    }, [])

    return (
        <div className={`w-full border-b-[1px] border-gray-500/20`}>
            {programs.status === 200 &&
                filteredData &&
                filteredData.length ?
                filteredData.map((item: ProgramType) =>
                    <SProgramCard
                        key={random()}
                        // title={item.title}
                        // tags={item.tags} slug={item.slug}
                        title={item.slug}
                        tags={item.languages} slug={item.slug}
                    />) : <NoRecord style={`col-span-full`} />}
            {programs.status !== 200 && i.map(() => <ProgramCardSkeleton key={random()} />)}
        </div>
    )
}