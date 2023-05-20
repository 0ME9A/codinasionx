import { programApiType } from "app/_types/Program";
import RelatedProgram from "app/_components/ProgramComp/RelatedProgram";
import ProgramArticle from "./ProgramArticle";
import ProgramAside from "./ProgramAside";


export default function Index({ api: { data, status } }: programApiType) {
    return (
        <>
            <section className={"flex xl:container mx-auto px-2 relative mt-20"}>
                <ProgramArticle api={{data, status}} />
                <ProgramAside api={{data, status}} />
            </section>

            <RelatedProgram data={data} />
        </>
    );
}
