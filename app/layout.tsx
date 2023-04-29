"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { store } from "./_components/RTK/Store/store";
import { Oswald } from "@next/font/google";
import { Provider } from "react-redux";
import FooterContainer from "./_components/FooterComp/Footer";
import Background from "./_components/LayoutsComp/BackgroundBlobs";
import Search from "./_components/SearchComp/Search";
import Navbar from "./_components/NavComp/Navbar";
import "atropos/atropos.css";
import "./globals.css";
import "./atropos.css";

const oswald = Oswald({
  weight: ["300", "400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const devsUrl = "https://api.github.com/repos/codinasion/program/contributors";
  const showoffReposUrl = "https://api.github.com/orgs/codinasion/repos";

  return (
    <html lang="en" className="dark">
      <head />
      <body
        className={`dark:bg-very-dark bg-purple-100 overflow-x-hidden ${oswald.className}`}>
        <Provider store={store}>
          <motion.div
            style={{ scaleX }}
            className={`fixed top-0 left-0 origin-left z-[500] bg-gradient-to-l dark:bg-gradient-to-r from-very-dark via-darkII to-white w-full h-1`}>
          </motion.div>
          <Background />
          <Navbar />
          <Search />
          <main className="relative z-20">{children}</main>
          <FooterContainer />
        </Provider>
      </body>
    </html>
  );
}
