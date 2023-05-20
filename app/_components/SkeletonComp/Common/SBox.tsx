import { ReactNode } from "react";
import SAtom from "./SAtom";

export default function SBox({ children, style }: { children: ReactNode, style?: string }) {
    return (
        <div className={`p-2 space-y-2 shadow-xl rounded-2xl lg:rounded-3xl shadow-gray-500/10 bg-too-light dark:bg-too-dark ${style}`}>
            <SAtom />
            {children}
        </div>
    )
}