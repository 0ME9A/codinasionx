"use client";
import { container, scrollX } from "app/_framerVariants/framerVariants";
import { random, callImg } from "app/_functions/functions";
import { motion } from "framer-motion";
import BasicRepoCard from "app/_components/ReposComp/BasicRepoCard";
import CardSkeleton from "app/_components/Skeleton/Repo/Card";
import Loading from "app/_components/Loading/Loading";
import Button from "app/_components/Links&Btns/Button";
import useInfinite from "app/_hooks/useInfinite";
import useFetch from "app/_hooks/useFetch";

export default function Page() {
  const i = Array.from(Array(5).keys());
  const url = "https://api.github.com/orgs/codinasion/repos";
  const { data, setIncrement, page, status, setStatus } = useFetch({ url, storage: true, per_page: 5 });
  useInfinite({ onUpdate: page, apiCall: setIncrement });

  return (
    <motion.div variants={container} initial={'hidden'} whileInView={'show'} className="p-2 my-24 lg:container mx-auto space-y-5 ">
      <motion.div
        className="rounded-[50px] bg-white/50 dark:bg-black/50 backdrop-blur-sm space-y-3 md:space-y-5"
        variants={scrollX(-50)}
      >
        {data.length > 0
          ? data.map((item: any) => (
              <BasicRepoCard
                key={random()}
                imgUrl={callImg(item.name)}
                title={item.name}
                desc={item.description}
                repoUrl={item.name}
                status={{
                  forks: item.forks,
                  stars: item.stargazers_count,
                }}
              />
            ))
          : i.map(() => <CardSkeleton key={random()} />)}
      </motion.div>
      <motion.div
        variants={scrollX(50)}
        initial={"hidden"}
        whileInView={"show"}
      >
        {status !== 200 && status !== 0 && <Loading basic={true} />}
        {status === 0 && ( <Button title="Load more content" val={200} fun={setStatus}>{`That's all for now`}</Button> )}{" "}
      </motion.div>
    </motion.div>
  );
}
