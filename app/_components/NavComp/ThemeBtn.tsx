import { FaMoon, FaSun } from "react-icons/fa";
import { themeBtnType } from "app/_types/Nav";
import setThemeFun from "app/_functions/functions";

export default function ThemeBtn({ dispatch, activeTheme }: themeBtnType) {
  return (
    <button
      title={`Theme toggler`}
      className="p-2"
      onClick={() => {
        setThemeFun(dispatch);
      }}
    >
      {activeTheme === "dark" ? (
        <FaSun className="w-6 hover:scale-125" />
      ) : (
        <FaMoon className="w-6 hover:scale-125" />
      )}
    </button>
  );
}
