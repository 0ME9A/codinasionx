import setThemeFun from "app/_functions/functions";
import { FaMoon, FaSun } from "react-icons/fa";

type themeBtnType = {
  activeTheme: string;
  dispatch: () => void;
};
export default function ThemeBtn({ dispatch, activeTheme }: themeBtnType) {
  return (
    <button
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
