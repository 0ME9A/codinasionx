"use client";
import { callImg } from "app/_functions/functions";
import { IoHomeSharp } from "react-icons/io5";
import BtnLink from "../Links&BtnsComp/BtnLink";
import Image from "next/image";


type error404Type = {
    title: string;
    message?: string;
    children?: React.ReactNode
}
export default function Error404({ title, message, children }: error404Type) {
    message = message || `The page you are looking for might have been removed had its name changed or is temporarily unavailable.`

    return (
        <div className="p-2 pt-[100px] pb-[50px] flex justify-center w-full lg:container mx-auto ">
            <Image
                src={callImg()}
                alt={''}
                width={2000}
                height={600}
                className={`object-cover w-full h-full absolute top-0 opacity-75`}
            />
            <div className="w-full h-full absolute top-0 left-0"
                style={{ backgroundImage: `radial-gradient(rgb(0,0,0,0) 40%,  black)` }}>
            </div>
            <div className="w-full mx-auto h-[70vh] relative p-2 text-white flex flex-col justify-center items-center">
                <h2 className="text-[10rem] z-10 relative text-center font-extrabold text-stroke dark:animate-glowTextLight animate-glowTextDark">{title}</h2>
                {children ? children : <p className="relative text-center px-5 md:px-16 max-w-[800px] tracking-wider font-light">{message}</p>}
                <BtnLink href={"/"} title={"Go to Home"} style={'relative mt-5'}><IoHomeSharp className="group-hover:scale-110" /> {'Go to home page'}</BtnLink>
            </div>
        </div>
    )
}