import { theContext } from "app/_context/theContext";
import { useContext } from "react";

type badgeType = {
    BadgeData: {
        text: string;
        highlightText: string | number | boolean;
        style?: string;
        funcVal: any;
        funcState?: string | number | boolean | null;
        clickFunc: Function;
    }
}
export default function Badge({ BadgeData: { text, highlightText, style, funcVal, funcState, clickFunc } }: badgeType) {
    const context = useContext(theContext)
    const dispatch: any = context.dispatch;
    const asideState = { type: "PROGRAMASIDE", payload: false }
    const limit = { type: "PROGRAMLIMIT", payload: 1 }

    return (
        <button
            type={"button"}
            title={`${text} ${highlightText}`}
            onClick={() => {
                clickFunc(funcVal)
                setTimeout(() => {
                    if (context.values.program.compStatus.aside) dispatch(asideState)
                    dispatch(limit)
                }, 500);
            }}
            className={` rounded-xl relative flex gap-2 pl-4 overflow-hidden justify-end items-center h-full text-black dark:text-white hover:bg-very-light dark:hover:bg-very-dark group border border-yellow-500`}
            style={{ outline: text === funcState ? '2px solid' : '0px solid' }}
        >
            <span className="relative z-10">{text}</span>
            <span className="w-1/2 h-full bg-yellow-500 absolute right-0 top-0 "
                style={{ width: text === funcState ? '100%' : 0 }}
            >
            </span>
            <span className="bg-yellow-500 w-full h-full py-1 px-2 pr-4 relative z-10">
                {highlightText}
            </span>
        </button>
    );
}
