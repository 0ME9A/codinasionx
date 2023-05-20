import { dateFunc } from "app/_functions/functions";
import Box from "../LayoutsComp/Box";


export default function PUpdated({ last_updated }: { last_updated: Date | string }) {
    if (!last_updated) return <></>

    return (
        <Box
            title={"Last Updated"}
            titlePlus={dateFunc(last_updated)}>
            <p className="opacity-50">{dateFunc(last_updated)}</p>
        </Box>
    )
}