"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import { theContext } from "app/_context/theContext";
import { random } from "app/_functions/functions";
import { useContext, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import ProgramCardSkeleton from "../Skeleton/Program/ProgramCard";
import BasicBtn from "../Links&Btns/BasicBtn";

export default function Search() {
    const context = useContext(theContext);
    const segment = useSelectedLayoutSegment();
    const inputRef = useRef<HTMLInputElement>(null);
    const i: number[] = Array.from(Array(10).keys());
    const dispatch: any = context.dispatch;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (segment === 'program' && inputRef.current?.value) {
            dispatch({ type: "PROGRAMSEARCH", payload: inputRef.current?.value })
            dispatch({ type: "PROGRAMTAG", payload: "All" })
        }
    };

    return (
        <div className="w-full h-screen fixed top-0 left-0 border-w z-[999] text-black dark:text-white bg-white/50 dark:bg-black/50 backdrop-blur-sm flex justify-center items-center p-2">
            <BasicBtn
                title={"Close search box"}
                value={{ type: "SEARCH", payload: false }}
                style={"absolute right-2 lg:right-5 top-5 h-fit text-2xl !text-red-500 group"}
                clickFunc={dispatch}
            >
                <IoClose className="group-hover:scale-110" />
            </BasicBtn>
            <div className="grid gap-2 p-2 rounded-2xl max-w-[700px] w-full bg-very-light dark:bg-very-dark shadow-lg shadow-gray-500/30">
                <form className="flex shadow-lg rounded-xl shadow-gray-500/50" onSubmit={handleSubmit}>
                    <input type="search"
                        name="search"
                        id="search"
                        autoFocus
                        ref={inputRef}
                        placeholder={`Search ${segment}`}
                        className="w-full p-4 py-3 rounded-xl rounded-r-none text-xl bg-transparent"
                    />
                    <button
                        type="submit"
                        value="Search"
                        className="w-fit py-2 px-7 rounded-xl rounded-l-none text-xl cursor-pointer border-2 border-transparent hover:bg-light dark:hover:bg-dark"
                    >
                        <FiSearch />
                    </button>
                </form>
                <div className="max-h-[80vh] overflow-y-auto rounded-xl">
                    {i.map(item => <ProgramCardSkeleton key={random()} />)}
                </div>
            </div>
        </div>
    )

}