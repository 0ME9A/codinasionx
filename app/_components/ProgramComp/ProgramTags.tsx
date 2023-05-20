import { countTag, tagArray } from "app/_functions/functions";
import { Tag, tagCountType } from "app/_types/_functionsType";
import { programProperties } from "app/_rtk/States/States";
import { useDispatch, useSelector } from "react-redux";
import { programType } from "app/_types/Program";
import { RootState } from "app/_rtk/Store/store";
import Badge from "../Links&BtnsComp/Badge";
import Box from "../LayoutsComp/Box";


export default function ProgramTags({ data }: { data: programType[] | null }) {
    const dispatch = useDispatch()
    const program = useSelector((state: RootState) => state.counter.program)
    const tag = useSelector((state: RootState) => state.counter.programProperties.tag)
    const langTag: tagCountType | null = program.status === 200 ? countTag(program.data) : null
    const langTagArray: Tag[] = tagArray(langTag);

    if (!Array.isArray(data) || data.length === 0) return <></>

    return (
        <Box title={"Languages"}>
            <ul className={`flex flex-wrap gap-2 max-h-[70vh] overflow-auto p-1`}>
                <li>
                    <Badge
                        key={'all'}
                        BadgeData={{
                            text: 'All',
                            highlightText: program.data.length,
                            funcVal: programProperties({ type: "TAG", value: 'All' }),
                            funcState: tag,
                            clickFunc: dispatch
                        }}
                    />
                </li>
                {langTagArray.map((item: Tag) =>
                    <li key={item.language + item.program}>
                        <Badge
                            BadgeData={{
                                text: item.language,
                                highlightText: item.program,
                                funcVal: programProperties({ type: "TAG", value: item.language }),
                                funcState: tag,
                                clickFunc: dispatch
                            }}
                        />
                    </li>
                )}
            </ul>
        </Box>
    )
}