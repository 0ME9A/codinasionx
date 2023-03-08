import { random } from "app/_functions/functions";
import { langsList } from "@/data/lang";

export default function Langs() {
  return (
    <div className="relative overflow-hidden">
      <ul className="flex text-white text-2xl sm:text-3xl lg:text-5xl gap-3 sm:gap-5 lg:gap-10 items-center justify-evenly p-5 md:p-8 relative" role={"img"} aria-label={'supported languages icons'}>
        {langsList &&
          langsList.map((item) => (
            <li key={random()}>{item.lang}</li>
          ))}
      </ul>
      <div className="w-full h-full bg-very-light/50 dark:bg-very-dark/30 absolute top-0 left-0"></div>
    </div>
  );
}
