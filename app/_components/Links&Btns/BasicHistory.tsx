"use client";
import { useRouter } from "next-router-mock";

type basicBtn = {
    children: React.ReactNode;
    style?: string;
    title: string;
};

export default function BasicBtn({
    children,
    title,
    style,
}: basicBtn) {
    const router = useRouter();
    return (
        <button
            type={"button"}
            title={title}
            onClick={() => router.back()}
            className={` rounded-lg flex px-2 justify-end items-center h-full text-white dark:text-black hover:bg-very-light dark:hover:bg-very-dark dark:hover:text-white hover:text-black border dark:border-black ${style}`}
        >
            {children}
        </button>
    );
}
