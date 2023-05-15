import { codinasionDevApiType } from "app/_types/Devs";
import { filterDevs } from "app/_functions/Filters";
import { random } from "app/_functions/functions";
import { RootState } from "../RTK/Store/store";
import { useSelector } from "react-redux";
import DevCardSkeleton from "../Skeleton/Devs/DevCardSkeleton";
import DevCard from "../DevsComp/Card/DevCard";
import NoRecord from "../CommonComp/NoRecord";


export default function SDevelopers() {
    const i = Array.from(Array(15).keys());
    const search = useSelector((state: RootState) => state.counter.search)
    const { data, status } = useSelector((state: RootState) => state.counter.developers)
    const filteredData: codinasionDevApiType[] = filterDevs(search.keywords, data)

    return (
        <div className="grid grid-cols-4 sm:grid-cols-6">
            {status !== 200 && i.map(() => <DevCardSkeleton key={random()} />)}
            {status === 200 && !filteredData.length && <NoRecord style={`col-span-full`} />}
            {status === 200 && filteredData.length > 0 &&
                filteredData.map((item) =>
                    <DevCard
                        key={random()}
                        data={{
                            name: item.user.login,
                            avatar: `https://github.com/${item.user.login}.png`,
                            role: item.role
                        }} />
                )
            }
        </div>
    )
}