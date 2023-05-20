"use client";
import { useSelectedLayoutSegments } from "next/navigation";
import { externaL, siteMap } from "@/data/siteLinks";
import { random, setTheme } from "app/_functions/functions";
import { siteMapType } from "app/_types/siteMap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaGithub } from "react-icons/fa";
import SearchBtn from "../Links&BtnsComp/SearchBtn";
import ThemeBtn from "../Links&BtnsComp/ThemeBtn";
import BtnLink from "../Links&BtnsComp/BtnLink";
import MenuBtn from "./MenuBtn";
import Link from "next/link";
import Brand from "./Brand";
import Menu from "./Menu";

export default function MainNav() {
  const [activeTab, setTab] = useState<string>("home");
  const [menu, setMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(0);
  const segments = useSelectedLayoutSegments();
  const dispatch = useDispatch()

  const optionElem = (options: { link: string; name: string }[]) => {
    return options.map((item: { link: string; name: string }) => (
      <li key={random()}>
        <Link
          title={item.name}
          href={item.link}
          className={`block p-2 text-center hover:bg-white dark:hover:bg-black uppercase rounded-lg `}>
          {item.name}
        </Link>
      </li>
    ));
  };

  useEffect(() => { segments.length > 0 ? setTab(segments[0]) : setTab("home"); }, [segments]);
  useEffect(() => {
    setTheme(dispatch);
    window.onscroll = () => setScroll(scrollY);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 z-30 w-full h-20 backdrop-blur-sm ${scroll > 0 ? "dark:bg-very-dark bg-very-light" : "bg-transparent"}`}></div>
      <nav className={`xl:container fixed left-1/2 -translate-x-1/2 top-0 z-[35] w-full h-20 flex gap-3 justify-between items-center px-3 dark:text-white bg-very-light bg-transparent`}>
        <Brand />
        <section className="hidden lg:flex gap-2 items-center">
          <ul className="flex">
            {siteMap.map((item: siteMapType) => (
              <li className="relative group" key={random()}>
                <Link
                  title={item.name}
                  className={`p-3 inline-block px-4 hover:text-black dark:hover:text-white relative uppercase ${activeTab === item.name
                    ? "text-black dark:text-white animate-glowTextDark dark:animate-glowTextLight"
                    : "text-gray-700 dark:text-gray-300"
                    }`}
                  href={item.url}>
                  {item.name}
                </Link>
                {item.child && (
                  <ul className="flex flex-col scale-y-0 origin-top group-hover:scale-y-100 group-focus:!scale-y-100 rounded-lg bg-very-light dark:bg-very-dark absolute min-w-full left-1/2 -translate-x-1/2 p-[3px] overflow-hidden shadow-lg shadow-gray-500/20">
                    {optionElem(item.child)}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <span className="w-[2px] h-6 rounded-full dark:bg-white/50 bg-black/50"></span>

          <ul className="flex gap-2">
            <SearchBtn name={""} slug={""} />
            <ThemeBtn />
            <BtnLink
              title={externaL.github.name}
              href={externaL.github.href}
              target="_blank"
              style="px-2">
              <FaGithub className="group-hover:scale-125" />
            </BtnLink>
          </ul>
        </section>
        <section className="flex lg:hidden gap-2 items-center">
          <MenuBtn setState={setMenu} state={menu} />
        </section>
      </nav>

      {menu && <Menu activeTab={activeTab} setState={setMenu} />}
    </>
  );
}
