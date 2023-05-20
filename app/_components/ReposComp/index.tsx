import HomeArticle from "./HomeArticles";
import HomeAside from "./HomeAside";

export default function Index() {
    return (
        <section className={"flex xl:container mx-auto px-2 relative py-20"}>
            <HomeArticle />
            <HomeAside /> 
        </section>
    )
}