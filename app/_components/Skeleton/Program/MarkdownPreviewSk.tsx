import { random } from "app/_functions/functions";

export default function MarkdownPreviewSk() {
  const i = Array.from(Array(20).keys());

  return (
    <div className={`w-full min-h-screen px-2 md:px-4 pt-5 rounded-3xl bg-white/50 dark:bg-black/60 dark:lg:bg-black/50 backdrop-blur-sm pb-5 overflow-hidden`}>
      <div className="w-1/2 h-10 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
      <div className="py-5 space-y-2">
        <span className="block h-5 rounded-md w-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></span>
        <span className="block h-5 rounded-md w-[60%] bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></span>
        <span className="block h-5 rounded-md w-[80%] bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></span>
        <span className="block h-5 rounded-md w-[30%] bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></span>
      </div>
      <div className="h-32 rounded-xl w-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>

      <div className="inline-flex flex-wrap gap-2 h-fit pt-10 rounded-xl p-2 shadow-md ">
        {i.slice(0, 15).map(item => <span className="h-8 w-24 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse" key={random()}></span>)}
      </div>
      <div className="w-full h-52 mt-5 rounded-xl bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>

      <div className="pt-10">
        <span className="block h-5 rounded-md w-[30%] bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></span>
        <div className={`mt-5 space-y-2 w-full`}>
          <div className="flex gap-2">
            <div className="w-28 h-8 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
            <div className="w-28 h-8 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
          </div>
          <div className="h-32 rounded-xl w-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
