"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { codinasionDevApiType } from "../../_types/Devs";
import { programType } from "../../_types/Program";
import { repoType } from "../../_types/Repos";
import { Ubuntu } from "@next/font/google";
import { store } from "../RTK/Store/store";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import Background from "../LayoutsComp/BackgroundBlobs";
import QuickScroll from "../Links&Btns/QuickScroll";
import FooterContainer from "../FooterComp/Footer";
import Search from "../SearchComp/Search";
import RootDispatch from "./RootDispatch";
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
            <body className={`dark:bg-very-dark bg-very-light overflow-x-hidden ${oswald.className}`} suppressHydrationWarning={true} id={'scroll-to-top'}>
                <Provider store={store}>
                    <Background />
                    <RootDispatch api={api} />
                    <motion.div style={{ scaleX }} className={`fixed top-0 left-0 origin-left z-[500] bg-gradient-to-l dark:bg-gradient-to-r from-very-dark via-darkII to-white w-full h-1`}></motion.div>
                    <Navbar />
                    <Search />
                    <main className="relative z-20">{children}</main>
                    <QuickScroll />
                    <FooterContainer />
                </Provider>
            </body>
        </html >
    );
}
