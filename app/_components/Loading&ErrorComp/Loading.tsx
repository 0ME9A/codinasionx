export default function Loading({ basic = false, style }: { basic?: boolean, style?: string }) {
  return !basic ? (
    <section className={`p-20 min-h-[90vh] flex items-center justify-center mx-auto lg:container text-black dark:text-white ${style}`}>
      <header className="animate-pulse flex gap-2">
        <h2 className="text-3xl animate-glowTextDark dark:animate-glowTextLight">Codinasion
          <span className="animate-ping">.</span>
          <span className="animate-ping delay-75">.</span>
          <span className="animate-ping delay-150">.</span>
        </h2>
      </header>
    </section>
  ) : (
    <span className="border-2 w-8 block mx-auto border-black dark:border-white !border-t-transparent rounded-full aspect-square animate-spin"></span>
  );
}
