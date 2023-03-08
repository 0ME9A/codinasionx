export default function DevCard() {
  return (
    <div className="space-y-1 border-2 border-transparent relative group rounded-2xl overflow-hidden w-full dark:shadow-dark ">
      <div>
        <div className="aspect-square rounded-full w-[80%] scale-[.8] mx-auto bg-gradient-to-l from-transparent to-white  dark:to-dark animate-pulse"></div>
        <div className="h-6 w-[80%] mx-auto rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse"></div>
      </div>
    </div>
  );
}
