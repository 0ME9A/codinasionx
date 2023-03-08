"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { theContext } from "./_context/theContext";
import { useEffect, useReducer } from "react";
import { Oswald } from "@next/font/google";
import FooterContainer from "./_components/FooterComp/FooterContainer";
import Background from "./_components/LayoutsComp/BackgroundBlobs";
import Navbar from "./_components/NavComp/Navbar";
import initialState from "./_context/theInitial";
import reducer from "./_context/theReducer";
import useFetch from "./_hooks/useFetch";
import "atropos/atropos.css";
import "./globals.css";
import "./atropos.css";

const oswald = Oswald({
  weight: ["300", "400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const [values, dispatch] = useReducer(reducer, initialState);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const devsUrl = "https://api.github.com/repos/codinasion/program/contributors";
  const showoffReposUrl = "https://api.github.com/orgs/codinasion/repos";
  const { data: devs, status: devsStatus } = useFetch({ url: devsUrl });
  const { data: showoffRepo, status: showoffRepoStatus } = useFetch({ url: showoffReposUrl });

  useEffect(() => {
    devsStatus === 200 && dispatch({ type: "DEVS", payload: { data: devs, status: devsStatus } });
  }, [devsStatus]);
  useEffect(() => {
    showoffRepoStatus === 200 && dispatch({ type: "SHOWOFFREPOS", payload: { data: showoffRepo, status: showoffRepoStatus } });
  }, [showoffRepoStatus]);

  return (
    <html lang="en" className="dark">
      <head />
      <body
        className={`dark:bg-very-dark bg-purple-100 overflow-x-hidden ${oswald.className}`}
      >
        <theContext.Provider value={{ values, dispatch }}>
          <motion.div
            style={{ scaleX }}
            className={`fixed top-0 left-0 origin-left z-[500] bg-gradient-to-l dark:bg-gradient-to-r from-very-dark via-darkII to-white w-full h-1`}
          ></motion.div>
          <Background />
          <Navbar />
          <main className="relative z-20">{children}</main>
          <FooterContainer />
        </theContext.Provider>
      </body>
    </html>
  );
}
