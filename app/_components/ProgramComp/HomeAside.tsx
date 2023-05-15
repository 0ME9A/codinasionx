"use client";
import { countTag, tagArray } from "app/_functions/functions";
import { Tag, tagCountType } from "app/_types/_functionsType";
import { programProperties } from "../RTK/States/States";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/Store/store";
import { useEffect, useState } from "react";
import GitHubCard from "../CommonComp/GitHubCard";
import Loading from "../Loading/Loading";
import Badge from "../Links&Btns/Badge";
import Box from "../LayoutsComp/Box";


export default function HomeAside() {
    const dispatch = useDispatch()
    const program = useSelector((state: RootState) => state.counter.program)
    const tag = useSelector((state: RootState) => state.counter.programProperties.tag)
    const { aside } = useSelector((state: RootState) => state.counter.commonProperties.projectLayout)
    const langTag: tagCountType | null = program.status === 200 ? countTag(program.data) : null
    const langTagArray: Tag[] = tagArray(langTag);
    const [isMount, setMount] = useState(false);

    useEffect(() => setMount(true), [])

    if (!isMount) return (
        <div
            className={`fixed right-0 lg:sticky top-28 lg:top-32 pt-4 px-2 lg:px-0 flex flex-col gap-2 w-full lg:w-[600px] min-h-screen lg:min-h-fit h-full bg-gray-500/50 backdrop-blur-sm lg:bg-transparent !lg:h-fit origin-top-right scale-y-0 lg:!scale-y-100 opacity-0 lg:!opacity-100`}
            style={{ transform: `scaleY(${aside ? 1 : 0})`, opacity: aside ? 1 : 0 }}>
            <Loading basic={true} />
        </div>
    )

    return (
        <div
            className={`fixed right-0 lg:sticky top-28 lg:top-32 pt-4 lg:pt-0 px-2 lg:px-0 flex flex-col gap-2 w-full lg:w-[600px] min-h-screen lg:min-h-fit h-full bg-gray-500/50 backdrop-blur-sm lg:bg-transparent !lg:h-fit origin-top-right scale-y-0 lg:!scale-y-100 opacity-0 lg:!opacity-100`}
            style={{ transform: `scaleY(${aside ? 1 : 0})`, opacity: aside ? 1 : 0 }}>
            <Box title={"Languages"} style={`p-2 pt-4 rounded-3xl bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50 `}>
                {program.status === 200 ?
                    <div className={`flex flex-wrap gap-2 max-h-[70vh] overflow-auto p-1`}>
                        <Badge
                            key={'all'}
                            BadgeData={{
                                text: 'All',
                                highlightText: program.data.length,
                                funcVal: programProperties({ type: "TAG", value: 'All' }),
                                funcState: tag,
                                clickFunc: dispatch
                            }} />
                        {langTagArray.map((item) => <Badge
                            key={item.language + item.program}
                            BadgeData={{
                                text: item.language,
                                highlightText: item.program,
                                funcVal: programProperties({ type: "TAG", value: item.language }),
                                funcState: tag,
                                clickFunc: dispatch
                            }} />)
                        }
                    </div> : <Loading basic={true} />
                }
            </Box>
            <GitHubCard repo={"codinasion/program"} />
        </div >
    )
}