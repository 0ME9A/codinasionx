"use client";
import { dummyArray, random } from "app/_functions/functions";
import { devProjectGitType } from "app/_types/Devs";
import { RootState } from "app/_rtk/Store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ArticleSection from "app/_components/LayoutsComp/ArticleSection";
import SDevCard from "app/_components/SkeletonComp/Devs/SDevCard";
import DevCard from "app/_components/DevelopersComp/Card/DevCard";
import NoRecord from "../../../Loading&ErrorComp/NoRecord";
import useInfinite from "app/_hooks/useInfinite";

export default function DevelopersArticle({
  api,
}: {
  api: { data: devProjectGitType[]; status: number };
}) {
  const [limit, setLimit] = useState<number>(1);
  const [isMount, setMount] = useState(false);
  const { data, status } = api;
  const search = useSelector((state: RootState) => state.counter.search);
  const filteredProjectDev = data;
  // const filteredProjectDev = search.keywords
  //   ? filterProjectDevs(search.keywords, data)
  //   : data;

  useInfinite({ funcVal: limit + 1, funcCall: setLimit });
  useEffect(() => setMount(true), []);

  if (!isMount || status !== 200) {
    return (
      <ArticleSection style="!bg-transparent !min-h-fit p-2 xl:container mx-auto">
        <div className="p-2 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12 rounded-2xl lg:rounded-3xl bg-too-light dark:bg-too-dark">
          {dummyArray(30).map(() => (
            <SDevCard key={random()} />
          ))}
        </div>
      </ArticleSection>
    );
  }

  return (
    <ArticleSection style="!bg-transparent !min-h-fit px-2 xl:container mx-auto py-20">
      <article className="p-2 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12 rounded-2xl lg:rounded-3xl bg-too-light dark:bg-too-dark">
        {!filteredProjectDev && <NoRecord style="!col-span-full" />}
        {filteredProjectDev &&
          filteredProjectDev.slice(0, 50 * limit).map((item) => (
            <DevCard
              key={item.login}
              data={{
                id: item.login,
                avatar: `https://github.com/${item.login}.png`,
              }}
            />
          ))}
      </article>
    </ArticleSection>
  );
}
