"use client";
import { searchProperties } from "../RTK/States/States";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/Store/store";
import { BsSearch } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { searchBtnType } from "app/_types/Search";

export default function SearchBtn({ name, slug }: searchBtnType): JSX.Element {
    const search = useSelector((state: RootState) => state.counter.search)
    const dispatch = useDispatch()

    const handleSearch = () => {
        dispatch(searchProperties({ type: "WINDOW", value: true }))
        dispatch(searchProperties({ type: "TAB", value: slug }))
    }
    const handleCleanSearch = (event: React.MouseEvent<SVGElement, MouseEvent>): void => {
        event.stopPropagation();
        dispatch(searchProperties({ type: "KEYWORDS", value: null }));
        dispatch(searchProperties({ type: "TAB", value: slug }))
    };

    useEffect(() => {
        dispatch(searchProperties({ type: "KEYWORDS", value: null }))
    }, [])

    return slug ? (
        <button
            className={`max-w-[200px] sm:w-[200px] flex items-center justify-between px-2 p-1 rounded-lg group shadow-gray-500/50 shadow-lg`}
            title={`Search ${name} `}
            onClick={handleSearch}>
            <span className="hidden sm:inline opacity-50">{search.keywords ? search.keywords : `search ${name}`}</span>
            {search.keywords ? <IoClose title="Clear search" className="group-hover:scale-110 text-red-500 rounded-sm" onClick={handleCleanSearch} /> : <BsSearch className="group-hover:scale-110" />}
        </button>
    ) : (
        <button
            type={`button`}
            title={`Search program, repositories and developers`}
            className={`group p-2`}
            onClick={() => dispatch(searchProperties({ type: 'WINDOW', value: true }))}>
            <BsSearch className="group-hover:scale-125" />
        </button>
    )
}