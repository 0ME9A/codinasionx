import { ReactNode } from "react-markdown/lib/ast-to-react";
import { RootState } from "app/_rtk/Store/store";
import { useSelector } from "react-redux";


export default function Aside({ children, style }: { children: ReactNode, style?: string }) {
    const aside = useSelector((state: RootState) => state.counter.commonProperties.projectLayout.aside);

    return (
        <aside
            className={`fixed z-10 top-32 right-0 lg:sticky max-w-[500px] p-2 pb-0 flex flex-col gap-2 w-full lg:w-[600px] bg-very-light/50 dark:bg-very-dark/50 backdrop-blur-sm lg:!bg-transparent h-full lg:h-fit origin-top-right scale-y-0 lg:!scale-y-100 opacity-0 lg:!opacity-100 ${style}`}
            style={{ transform: `scaleY(${aside ? 1 : 0})`, opacity: aside ? 1 : 0 }}>
            {children}
        </aside>
    )
}