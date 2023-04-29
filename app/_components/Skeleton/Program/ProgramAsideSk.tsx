import { random } from "app/_functions/functions";

export default function ProgramAsideSk() {
    const i = Array.from(Array(20).keys());

    return (
        <div className={`hidden  min-h-screen right-0 sticky top-32 lg:grid auto-rows-min gap-2 w-[600px] backdrop-blur-sm lg:bg-transparent h-fit origin-top-right`}>
            <div className={`space-y-2 rounded-l-2xl`}>
                <div className="rounded-3xl p-3 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 grid gap-3">
                    <span className={`h-8 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                    <div className="flex flex-wrap gap-2">
                        {i.slice(0, 7).map((item) => (
                            <span
                                key={random()}
                                className={`h-6 w-20 rounded-full bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}
                            ></span>
                        ))}
                    </div>
                    <span className={`h-10 w-full rounded-full bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                </div>
                <div className="rounded-3xl p-3 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 grid gap-3">
                    <span className={`h-8 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                    <div className="flex flex-wrap gap-3">
                        {i.slice(0, 10).map((item) => (
                            <span
                                key={random()}
                                className={`w-10 aspect-square rounded-full bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className="rounded-3xl p-3 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 grid gap-3">
                    <span className={`h-8 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                    <span className={`w-full h-6 rounded-lg bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                </div>
                <div className="rounded-3xl p-3 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 grid gap-3">
                    <span className={`h-8 w-1/2 block rounded-lg bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                    <div className="space-y-1">
                        <span className={`w-full h-5 block rounded-md bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                        <span className={`w-[60%] h-5 block rounded-md bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        <div className="flex gap-1">
                            <span className={`h-5 aspect-square block rounded-full bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                            <span className={`h-5 w-full block rounded-md bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                        </div>
                        <div className="flex gap-1">
                            <span className={`h-5 aspect-square block rounded-full bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                            <span className={`h-5 w-full block rounded-md bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                        </div>
                        <div className="flex gap-1">
                            <span className={`h-5 aspect-square block rounded-full bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                            <span className={`h-5 w-full block rounded-md bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}