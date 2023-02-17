"use client";
import { fetchDaves } from "app/_functions/processFetch";
import { theContext } from "app/_context/theContext";
import { lazy, Suspense, useContext } from "react";
import Loading from "../Loading/Loading";
import Button from "../Links/Button";
import Header from "../CommonComp/header";
import Link from "next/link";
const DevCard = lazy(() => import("./DevCard"));
import { devs } from "@/data/Obj/contributors";
import {
  childScaleII,
  container,
  scrollScale,
  scrollX,
} from "app/_framerVariants/framerVariants";
import { motion } from "framer-motion";

type devsContainerType = {
  forward: boolean;
  header: boolean;
};
export default function Devs({
  forward = true,
  header = true,
}: devsContainerType) {
  const context = useContext(theContext);
  const {
    dispatch,
    values: {
      devs,
      devs: { data },
    },
  } = context;

  // const data: any = devs;
  // // console.log(data);

  return data.length > 0 ? (
    <div className="lg:container mx-auto min-h-[90vh] my-24 px-2 flex justify-center items-end gap-5 flex-col">
      {header && (
        <Header
          title={"Our Contributors"}
          subTitle={"Developers who contributes in our open-source projects"}
          style={"text-right"}
          animateDirection={"r"}
        />
      )}
      <Suspense fallback={<Loading />}>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ amount: 0.3, once: false }}
          variants={scrollX(50)}
        >
          <motion.div
            className="w-full p-2 md:p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9  xl:grid-cols-12 bg-very-light dark:bg-very-dark"
            variants={container}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}
          >
            {data.slice(0, forward ? 30 : -1).map((item: any) => {
              return (
                <DevCard
                  key={crypto.randomUUID()}
                  imgUrl={item.avatar_url}
                  devName={item.login}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </Suspense>
      <motion.div
        className="w-full"
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ amount: 0.6, once: false }}
        variants={scrollX(-50)}
      >
        {forward ? (
          <Link
            href={"/developers"}
            className="w-full p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg flex flex-wrap justify-end items-start uppercase dark:hover:text-white hover:text-lightII bg-very-light dark:bg-very-dark"
          >
            Expend...
          </Link>
        ) : (
          // ""
          <Button val={{ value: devs, dispatch }} fun={fetchDaves}>
            Expend...
          </Button>
        )}
      </motion.div>
    </div>
  ) : (
    <Loading />
  );
}
