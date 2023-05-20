import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export default function QuickScroll({ style }: { style?: string }) {
    return (
        <div className={`p-2 fixed right-1 md:right-[5%] bottom-[2%] lg:bottom-[5%] z-50 ${style}`}>
            <a
                title="scroll to top"
                href="#scroll-to-top"
                className={`p-3 flex items-center justify-center gap-2 font-medium rounded-t-full bg-light dark:bg-dark group dark:text-white dark:shadow-darkShadow-md shadow-lightShadow-md border-2 border-transparent hover:border-black dark:hover:border-white`}>
                <IoIosArrowUp className="group-hover:scale-125" />
            </a>
            <a
                title="scroll to bottom"
                href="#scroll-to-bottom"
                className={`p-3 flex items-center justify-center gap-2 font-medium rounded-b-full bg-light dark:bg-dark group dark:text-white dark:shadow-darkShadow-md shadow-lightShadow-md border-2 border-transparent hover:border-black dark:hover:border-white`}>
                <IoIosArrowDown className="group-hover:scale-125" />
            </a>
        </div>
    )
}