"use client";
import { childScale, container } from "app/_framerVariants/framerVariants";
import { devsType, readmeType } from "app/repositories/[repo]/page";
import { ImgUrl, imgUrl } from "app/_functions/functions";
import { motion } from "framer-motion";
import { useState } from "react";
import Atropos from "atropos/react";
import Article from "./Article";
import Image from "next/image";
import Aside from "./Aside";

type repoReadmeType = {
  repo: readmeType | null;
  langs: object | null;
  devs: devsType | null;
};
export default function Readme({ repo, langs, devs }: repoReadmeType) {
  const [aside, setAside] = useState<boolean>(false);
  return (
    <motion.div
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      className="lg:container mx-auto pt-0 pb-2 space-y-3"
    >
      <motion.div variants={childScale}>
        <Atropos className="relative bg-very-dark dark:bg-very-light">
          <Image
            src={ImgUrl(repo?.name)}
            height="2000"
            width={"4000"}
            alt="repo avatar"
            className="w-full h-[400px] object-cover"
          />
        </Atropos>
      </motion.div>
      <div className="flex gap-3 relative h-auto">
        <Article state={aside} setState={setAside} repo={repo} />
        <Aside
          state={aside}
          setState={setAside}
          repo={repo}
          langs={langs}
          devs={devs}
        />
      </div>
    </motion.div>
  );
}
