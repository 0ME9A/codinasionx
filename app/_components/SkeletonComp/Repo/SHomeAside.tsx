import { dummyArray, random } from "app/_functions/functions";
import SAtom from "../Common/SAtom";
import Box from "../Common/SBox";

export default function SHomeAside() {
    const i = dummyArray(20);

    return (
        <>
            <Box>
                <SAtom style="w-[100%] h-24" />
            </Box>
            <Box>
                <div className="flex flex-wrap gap-3 pt-2">
                    {i.slice(0, 17).map(() => (
                        <SAtom style="h-8 aspect-square" key={random()} />
                    ))}
                </div>
            </Box>
            <Box>
                <SAtom style="w-[100%] h-24" />
                <SAtom style="w-[100%] h-24" />
            </Box>
        </>
    );
}
