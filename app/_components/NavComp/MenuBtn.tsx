"use client";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { theContext } from "app/_context/theContext";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import ThemeBtn from "./ThemeBtn";

type menuBtnType = {
  setState: Dispatch<SetStateAction<boolean>>;
  state: boolean;
};
export default function MenuBtn({ state, setState }: menuBtnType) {
  const [menu, setMenu] = useState<boolean>(false);
  const context: any = useContext(theContext);

  return (
    <div className="lg:hidden flex gap-2 items-center">
      <ThemeBtn dispatch={context.dispatch} activeTheme={context.values.theme} />
      <span className="w-[2px] h-6 rounded-full dark:bg-white/50 bg-black/50"></span>
      <button className="p-2" onClick={() => setState(!state)}>
        {state ? (
          <IoClose className="text-2xl hover:scale-125 aspect-square text-red-700" />
        ) : (
          <HiMenuAlt3 className="text-2xl hover:scale-125 aspect-square" />
        )}
      </button>
    </div>
  );
}
