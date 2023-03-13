"use client";
import { dispatchProgram } from "app/_functions/DispatchFetch";
import { useSelectedLayoutSegment } from 'next/navigation';
import { useContext, useEffect, useState } from "react";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { theContext } from "app/_context/theContext";
import { IoClose, IoHomeSharp } from "react-icons/io5";
import BasicBtn from "../Links&Btns/BasicBtn";
import Link from "next/dist/client/link";

export default function Nav({ api, status }: any) {
    const router = useSelectedLayoutSegment();
    const context = useContext(theContext);
    const dispatch: any = context.dispatch;
    const { values: {
        program: {
            compStatus: {
                search,
                aside
            }
        }
    } } = context;
    const asideState = { type: "PROGRAMASIDE", payload: !aside }

    useEffect(() => {
        dispatchProgram(context.dispatch, api, status);
    }, [api, status]);

    const handleCleanSearch = (event: React.MouseEvent<SVGElement, MouseEvent>): void => {
        event.stopPropagation();
        dispatch({ type: "PROGRAMSEARCH", payload: '' })
        dispatch({ type: "PROGRAMLIMIT", payload: 1 })
    };

    return (
        <div className={`w-full bg-yellow-500 mt-20 sticky top-20 z-20`}>
            <div className={`mx-auto lg:container flex justify-between item-center text-lg py-1 px-2 sm:px-5`}>
                <div className="flex gap-2 items-center">
                    <Link href={'/'} title={'Home'} className={`hover:scale-110`}><IoHomeSharp /></Link>
                    <span className="truncate w-[150px] sm:w-fit px-1 tracking-wider bg-yellow-600 rounded-lg">
                        <Link href={'/program'} title={'home/program'}>/program/</Link>
                        {router && <span title={`home/program/${router}`}>{router}</span>}
                    </span>
                </div>

                <div className="flex gap-2 sm:gap-3 items-center">
                    <BasicBtn
                        value={{ type: "SEARCH", payload: true }}
                        clickFunc={dispatch}
                        style={`max-w-[200px] sm:w-[200px] flex item-center justify-between group`} title={"Search a program"}
                    >
                        <span className="hidden sm:inline opacity-50">{search ? search : 'Search a program'}</span>
                        {search ? <IoClose title="Clear search" className="group-hover:scale-110 hover:bg-red-500 rounded-sm" onClick={handleCleanSearch} /> : <BsSearch />}
                    </BasicBtn>
                    <span className="w-[2px] h-[80%] bg-gray-500/30 lg:hidden"></span>
                    <BasicBtn value={asideState} clickFunc={dispatch} title={"Toggle filter menu"} style={'lg:hidden'}><BsThreeDots /></BasicBtn>
                </div>
            </div>
        </div>
    );
}