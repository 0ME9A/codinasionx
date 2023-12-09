import { dummyArray, random } from "app/_functions/functions";
import SAtom from "../Common/SAtom";
import SDevCard from "./SDevCard";

export default function SAnimatedDevs() {
    return (
        <>
            <div className="w-full flex flex-col items-end gap-2">
                <SAtom style="w-1/2 h-12" />
                <SAtom style="w-[60%] h-8" />
            </div>
            <div className="p-2 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12 rounded-2xl lg:rounded-3xl bg-too-light dark:bg-too-dark">
                {dummyArray(25).map(() => <SDevCard key={random()} />)}
            </div>
            <SAtom style="w-full h-12" />
        </>
    )
}