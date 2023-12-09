import { dummyArray, random } from "app/_functions/functions";
import SAtom from "../Common/SAtom";
import Box from "../Common/SBox";

export default function RootFootr() {

    return (
        <footer
            className={`w-full relative z-10 bg-light dark:bg-darkII pb-2`}>
            <div className="xl:container mx-auto flex gap-5 p-3 !rounded-none">
                {
                    dummyArray(20).map(() => <SAtom style="w-24 !rounded-full aspect-square" key={random()} />)
                }

            </div>

            <div className="xl:container mx-auto grid grid-cols-12 gap-5 py-16 relative z-10 px-3">
                <Box style="col-span-12 md:col-span-6 !bg-transparent">
                    <SAtom style="w-full h-24 " />
                </Box>

                <div className="col-span-12 md:col-span-2 grid gap-2 dark:text-white h-fit">
                    <SAtom />
                    <SAtom />
                    <SAtom />
                    <SAtom />
                    <SAtom />
                </div>
                <div className="col-span-12 md:col-span-2 grid gap-2 dark:text-white h-fit">
                    <SAtom />
                    <SAtom />
                    <SAtom />
                    <SAtom />
                </div>
                <div className="col-span-12 md:col-span-2 grid gap-2 dark:text-white h-fit">
                    <SAtom />
                    <SAtom />
                    <SAtom />
                    <SAtom />
                    <SAtom />
                    <SAtom />
                </div>
            </div>
            <div className="xl:container mx-auto flex gap-5 py-16 relative z-10 px-3">
                <SAtom style="w-10 aspect-square" />
                <SAtom style="w-10 aspect-square" />
                <SAtom style="w-10 aspect-square" />
                <SAtom style="w-10 aspect-square" />
            </div>

            <div className="flex items-center justify-center">
                <SAtom style="h-6 w-1/2" />
            </div>
        </footer>
    )
}