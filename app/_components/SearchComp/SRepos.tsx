import { filterRepos } from "app/_functions/Filters";
import { random } from "app/_functions/functions";
import { RootState } from "../RTK/Store/store";
import { useSelector } from "react-redux";
import Card from "../Skeleton/Repo/ReposSkeleton";
import SReposCard from "./SRepoCard";
import NoRecord from "../CommonComp/NoRecord";


export default function SRepos(): JSX.Element {
    const i = Array.from(Array(5).keys());
    const search = useSelector((state: RootState) => state.counter.search)
    const { data, status } = useSelector((state: RootState) => state.counter.repositories)
    const filteredData = filterRepos(search.keywords, data)

    return (
        <div className={`w-full border-b-[1px] border-gray-500/20`}>
            {status !== 200 && i.map(() => <Card key={random()} />)}
            {status === 200 && !filteredData.length && <NoRecord />}
            {status === 200 && filteredData.length > 0 && filteredData.map((item: any) =>
                <SReposCard
                    key={random()}
                    title={item.name}
                    desc={item.description}
                    style={''}
                />)
            }
        </div>
    )
}