import { scrollX } from "app/_framerVariants/framerVariants";
import { random } from "app/_functions/functions";
import { devsType } from "app/_types/Devs";
import { motion } from "framer-motion";
import DevCardSkeleton from "app/_components/Skeleton/Devs/DevCard";
import DevCard from "app/_components/DevsComp/DevCard";
import Button from "app/_components/Links&Btns/Button";
import Header from "../CommonComp/header";

export default function Devs({ apiData, header, btn = true }: devsType) {
  const { data, status = 404, setStatus } = apiData;
  const i = Array.from(Array(25).keys());

  return (
    <div className="lg:container mx-auto px-5 py-52 pb-64 flex flex-col justify-center items-end gap-5">
      {header && (
        <Header
          title={"Our Contributors"}
          subTitle={"Developers who contributes in our open-source projects"}
          style={"text-right"}
          animateDirection={"r"}
        />
      )}
      <motion.div
        variants={scrollX(50)}
        initial={"hidden"}
        whileInView={"show"}
        className="w-full p-2 md:p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9  xl:grid-cols-12 bg-very-light dark:bg-very-dark"
      >
        {data.length
          ? data.map((item: any) => {
              return (
                <DevCard
                  key={random()}
                  imgUrl={item.avatar_url}
                  devName={item.login}
                />
              );
            })
          : i.map(() => <DevCardSkeleton key={random()} />)}

        {status !== 200 && status !== 0 && i.slice(0, 10).map(() => <DevCardSkeleton key={random()} />)}
      </motion.div>
      {!status && btn && ( <Button title="Load more content" val={404} fun={setStatus}>{`All results are loaded...`}</Button> )}{" "}
    </div>
  );
}
