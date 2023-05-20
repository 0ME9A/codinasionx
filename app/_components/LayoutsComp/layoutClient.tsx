"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { codinasionDevApiType } from "../../_types/Devs";
import { programType } from "../../_types/Program";
import { repoType } from "../../_types/Repos";
import { store } from "app/_rtk/Store/store";
import { Ubuntu } from "@next/font/google";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import Background from "./Background";
import QuickScroll from "../Links&BtnsComp/QuickScroll";
import FooterSection from "../FooterComp/FooterSection";
import RootDispatch from "../CommonComp/RootDispatch";
import Search from "../SearchWindowComp/Search";
import Navbar from "../NavComp/Navbar";


const oswald = Ubuntu({
    weight: ["300", "400", "500", "700"],
    style: ["normal"],
    subsets: ["latin"],
});

type layoutClientType = {
    children: ReactNode;
    api: {
        repos: { data: repoType[], status: number },
        devs: { data: codinasionDevApiType[], status: number },
        prg: { data: programType[], status: number },
    }
}

export default function LayoutClient({ children, api }: layoutClientType) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);

    return (
        <html lang="en" className="dark">
            <head />
            <body className={`w-full dark:bg-very-dark bg-very-light overflow-x-hidden ${oswald.className}`} suppressHydrationWarning={true} id={'scroll-to-top'}>
                <Provider store={store}>
                    <Background />
                    <RootDispatch api={api} />
                    <motion.div style={{ scaleX }} className={`fixed top-0 left-0 origin-left z-[500] bg-gradient-to-l dark:bg-gradient-to-r from-very-dark via-darkII to-white w-full h-1`}></motion.div>
                    <Navbar />
                    <Search />
                    <main className="relative z-20 bg-gradient-to-bl from-very-light/80 via-very-light to-very-light dark:from-very-dark/80 dark:via-very-dark dark:to-very-dark">
                        {children}
                    </main>
                    <FooterSection />
                    <QuickScroll />
                </Provider>
            </body>
        </html >
    );
}
