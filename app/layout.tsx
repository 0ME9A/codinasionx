"use client";
import { theContext } from "./_context/theContext";
import { useEffect, useReducer } from "react";
import { Rubik, Oswald } from "@next/font/google";
import FooterContainer from "./_components/FooterComp/FooterContainer";
import Background from "./_components/LayoutsComp/BackgroundHero";
import Navbar from "./_components/NavComp/Navbar";
import initialState from "./_context/theInitial";
import reducer from "./_context/theReducer";
import "atropos/atropos.css";
import "./globals.css";
import "./atropos.css";
import {
  fetchDaves,
  fetchRepos,
  fetchShowoffRepos,
} from "./_functions/processFetch";
import { motion, useScroll, useSpring } from "framer-motion";

const rubik = Oswald({
  weight: ["300", "400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [values, dispatch] = useReducer(reducer, initialState);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  useEffect(() => {
    return () => {
      fetchRepos(values.repos, dispatch);
      fetchDaves(values.devs, dispatch);
      fetchShowoffRepos(dispatch);
    };
  }, []);

  return (
    <html lang="en" className="dark">
      <head />
      <body
        className={`dark:bg-very-dark bg-purple-100 overflow-x-hidden ${rubik.className}`}
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
