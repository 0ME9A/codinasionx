import { dummyArray, random } from "app/_functions/functions";
import Box from "../Common/SBox";
import Line from "../Common/SAtom";

export default function SHomeArticle() {
    const i = dummyArray(10);

    return (
        <div className="w-full">
            {i.map(() => (
                <Box style="!shadow-none !rounded-none border-b border-gray-500/50 py-4" key={random()}>
                    <Line style="h-24 w-full" />
                    <div className="flex w-1/3">
                        <Line style="h-8 w-full" />
                        <Line style="h-8 w-full" />
                    </div>
                </Box>
            ))}
        </div>
    );
}
