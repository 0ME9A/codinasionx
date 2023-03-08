"use client";
import { callImg } from "app/_functions/functions";
import { useState } from "react";
import ArticleSkeleton from "app/_components/Skeleton/Repo/Article";
import AsideSkeleton from "app/_components/Skeleton/Repo/Aside";
import Article from "app/_components/ReposComp/Readme/Article";
import Aside from "app/_components/ReposComp/Readme/Aside";
import Img from "app/_components/CommonComp/Img";
import useFetch from "app/_hooks/useFetch";

export default function Page({ params }: { params: { repo: string } }) {
  const [aside, setAside] = useState<boolean>(false);
  const repoUrl = `https://api.github.com/repos/codinasion/${params.repo}`;
  const langsUrl = `https://api.github.com/repos/codinasion/${params.repo}/languages`;
  const devsUrl = `https://api.github.com/repos/codinasion/${params.repo}/contributors`;
  const { data: repo, status: repoStatus } = useFetch({ url: repoUrl });
  const { data: lang } = useFetch({ url: langsUrl });
  const { data: devs } = useFetch({ url: devsUrl });
  return (
    <div className="dark:bg-very-dark bg-very-light">
      {repoStatus === 0 || repoStatus === 200 ? (
        <Img
          imgUrl={callImg(params.repo)}
          alt={"repo.name"}
          radius={0}
          style={`h-[300px] md:h-[400px] !aspect-auto`}
          imgSize={[2000, 400]}
        />
      ) : (
        <div className="w-full h-[400px] bg-gradient-to-l from-very-light to-white dark:from-very-dark dark:to-dark animate-pulse"></div>
      )}

      <div className="lg:container mx-auto py-2 space-y-3 flex gap-3 relative">
        {repoStatus === 0 || repoStatus === 200 ? ( <Article state={aside} setState={setAside} repo={repo} />) : ( <ArticleSkeleton /> )}

        {repoStatus === 0 || repoStatus === 200 ? (
          <Aside
            state={aside}
            setState={setAside}
            repo={repo}
            langs={lang}
            devs={devs}
          />
        ) : (
          <AsideSkeleton />
        )}
      </div>
    </div>
  );
}
