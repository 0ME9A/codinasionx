import { dummayArray, random } from "app/_functions/functions";
import { codinasionDevApiType } from "app/_types/Devs";
import { filterDevs } from "app/_functions/filters";
import { RootState } from "app/_rtk/Store/store";
import { useSelector } from "react-redux";
import DevCardSkeleton from "../SkeletonComp/Devs/SDevCard";
import NoRecord from "../Loading&ErrorComp/NoRecord";
import DevCard from "../DevelopersComp/Card/DevCard";
import SearchTitle from "./SearchTitle";


export default function SDevelopers() {
    const i = dummayArray(15);
    const search = useSelector((state: RootState) => state.counter.search);
    const { data, status } = useSelector((state: RootState) => state.counter.developers);
    const filteredData: codinasionDevApiType[] | null = filterDevs(search.keywords, data);

    return (
        <ul className="grid grid-cols-4 sm:grid-cols-6">
            {status !== 200 && i.map(() => <DevCardSkeleton key={random()} />)}
            {status === 200 && !filteredData && !search.keywords && <SearchTitle style={`col-span-full`} />}
            {status === 200 && !filteredData && search.keywords && <NoRecord style={`col-span-full`} />}
            {status === 200 && filteredData &&
                filteredData.map((item) =>
                    <li key={random()}>
                        <DevCard
                            data={{
                                name: item.user.login,
                                avatar: `https://github.com/${item.user.login}.png`,
                                role: item.role
                            }} />
                    </li>
                )
            }
        </ul>
    )
}