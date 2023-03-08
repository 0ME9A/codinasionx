export default function Card() {
  return (
    <div
      className={`grid grid-cols-12 gap-2 md:gap-8 xl:gap-10 rounded-[50px] hover:bg-very-light dark:hover:bg-very-dark mx-auto`}
    >
      <div
        className={`col-span-12 lg:col-span-3 lg:aspect-square aspect-video w-full rounded-[50px] bg-very-dark dark:bg-very-light dark:shadow-darkShadow-lg shadow-lightShadow-lg animate-pulse`}
      ></div>
      <div
        className={`col-span-12 md:col-span-9 rounded-[50px] flex flex-col items-start gap-3 p-2 py-5 justify-center text-black dark:text-white `}
      >
        <div className={`mt-5 space-y-2 w-full`}>
          <div className="w-1/2 h-10 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
          <div className={`pt-2 w-full flex gap-5`}>
            <div className="w-24 h-6 rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
            <div className="w-24 h-6 rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
          </div>
          <div className="h-20 rounded-lg w-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
          <div className={`pt-2 w-full flex gap-5`}>
            <div className="w-32 h-10 rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
            <div className="w-32 h-10 rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
          </div>
        </div>

        <div className="flex gap-2 mt-2 lg:gap-5">
          <div className="rounded-full h-10 w-32"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
