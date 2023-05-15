import { random } from "app/_functions/functions";

export default function Aside() {
  const i = Array.from(Array(20).keys());

  return (
    <div className="p-2 mt-5 absolute md:block md:relative right-0 top-0 w-full bg-very-light dark:bg-very-dark sm:w-[500px] h-fit overflow-y-auto lg:col-span-1 md:!scale-100 md:!opacity-100 dark:text-white origin-top-right overflow-hidden">
      {i.slice(0, 7).map(() => (
        <div key={random()} className={`mt-2 flex gap-2 items-start`}>
          <div className="w-5 rounded-full aspect-square bg-gradient-to-br from-transparent to-white dark:to-dark animate-pulse"></div>
          <div className="h-5 rounded-lg w-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
        </div>
      ))}

      <div className={`mt-5 space-y-2`}>
        <div className="h-8 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
        <div className="w-full p-2 rounded-lg bg-gradient-to-l from-very-light to-white dark:from-very-dark dark:to-dark animate-pulse flex flex-wrap gap-2 items-start">
          {i.slice(0, 7).map((item) => (
            <span
              key={random()}
              className={`h-4 w-24 rounded-lg bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse`}
            ></span>
          ))}
        </div>
      </div>
      <div className={`mt-5 space-y-2`}>
        <div className="h-8 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
        <div className="w-full p-2 rounded-lg bg-gradient-to-l from-very-light to-white dark:from-very-dark dark:to-dark animate-pulse flex flex-wrap gap-2 items-start">
          {i.slice(0, 10).map(() => (
            <span
              key={random()}
              className="h-4 w-24 rounded-lg bg-gradient-to-l from-transparent to-very-light dark:from-transparent dark:to-very-dark animate-pulse"
            ></span>
          ))}
        </div>
      </div>
      <div className={`mt-5 space-y-2`}>
        <div className="h-8 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
        <div className="w-full p-2 rounded-lg bg-gradient-to-l from-very-light to-white dark:from-very-dark dark:to-dark animate-pulse flex flex-wrap gap-2 items-start">
          {i.slice(0, 17).map(() => (
            <span
              key={random()}
              className="w-10 aspect-square rounded-full bg-gradient-to-l from-transparent to-very-light dark:to-very-dark animate-pulse"
            ></span>
          ))}
        </div>
      </div>

      <div className={`mt-5 space-y-2`}>
        <div className="h-6 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-white  dark:to-dark animate-pulse"></div>
        <div className="h-16 w-full rounded-lg bg-gradient-to-l from-very-light to-white dark:from-very-dark dark:to-dark animate-pulse"></div>
      </div>

      <div className={`mt-5 space-y-2`}>
        <div className="h-10 w-full rounded-full bg-gradient-to-l from-very-light to-white dark:from-very-dark dark:to-dark animate-pulse"></div>
        <div className="h-10 w-full rounded-full bg-gradient-to-l from-very-light to-white dark:from-very-dark dark:to-dark animate-pulse"></div>
      </div>
    </div>
  );
}
