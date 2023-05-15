import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function QuickScroll({ style }: { style?: string }) {
    return (
        <div className="p-2 fixed right-0 lg:right-[2%] bottom-[5%] z-50">
            <a
                title="scroll to top"
                href="#scroll-to-top"
                className={`p-2 flex items-center justify-center gap-2 font-medium rounded-t-full bg-light dark:bg-dark group dark:text-white dark:shadow-darkShadow-md shadow-lightShadow-md`}>
                <IoIosArrowUp className="group-hover:scale-125" />
            </a>
            <a
                title="scroll to bottom"
                href="#scroll-to-bottom"
                className={`p-2 flex items-center justify-center gap-2 font-medium rounded-b-full bg-light dark:bg-dark group dark:text-white dark:shadow-darkShadow-md shadow-lightShadow-md`}>
                <IoIosArrowDown className="group-hover:scale-125" />
            </a>
        </div>
    )
}