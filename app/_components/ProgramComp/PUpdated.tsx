import { dateFunc } from "app/_functions/functions";
import Box from "../LayoutsComp/Box";

export default function PUpdated({ last_updated }: { last_updated: Date | string }) {
    return (
        <Box
            title={"Last Updated"}
            titlePlus={dateFunc(last_updated)}
            style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50`}>
            <p className="opacity-50">{dateFunc(last_updated)}</p>
        </Box>
    )
}