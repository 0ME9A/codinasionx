import ArticleSection from "app/_components/LayoutsComp/ArticleSection";
import SDevProfile from "app/_components/SkeletonComp/Devs/SDevProfile";

export default function Loading() {
    return (
        <ArticleSection style="!bg-transparent !min-h-fit px-2 pb-20">
            <SDevProfile />
        </ArticleSection>
    )
}
