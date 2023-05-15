export default function DevsInfoSkeleton() {
  return (
    <div className="p-2 lg:container mx-auto">

      <div className="p-2 md:p-10 lg:p-16 justify-center flex flex-col md:flex-row gap-3 items-start md:gap-5  bg-gradient-to-tr from-light via-very-light to-very-light dark:from-darkII dark:via-very-dark relative dark:to-very-dark bg-darkII rounded-3xl ">
        <div className={`w-[20%] md:max-w-[300px] !rounded-full aspect-square bg-gradient-to-l from-transparent to-white  dark:to-dark animate-pulse`}></div>
        <div className={`dark:text-white pt-0 md:pt-20 w-full md:w-[60%] lg:w-[40%]`}>
          <div className={`mt-5 space-y-2`}>
            <div className="h-10 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-white  dark:to-dark animate-pulse"></div>
            <div className="h-6 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-white  dark:to-dark animate-pulse"></div>
            <div className="h-6 w-1/3 mt-5 rounded-lg bg-gradient-to-l from-transparent to-white  dark:to-dark animate-pulse"></div>
            <div className="h-20 w-full p-2 grid grid-cols-3 gap-3 rounded-lg bg-gradient-to-l from-very-light to-white dark:from-very-dark dark:to-dark animate-pulse">
              <div className="h-6 w-full rounded-lg bg-gradient-to-l from-transparent to-very-light  dark:to-very-dark animate-pulse"></div>
              <div className="h-6 w-full rounded-lg bg-gradient-to-l from-transparent to-very-light  dark:to-very-dark animate-pulse"></div>
              <div className="h-6 w-full rounded-lg bg-gradient-to-l from-transparent to-very-light  dark:to-very-dark animate-pulse"></div>
              <div className="h-6 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-very-light  dark:to-very-dark animate-pulse"></div>
              <div className="h-6 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-very-light  dark:to-very-dark animate-pulse"></div>
              <div className="h-6 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-very-light  dark:to-very-dark animate-pulse"></div>
            </div>
          </div>

          <div className={`mt-5 grid grid-cols-2 gap-2`}>
            <div className="h-6 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-white  dark:to-dark animate-pulse"></div>
            <div className="h-6 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-white  dark:to-dark animate-pulse"></div>
            <div className="h-6 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-white  dark:to-dark animate-pulse"></div>
            <div className="h-6 w-1/2 rounded-lg bg-gradient-to-l from-transparent to-white  dark:to-dark animate-pulse"></div>
          </div>
        </div>
        <div className={" md:self-start order-5 md:absolute md:top-5 md:left-5 w-32 h-10 rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"}></div>
      </div>
    </div>
  )
}
