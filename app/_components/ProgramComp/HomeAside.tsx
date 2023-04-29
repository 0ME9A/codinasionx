"use client";
import { countTag, tagArray } from "app/_functions/functions";
import { Tag, tagCountType } from "app/_types/_functionsType";
import { programProperties } from "../RTK/States/States";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/Store/store";
import GitHubCard from "../CommonComp/GitHubCard";
import Loading from "../Loading/Loading";
import Badge from "../Links&Btns/Badge";
import Box from "../LayoutsComp/Box";

export default function HomeAside() {
    const dispatch = useDispatch()
    const program = useSelector((state: RootState) => state.counter.program)
    const tag = useSelector((state: RootState) => state.counter.programProperties.tag)
    const properties = useSelector((state: RootState) => state.counter.programProperties)
    const langTag: tagCountType | null = program.status === 200 ? countTag(program.data) : null
    const langTagArray: Tag[] = tagArray(langTag)

    return (
        <div
            className={`fixed top-28 right-0 lg:sticky lg:top-32 px-2 py-4 lg:pt-0 lg:px-0 lg:block w-full lg:w-[600px] !grid gap-3 h-fit bg-gray-500/50 backdrop-blur-sm lg:bg-transparent lg:h-fit origin-top-right scale-y-0 lg:!scale-y-100 opacity-0 lg:!opacity-100`}
            style={{ transform: `scaleY(${properties.aside ? 1 : 0})`, opacity: properties.aside ? 1 : 0 }}>
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
                        {
                            langTagArray.map((item) => <Badge
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