import { dummyArray, random } from "app/_functions/functions";
import SAtom from "../Common/SAtom";
import Box from "../Common/SBox";

export default function SHomeArticle() {
    const i = dummyArray(16);

    return (
        <>
            <Box>
                <div className="flex gap-2 w-full py-2 flex-wrap">
                    {i.map(() => <SAtom key={random()} style={'h-6 w-[30%]'} />)}
                </div>
            </Box>
            <SAtom style="w-full h-28" />
        </>
    );
}
