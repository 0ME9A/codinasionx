"use client";
import { KEYWORDS, TAB, WINDOW } from "app/_rtk/stateType";
import { searchProperties } from "app/_rtk/States/States";
import { useDispatch, useSelector } from "react-redux";
import { random } from "app/_functions/functions";
import { RootState } from "app/_rtk/Store/store";
import { tabsType } from "app/_types/Search";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { tabs } from "@/data/search";
import { useRef } from "react";
import BasicBtn from "../Links&BtnsComp/BasicBtn";
import SDevelopers from "./SDevelopers";
import SPrograms from "./SPrograms";
import SRepos from "./SRepos";


export default function Search() {
    const search = useSelector((state: RootState) => state.counter.search)
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch()

    const handleSearch = (tab: string) => {
        const value = inputRef.current?.value
        if (value) {
            dispatch(searchProperties({ type: KEYWORDS, value }))
            dispatch(searchProperties({ type: TAB, value: tab }))
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, tab: string | null) => {
        event.preventDefault();
        tab && handleSearch(tab);
    };

    return search.window ? (
        <section className="w-full h-screen fixed top-0 left-0 z-[999] text-black dark:text-white bg-gray-500/50 backdrop-blur-md p-2 space-y-2">
            <div className="w-full sm:px-5 flex justify-end">
                <BasicBtn
                    title={"Close search box"}
                    value={{ type: "SEARCH", payload: false }}
                    style={"h-fit text-2xl !text-red-500 group"}
                    clickFunc={() => dispatch(searchProperties({ type: WINDOW, value: false }))}>
                    <IoClose className="group-hover:scale-110" />
                </BasicBtn>
            </div>
            <section className="grid content-start gap-2 p-2 rounded-2xl max-w-[700px] w-full h-[85vh] mx-auto bg-very-light my-auto dark:bg-very-dark shadow-lg shadow-gray-500/30">
                <form className="flex shadow-lg rounded-xl relative shadow-gray-500/50" onSubmit={(e) => handleSubmit(e, search.tab)}>
                    <input type="search"
                        name="search"
                        id="search"
                        autoFocus
                        ref={inputRef}
                        placeholder={`Search ${search.tab}`}
                        className="w-full p-4 py-3 pr-24 rounded-xl text-xl bg-transparent"
                    />
                    <button
                        type="submit"
                        value="Search"
                        className="w-fit py-2 px-5 rounded-lg text-xl absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer border-2 border-transparent bg-light/50 dark:bg-dark/50 hover:bg-light hover:dark:bg-dark group">
                        <FiSearch className="group-hover:scale-110" />
                    </button>
                </form>
                <ul className="flex gap-1 flex-wrap border-b border-gray-500/50 py-1 font-thin">
                    {tabs.map((item: tabsType) =>
                        <li key={random()}>
                            <button                                
                                type="button"
                                title={`${item.title} tab`}
                                disabled={search.tab === item.tab}
                                onClick={() => handleSearch(item.tab)}
                                className={`px-2 p-1 rounded-lg shadow-lg shadow-gray-500/30 focus:bg-light/50 focus:dark:bg-dark/50 disabled:bg-light/50 disabled:dark:bg-dark/50`}>
                                {item.title}
                            </button>
                        </li>
                    )}
                </ul>
                <section className="h-auto overflow-y-auto rounded-xl">
                    {search.tab === 'programs' && <SPrograms />}
                    {search.tab === 'repositories' && <SRepos />}
                    {search.tab === 'developers' && <SDevelopers />}
                    {/* {search.tab === 'linkfree-og' && <SLinkfreeOg />}
                    {search.tab === 'good-1st-issue' && <SGood1stIssue />} */}
                </section>
            </section>
        </section>
    ) : null
}