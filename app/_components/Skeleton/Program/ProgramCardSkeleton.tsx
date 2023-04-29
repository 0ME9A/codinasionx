import { random } from "app/_functions/functions";

export default function ProgramCardSkeleton() {
    const i = Array.from(Array(5).keys());

    return (
        <div className={`w-full px-5 py-10 border-b-[1px] border-gray-500/20`}>
            <div className={`space-y-2 w-full`}>
                <div className="w-1/2 h-10 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
                <div className={`pt-2 w-full flex flex-wrap gap-2`}>
                    {i.map(() => (<div className="w-24 h-6 rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse" key={random()}></div>))}
                </div>
                <div className={`w-full md:flex pt-5 space-y-3 md:space-y-0 md:gap-5 lg:gap-10`}>
                    <div className="flex gap-2">
                        <div className="h-6 aspect-square rounded-full  bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
                        <div className="h-6 max-w-60 w-60 rounded-full  bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-6 aspect-square rounded-full  bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
                        <div className="h-6 max-w-60 w-60 rounded-full  bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
                    </div>
                </div>
            </div>

        </div>

    )
}