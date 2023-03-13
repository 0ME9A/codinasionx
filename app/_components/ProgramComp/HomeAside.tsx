"use client";
import { countTag, tagArray } from "app/_functions/functions";
import { theContext } from "app/_context/theContext";
import { Tag } from "app/_types/_functionsType";
import { ProgramType } from "app/_types";
import { useContext } from "react";
import Loading from "../Loading/Loading";
import Badge from "../CommonComp/Badge";
import Box from "../LayoutsComp/Box";

export default function HomeAside() {
    const context = useContext(theContext);
    const { program: {
        data,
        status,
        compStatus: {
            tag,
            aside
        }
    } } = context.values;
    const countTagData: ProgramType[] = data;
    const langTag: any = status === 200 ? countTag(countTagData) : []
    const langTagArray: Tag[] = tagArray(langTag)

    return (
        <div
            className={`fixed top-28 right-0 lg:sticky lg:top-32 px-2 pt-4 lg:pt-0 lg:px-0 lg:block w-full lg:w-[600px] bg-gray-500/50 backdrop-blur-sm lg:bg-transparent h-full lg:h-fit origin-top-right scale-y-0 lg:!scale-y-100 opacity-0 lg:!opacity-100`}
            style={{ transform: `scaleY(${aside ? 1 : 0})`, opacity: aside ? 1 : 0 }}
        >
            <div className="rounded-3xl bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 ">
                <Box title={"Languages"} style={`p-3`}>
                    {
                        status === 200 ?
                            <div className={`flex flex-wrap gap-2`}>
                                <Badge
                                    key={'all'}
                                    BadgeData={{
                                        text: 'All',
                                        highlightText: data.length,
                                        funcVal: { type: "PROGRAMTAG", payload: 'All' },
                                        funcState: tag,
                                        clickFunc: context.dispatch
                                    }}
                                />
                                {
                                    langTagArray.map((item) => <Badge
                                        key={item.language + item.program}
                                        BadgeData={{
                                            text: item.language,
                                            highlightText: item.program,
                                            funcVal: { type: "PROGRAMTAG", payload: item.language },
                                            funcState: tag,
                                            clickFunc: context.dispatch
                                        }}
                                    />)
                                }
                            </div> : <Loading basic={true} />
                    }
                </Box>
            </div>
        </div >
    )
}