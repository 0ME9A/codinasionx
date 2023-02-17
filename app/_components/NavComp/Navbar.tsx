"use client";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import { navLinks, navLinkType } from "@/data/Obj/nav";
import { theContext } from "app/_context/theContext";
import { FaGithub } from "react-icons/fa";
import setThemeFun from "app/_functions/functions";
import BtnLink from "../Links/BtnLink";
import ThemeBtn from "./ThemeBtn";
import MenuBtn from "./MenuBtn";
import Link from "next/link";
import Brand from "./Brand";
import Menu from "./Menu";

export default function Example() {
  const [activeTab, setTab] = useState<string>("home");
  const [scroll, setScroll] = useState<number>(0);
  const [menu, setMenu] = useState<boolean>(false);

  const context: any = useContext(theContext);
  const segments = useSelectedLayoutSegments();

  useEffect(() => {
    segments.length > 0 ? setTab(segments[0]) : setTab("home");
  }, [segments]);
  useLayoutEffect(() => {
    setThemeFun(context.dispatch);
    window.onscroll = () => setScroll(scrollY);
  }, []);

  return (
    <>
      <nav
        className={`py-4 fixed top-0 z-30 w-full backdrop-blur-sm dark:text-white bg-very-light ${
          scroll > 0 ? "dark:bg-very-dark bg-very-light" : "bg-transparent"
        }`}
      >
        <div className="px-3 items-center flex justify-between lg:container mx-auto">
          <Brand />
          <div className=" hidden lg:flex items-center md:gap-2 xl:gap-4 h-full">
            <ul className="flex">
              {navLinks.map((item: navLinkType) => (
                <li className="group" key={crypto.randomUUID()}>
                  <Link
                    className={`p-3 inline-block px-4 hover:text-black dark:hover:text-white relative uppercase ${
                      activeTab === item.name
                        ? "text-black dark:text-white animate-glowTextDark dark:animate-glowTextLight"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                    href={item.param}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <span className="w-[2px] h-6 rounded-full dark:bg-white/50 bg-black/50"></span>
            <ThemeBtn
              activeTheme={context.values.theme}
              dispatch={context.dispatch}
            />
            <BtnLink
              url={"https://github.com/codinasion"}
              target="_blank"
              style="rounded-tr-none"
            >
              <FaGithub className="group-hover:scale-125" />
              GITHUB
            </BtnLink>
          </div>
          <MenuBtn setState={setMenu} state={menu} />
        </div>
      </nav>
      {menu && <Menu activeTab={activeTab} setState={setMenu} />}
    </>
  );
}
