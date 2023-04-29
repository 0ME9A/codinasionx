"use client";
import { issueProperties, program, programProperties, repositories, repositoriesProperties } from 'app/_components/RTK/States/States';
import { projectPath, random } from 'app/_functions/functions';
import { useSelectedLayoutSegments } from 'next/navigation';
import { HiOutlineChevronRight } from "react-icons/hi";
import { projectNavType } from 'app/_types/Nav';
import { IoHomeSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBtn from '../SearchComp/SearchBtn';
import Link from "next/dist/client/link";


export default function Nav({ api, layout }: projectNavType) {
    const dispatch = useDispatch()
    const segments = useSelectedLayoutSegments();
    const path = projectPath([layout.slug, ...segments])
    const [aside, setAside] = useState<boolean>(false)

    function handleMenuStatus() {
        layout.name === 'good1stissue' && dispatch(issueProperties({ type: "ASIDE", value: !aside }))
        layout.name === 'program' && dispatch(programProperties({ type: "ASIDE", value: !aside }))
        layout.name === 'repositories' && dispatch(repositoriesProperties({ type: "ASIDE", value: !aside }))
        setAside(!aside)
    }

    useEffect(() => {
        if (api.status === 200) {
            layout.name === "program" && dispatch(program({ api: api.data, status: api.status }))
            layout.name === "repositories" && dispatch(repositories({ api: api.data, status: api.status }))
        }
    }, [api.status, api.data])

    return (
        <div className={`w-full dark:bg-very-light bg-very-dark text-white dark:text-black mt-20 sticky top-20 z-20`}>
            <div className={`mx-auto lg:container flex justify-between item-center text-lg py-1 px-2 sm:px-5`}>
                <div className="flex items-center gap-2 px-1 capitalize max-w-[80%] truncate">
                    <Link href={'/'} title={'Home'} className={`hover:scale-110`}><IoHomeSharp /></Link>
                    {
                        path.map((item) => (
                            <span key={random()} className={`flex flex-nowrap items-center gap-2 lg:gap-3`}>
                                <HiOutlineChevronRight />
                                {
                                    item.active ?
                                        <Link href={item.slug} title={item.name} style={{ display: 'ruby' }}>{item.name}</Link> :
                                        <span title={item.name} style={{ display: 'ruby' }}>{item.name}</span>
                                }
                            </span>
                        ))
                    }
                </div>
                <div className="flex gap-2 items-center">
                    <SearchBtn name={layout.name} slug={layout.slug} />
                    {layout.aside && (
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
