import { menuBtnType } from "app/_types/Nav";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import SearchBtn from "../SearchComp/SearchBtn";

export default function MenuBtn({ state, setState }: menuBtnType) {
  return (
    <div className="lg:hidden flex gap-2 items-center">
      <SearchBtn name={""} slug={""} />
      <span className="w-[2px] h-6 rounded-full dark:bg-white/50 bg-black/50"></span>
      <button title={'Menu toggler button'} className="p-2" onClick={() => setState(!state)}>
        {state ? (
          <IoClose className="text-2xl hover:scale-125 aspect-square text-red-700" />
        ) : (
          <HiMenuAlt3 className="text-2xl hover:scale-125 aspect-square" />
        )}
      </button>
    </div>
  );
}
