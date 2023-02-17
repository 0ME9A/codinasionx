type loadingType = {
  basic?: boolean;
};
export default function Loading({ basic = false }: loadingType) {
  return !basic ? (
    <div className="p-20 min-h-[90vh] flex items-center justify-center mx-auto lg:container text-white">
      <span className="border-2 w-32 block mx-auto border-black dark:border-white !border-t-transparent rounded-full aspect-square animate-spin "></span>
    </div>
  ) : (
    <span className="border-2 w-8 block mx-auto border-black dark:border-white !border-t-transparent rounded-full aspect-square animate-spin"></span>
  );
}
