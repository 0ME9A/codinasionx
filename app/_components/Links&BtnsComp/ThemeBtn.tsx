"use client";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "app/_functions/functions";
import { RootState } from "app/_rtk/Store/store";
import { FaMoon, FaSun } from "react-icons/fa";


export default function ThemeBtn() {
  const theme = useSelector((state: RootState) => state.counter.theme)
  const dispatch = useDispatch()

  return (
    <button
      title={`Theme toggler`}
      onClick={() => setTheme(dispatch)}
      className="p-2">
      {theme === "dark" ? (<FaSun className="hover:scale-125" />) : (<FaMoon className="hover:scale-125" />)}
    </button>
  );
}
