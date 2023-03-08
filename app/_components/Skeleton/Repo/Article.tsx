import React from "react";

export default function Article() {
  return (
    <div className=" w-full py-2">
      <div className="p-2 w-full lg:col-span-3 pb-60 ">
        <div className={`mt-5 space-y-2 w-full`}>
          <div className="w-1/2 h-10 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
          <div className="h-24 rounded-lg w-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
        </div>
        <div className={`mt-5 space-y-2 w-full`}>
          <div className="w-1/2 h-10 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
          <div className="h-32 rounded-lg w-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
        </div>
        <div className={`mt-5 space-y-2 w-full`}>
          <div className="w-1/2 h-10 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
          <div className="h-20 rounded-lg w-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
        </div>
        <div className="text-white mt-10 flex flex-col md:flex-row gap-5 items-center">
          <div className="w-full h-[150px] rounded-[50px] aspect-square md:h-auto md:max-w-[300px] md:w-[30%] bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
          <div className={`mt-5 space-y-2 w-full`}>
            <div className="w-1/2 h-10 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
            <div className="h-32 rounded-lg w-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
