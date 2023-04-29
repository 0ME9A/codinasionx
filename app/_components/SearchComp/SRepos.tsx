import { useDispatch, useSelector } from "react-redux";
import { repositories } from "../RTK/States/States";
import { filterRepos } from "app/_functions/Filters";
import { random } from "app/_functions/functions";
import { RootState } from "../RTK/Store/store";
import { repos } from "@/data/repos";
import { useEffect } from "react";
import Card from "../Skeleton/Repo/Card";
import SReposCard from "./SRepoCard";
import NoRecord from "./NoRecord";


export default function SRepos(): JSX.Element {
    const i = Array.from(Array(5).keys());
    const search = useSelector((state: RootState) => state.counter.search)
    const reposData = useSelector((state: RootState) => state.counter.repositories)
    const dispatch = useDispatch()
    const filteredData = filterRepos(search.keywords, reposData.data)
    useEffect(() => { reposData.status !== 200 && dispatch(repositories({ api: repos, status: 200 })) }, [])

    return (
        <div className={`w-full border-b-[1px] border-gray-500/20`}>
            {reposData.status === 200 && filteredData && filteredData.length ? filteredData.map((item: any) => <SReposCard key={random()} title={item.name} desc={item.description} style={''} />) : <NoRecord />}
            {reposData.status !== 200 && i.map(() => <Card key={random()} />)}
        </div>
    )
}