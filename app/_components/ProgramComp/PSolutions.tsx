import { random } from "app/_functions/functions";
import { AiOutlinePlus } from "react-icons/ai";
import Tag from "../CommonComp/Tag";
import Box from "../LayoutsComp/Box";
import BtnLink from "../Links&Btns/BtnLink";

type PSolutionsType = {
    languages: string[];
    track_id: string | number;
}

export default function PSolutions({ languages, track_id }: PSolutionsType) {
    return (
        <Box title={"Available Solutions"} style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 grid gap-2`}>
            {/* {<ul className={`flex flex-wrap gap-2`}>{tags.map((tag: string) => <Tag tag={tag} key={random()} />)}</ul>} */}
            {languages.length && <ul className={`flex flex-wrap gap-2`}>{languages.map((tag: string) => <Tag tag={tag} key={random()} />)}</ul>}
            <BtnLink
                url={`https://github.com/codinasion/program/issues/${track_id}`}
                title={"Add a solution"}
                style={""}
                target={"_blank"}>
                <AiOutlinePlus className="inline-block w-5 h-5" /> Add Solution
            </BtnLink>
        </Box>
    )
}