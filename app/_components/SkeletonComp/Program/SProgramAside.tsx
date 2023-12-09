import { dummyArray, random } from "app/_functions/functions";
import SAtom from "../Common/SAtom";
import Box from "../Common/SBox";

export default function ProgramAsideSk() {
    const i = dummyArray(10);

    return (
        <>
            <Box>
                <div className="flex gap-2 w-full py-2 flex-wrap">
                    {i.map(() => <SAtom key={random()} style={'h-6 w-[30%]'} />)}
                </div>
                <SAtom key={random()} style={'h-10 w-full'} />
            </Box>
            <Box>
                <div className="flex flex-wrap gap-3 pt-2">
                    {i.slice(0, 17).map(() => (
                        <SAtom style="h-8 aspect-square" key={random()} />
                    ))}
                </div>
            </Box>
            <Box>
                <SAtom />
            </Box>
            <SAtom key={random()} style={'h-32 w-full'} />
        </>
    );
}