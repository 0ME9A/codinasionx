"use client";
import { container } from "app/_framerVariants/framerVariants";
import { scrollX } from "app/_framerVariants/framerVariants";
import { random } from "app/_functions/functions";
import { devsType } from "app/_types/Devs";
import { motion } from "framer-motion";
import { useState } from "react";
import DevCardSkeleton from "app/_components/Skeleton/Devs/DevCard";
import DevCard from "app/_components/DevsComp/DevCard";
import useInfinite from "app/_hooks/useInfinite";


export default function Devs({ api }: devsType) {
    const i = Array.from(Array(25).keys());
    const [limit, setLimit] = useState<number>(1)
    useInfinite({ funcVal: limit + 1, funcCall: setLimit })

    return (
        <motion.div
            className="lg:container mx-auto px-3 min-h-screen py-20 my-auto flex flex-col justify-center items-end gap-5"
            variants={container}>

            <motion.div
                className="w-full p-2 md:p-5 rounded-[50px] dark:text-white  grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9  xl:grid-cols-12 bg-white/50 dark:bg-black/50"
                variants={scrollX(-50)}
                initial={"hidden"}
                whileInView={"show"}>
                {api.data.length
                    ? api.data.slice(0, 50 * limit).map((item: any) => {
                        return (
                            <DevCard
                                key={random()}
                                imgUrl={item.avatar_url}
                                devName={item.login}
                            />
                        );
                    })
                    : i.map(() => <DevCardSkeleton key={random()} />)}
            </motion.div>
        </motion.div>
    );
}
