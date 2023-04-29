import DevCardSkeleton from "app/_components/Skeleton/Devs/DevCard";
import { random } from "app/_functions/functions";

export default function Loading() {
    const i = Array.from(Array(25).keys());

    return (
        <div className="w-full p-2 md:p-5 rounded-[50px] dark:text-white  grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9  xl:grid-cols-12 bg-white/50 dark:bg-black/50">
        {i.map(() => {
                 return <DevCardSkeleton key={random()}/>;
             })}
        </div>
    );
}
