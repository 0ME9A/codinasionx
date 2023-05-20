import { random } from "app/_functions/functions";
import { AiOutlinePlus } from "react-icons/ai";
import BtnLink from "../Links&BtnsComp/BtnLink";
import Box from "../LayoutsComp/Box";
import Tag from "../CommonComp/Tag";


type PSolutionsType = {
    languages: string[];
    track_id: string | number;
}

export default function PSolutions({ languages, track_id }: PSolutionsType) {
    if (!languages || !track_id) return <></>

    return (
        <Box title={"Available Solutions"}>
            <ul className={`flex flex-wrap gap-2`}>
                {languages.map((tag: string) =>
                    <Tag tag={tag} key={random()} />
                )}
            </ul>
            <BtnLink
                href={`https://github.com/codinasion/program/issues/${track_id}`}
                title={"Add a solution"}
                style={""}
                target={"_blank"}>
                <AiOutlinePlus className="inline-block w-5 h-5" /> Add Solution
            </BtnLink>
        </Box>
    )
}