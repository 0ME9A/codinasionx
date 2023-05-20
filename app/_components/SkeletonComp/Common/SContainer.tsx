import { ReactNode } from "react";

export default function SContainer({ children, style }: { children: ReactNode, style?: string }) {
    return (
        <div className={`w-full h-screen p-2 shadow-xl rounded-2xl lg:rounded-3xl shadow-gray-500/10 bg-too-light dark:bg-too-dark ${style}`}>
            {children}
        </div>
    )
}