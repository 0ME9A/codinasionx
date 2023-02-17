"use client";
import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import Loading from "../Loading/Loading";
import Button from "../Links/Button";
import { fetchData } from "app/_functions/functions";
import {
  usePathname,
  useSearchParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
  useRouter,
} from "next/navigation";
import { devs } from "@/data/Obj/contributors";
import { container, scrollX } from "app/_framerVariants/framerVariants";
import { motion } from "framer-motion";

const DevCard = lazy(() => import("./DevCard"));

export default function Devs() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<string[]>([]);
  const pathName = usePathname();
  const router = useRouter();
  const param = pathName?.split("/").at(2);

  useEffect(() => {
    async function repoDevs() {
      if (param) {
        const url = `https://api.github.com/repos/codinasion/${param}/contributors?page=${
          page + 1
        }`;
        const newData = await fetchData(url);
        newData && setData([...data, ...newData]);
      } else {
        router.replace("/repositories/");
      }

      //     console.log(newData);
    }

    repoDevs();
  }, [page]);

  // console.log(devs)

  return devs.length > 0 ? (
    <div className="lg:container mx-auto min-h-[90vh] my-24 px-2 flex justify-center items-end gap-5 flex-col">
      <Suspense fallback={<Loading />}>
        <motion.div
          variants={scrollX(50)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ amount: 0.3, once: false }}
          className={"w-full"}
        >
          <motion.div
            className="w-full p-2 md:p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9  xl:grid-cols-12 bg-very-light dark:bg-very-dark"
            variants={container}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            {data.map((item: any) => (
              <DevCard
                imgUrl={item.avatar_url}
                devName={item.login}
                key={crypto.randomUUID()}
                target={"_blank"}
              />
            ))}
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
        <Button val={page + 1} fun={setPage} localState={true}>
          Expend...
        </Button>
      </motion.div>
    </div>
  ) : (
    <Loading />
  );
}
