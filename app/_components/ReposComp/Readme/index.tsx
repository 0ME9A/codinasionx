"use client";
import { RootState } from "app/_components/RTK/Store/store";
import { callImg } from "app/_functions/functions";
import { readmeType } from "app/_types/Repos";
import { useSelector } from "react-redux";
import ArticleSkeleton from "app/_components/Skeleton/Repo/Article";
import AsideSkeleton from "app/_components/Skeleton/Repo/Aside";
import Article from "app/_components/ReposComp/Readme/Article";
import Aside from "app/_components/ReposComp/Readme/Aside";
import AstroImg from "app/_components/CommonComp/Img";


export default function Index({ repoName, repo, lang, devs }: readmeType) {
    const aside = useSelector((state: RootState) => state.counter.commonProperties.projectLayout.aside);

    return (
        <div>
            {repo.status === 200 ? (
                <AstroImg
                    imgUrl={callImg(repoName)}
                    alt={"repo.name"}
                    radius={0}
                    style={`h-[300px] md:h-[400px] !aspect-auto`}
                    imgSize={[2000, 400]}
                />
            ) : (<div className="w-full h-[400px] bg-gradient-to-l from-very-light to-white dark:from-very-dark dark:to-dark animate-pulse"></div>)}

            <div className="lg:container mx-auto py-2 space-y-3 flex gap-3 relative">
                {repo.status === 200 ? (<Article
                    aside={aside}
                    repo={repo.data} />
                ) : (<ArticleSkeleton />)}

                {repo.status === 200 ? (
                    <Aside
                        aside={aside}
                        repo={repo.data}
                        langs={lang.data}
                        devs={devs.data}
                    />
                ) : (<AsideSkeleton />)}
            </div>
        </div>
    );
}
