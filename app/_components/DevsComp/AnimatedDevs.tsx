"use client";
import { codinasionDevApiType, devApiCodinasionType } from "app/_types/Devs";
import { container } from "app/_framerVariants/framerVariants";
import { scrollX } from "app/_framerVariants/framerVariants";
import { random } from "app/_functions/functions";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DevCardSkeleton from "app/_components/Skeleton/Devs/DevCardSkeleton";
import DevCard from "app/_components/DevsComp/Card/DevCard";
import BtnLink from "../Links&Btns/BtnLink";
import Header from "../CommonComp/header";


export default function AnimatedDevs({ api, header }: { api: devApiCodinasionType, header: boolean }) {
  const i = Array.from(Array(25).keys());
  const { data, status } = api;
  const [isMount, setMount] = useState(false)

  useEffect(() => setMount(true), [])

  if (!isMount) { return null }
  return isMount && (
    <motion.div
      className="lg:container mx-auto px-3 min-h-screen py-20 my-auto flex flex-col justify-center items-end gap-5"
      variants={container}>
      {header && (
        <Header
          title={"Our Contributors"}
          subTitle={"Developers who contributes in our open-source projects"}
          style={"text-right"}
          animateDirection={"r"}
        />
      )}
      <motion.div
        className="w-full p-2 md:p-5 rounded-[50px] dark:text-white  grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9  xl:grid-cols-12 bg-white/50 dark:bg-black/50"
        variants={scrollX(-50)}
        initial={"hidden"}
        whileInView={"show"}>
        {data.length
          ? data.slice(0, 30).map((item: codinasionDevApiType) => {
            return (
              <DevCard
                key={random()}
                data={{
                  name: item.user.login,
                  avatar: `https://github.com/${item.user.login}.png`,
                  role: item.role
                }} />
            );
          })
          : i.map(() => <DevCardSkeleton key={random()} />)}

      </motion.div>
      <motion.div
        className="w-full"
        variants={scrollX(-50)}
        initial={"hidden"}
        whileInView={"show"}>
        <BtnLink title="Load more content" href={"/developers"} style={`w-full !block text-right`}>Expend...</BtnLink>
      </motion.div>
    </motion.div>
  );
}
