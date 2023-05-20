import { dummayArray, random } from "app/_functions/functions";
import { filterRepos } from "app/_functions/filters";
import { RootState } from "app/_rtk/Store/store";
import { repoType } from "app/_types/Repos";
import { useSelector } from "react-redux";
import SRepoCard from "../SkeletonComp/Repo/SRepoCard";
import NoRecord from "../Loading&ErrorComp/NoRecord";
import SearchTitle from "./SearchTitle";
import SReposCard from "./SRepoCard";


export default function SRepos(): JSX.Element {
    const i = dummayArray(5);
    const search = useSelector((state: RootState) => state.counter.search);
    const { data, status } = useSelector((state: RootState) => state.counter.repositories);
    const filteredData: repoType[] | null = filterRepos(search.keywords, data);

    return (
        <ul className={`w-full border-b-[1px] border-gray-500/20`}>
            {status !== 200 && i.map(() => <SRepoCard key={random()} />)}
            {status === 200 && !filteredData && !search.keywords && <SearchTitle style={`col-span-full`} />}
            {status === 200 && !filteredData && search.keywords && <NoRecord style={`col-span-full`} />}
            {status === 200 && filteredData &&
                filteredData.map((item: any) =>
                    <li key={random()}>
                        <SReposCard
                            title={item.name}
                            desc={item.description}
                            style={''}
                        />
                    </li>
                )
            }
        </ul>
    )
}