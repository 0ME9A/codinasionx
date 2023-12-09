import { dummyArray, random } from "app/_functions/functions";
import SAtom from "../Common/SAtom";
import Line from "../Common/SAtom";
import Box from "../Common/SBox";

export default function SHomeArticle() {
    const i = dummyArray(10);

    return (
        <>
            {i.map(() => (
                <Box style="!shadow-none border-b border-gray-500/50 !rounded-none py-4" key={random()}>
                    <div className="grid gap-2 grid-cols-4 md:grid-cols-6 lg:grid-cols-8 w-full py-2">
                        {i.map(() => <SAtom key={random()} style={'h-6 w-full'} />)}
                    </div>
                    <div className="w-1/2 md:w-1/3 flex">
                        <Line />
                        <Line />
                    </div>
                </Box>
            ))}
        </>
    );
}
