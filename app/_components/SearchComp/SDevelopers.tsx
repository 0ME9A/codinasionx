import { useDispatch, useSelector } from "react-redux";
import { developers } from "../RTK/States/States";
import { random } from "app/_functions/functions";
import { devsDataType } from "app/_types/Devs";
import { RootState } from "../RTK/Store/store";
import { devs } from "@/data/contributors";
import { useEffect } from "react";
import DevCardSkeleton from "../Skeleton/Devs/DevCard";
import DevCard from "../DevsComp/DevCard";
import NoRecord from "./NoRecord";

const filterData = (keywords: string | null, data: devsDataType[]): devsDataType[] | null => {
    const layer1 = keywords && data.length ? data.filter(item => {
        const key = item.login.toLocaleLowerCase()
        const keyword = keywords.toLocaleLowerCase()
        return key.includes(keyword)
    }) : null
    return layer1
}
export default function SDevelopers() {
    const i = Array.from(Array(15).keys());
    const search = useSelector((state: RootState) => state.counter.search)
    const devsData = useSelector((state: RootState) => state.counter.developers)
    const dispatch = useDispatch()
    const filteredData = filterData(search.keywords, devsData.data)

    useEffect(() => { devsData.status !== 200 && dispatch(developers({ api: devs, status: 200 })) }, [])

    return (
        <div className="grid grid-cols-4 sm:grid-cols-6">
            {devsData.status === 200 && filteredData && filteredData.length ? filteredData.map((item: devsDataType) => <DevCard key={random()} imgUrl={item.avatar_url} devName={item.login} />) : <NoRecord style={`col-span-full`} />}
            {devsData.status !== 200 && i.map(() => <DevCardSkeleton key={random()} />)}
        </div>
    )
}