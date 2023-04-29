import { theme } from "../States/States";

export function setTheme(dispatch: any) {
    switch (localStorage.getItem("theme")) {
        case null || "light":
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
            dispatch(theme("dark"))
            break;
        default:
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
            dispatch(theme("light"))
            break;
    }
}