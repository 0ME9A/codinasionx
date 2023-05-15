"use client";
import { commonPropertie } from 'app/_components/RTK/States/States';
import { projectPath, random } from 'app/_functions/functions';
import { projectPathType } from 'app/_types/_functionsType';
import { useSelectedLayoutSegments } from 'next/navigation';
import { HiOutlineChevronRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { PLASIDE, PLMENU } from '../RTK/stateType';
import { projectNavType } from 'app/_types/Nav';
import { RootState } from '../RTK/Store/store';
import { IoHomeSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { BsThreeDots } from "react-icons/bs";
import { useEffect } from 'react';
import SearchBtn from '../Links&Btns/SearchBtn';
import Link from "next/dist/client/link";



export default function Nav({ layout }: projectNavType) {
    const dispatch = useDispatch();
    const pathName = usePathname();
    const splitPath = pathName.split("/");
    const segments: string[] = useSelectedLayoutSegments();
    const path: projectPathType = projectPath([layout.slug, ...segments]);
    const { menu, aside } = useSelector((state: RootState) => state.counter.commonProperties.projectLayout);

    function handleMenuStatus() { dispatch(commonPropertie({ type: PLASIDE, value: !aside })) }

    useEffect(()=>{
        if (splitPath.includes('developers')) {
            dispatch(commonPropertie({ type: PLMENU, value: false }))
            dispatch(commonPropertie({ type: PLASIDE, value: false }))
        }else{
            dispatch(commonPropertie({ type: PLMENU, value: true }))
            dispatch(commonPropertie({ type: PLASIDE, value: false }))
        }
    },[pathName])

    return (
        <div className={`w-full dark:bg-very-light bg-very-dark text-white dark:text-black sticky top-20 z-20`}>
            <div className={`mx-auto lg:container flex justify-between item-center text-lg py-1 px-2 sm:px-5`}>
                <div className="flex items-center gap-2 px-1 capitalize max-w-[80%] truncate">
                    <Link href={'/'} title={'Home'} className={`hover:scale-110`}><IoHomeSharp /></Link>
                    {path.map((item) => (
                        <span key={random()} className={`flex flex-nowrap items-center gap-2 lg:gap-3`}>
                            <HiOutlineChevronRight />
                            {item.active ?
                                <Link href={item.slug} title={item.name} style={{ display: 'ruby' }}>{item.name}</Link> :
                                <span title={item.name} style={{ display: 'ruby' }}>{item.name}</span>
                            }
                        </span>
                    ))
                    }
                </div>
                <div className="flex gap-2 items-center">
                    <SearchBtn name={layout.name} slug={layout.slug} />
                    {menu && (
                        <div className={`flex h-full items-center gap-2 lg:hidden`}>
                            <span className="w-[2px] h-[80%] bg-gray-500/30"></span>
                            <button
                                type={"button"}
                                title={"Filter menu"}
                                onClick={handleMenuStatus}
                                className={` rounded-lg flex px-2 justify-end items-center h-full hover:bg-very-light dark:hover:bg-very-dark dark:hover:text-white hover:text-black focus:bg-very-light dark:focus:bg-very-dark dark:focus:text-white focus:text-black shadow-lg shadow-gray-500/50 `}>
                                <BsThreeDots />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
