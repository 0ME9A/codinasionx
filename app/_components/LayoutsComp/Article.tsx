import { ReactNode } from "react";


export default function Article({ children, style }: { children: ReactNode, style?: string }) {
    return (
        <article className={`w-full min-h-screen mt-2 text-black dark:text-white rounded-2xl lg:rounded-3xl bg-too-light dark:bg-too-dark overflow-hidden ${style}`}>
            {children}
        </article>
    )
}