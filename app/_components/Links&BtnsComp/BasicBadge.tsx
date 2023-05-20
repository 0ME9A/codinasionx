import { badgeType } from "app/_types/Links&Btns";


export default function Badge({ BadgeData: { text, highlightText, funcVal, clickFunc, funcState }, style }: badgeType) {
    return (
        <button
            type={"button"}
            title={`${text} ${highlightText}`}
            onClick={() => {clickFunc(funcVal)}}
            className={` rounded-xl relative block py-1 overflow-hidden h-full text-black dark:text-white hover:bg-very-light dark:hover:bg-very-dark group border border-yellow-500 ${style}`}
            style={{ outline: text === funcState ? '2px solid' : '0px solid' }}>
            <span className="relative z-10 px-2 pl-4">{text}</span>
            <span className="w-1/2 h-full bg-yellow-500 absolute right-0 top-0 "
                style={{ width: text === funcState ? '100%' : 0 }}>
            </span>
            <span className="bg-yellow-500 w-full h-full py-1 px-2 pr-4 relative z-10" style={{ display: "ruby-base" }}>
                {highlightText}
            </span>
        </button>
    );
}
