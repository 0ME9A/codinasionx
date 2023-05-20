import { menuBtnType } from "app/_types/Nav";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import SearchBtn from "../Links&BtnsComp/SearchBtn";

export default function MenuBtn({ state, setState }: menuBtnType) {
  return (
    <ul className="lg:hidden flex gap-2 items-center">
      <li>
        <SearchBtn name={""} slug={""} />
      </li>
      <li className="w-[2px] h-6 rounded-full dark:bg-white/50 bg-black/50"></li>
      <li>
        <button title={'Menu toggler'} className="p-2" onClick={() => setState(!state)}>
          {state ? (
            <IoClose className="text-2xl hover:scale-125 aspect-square text-red-700" />
          ) : (
            <HiMenuAlt3 className="text-2xl hover:scale-125 aspect-square" />
          )}
        </button>
      </li>
    </ul>
  );
}
