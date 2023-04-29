"use client";
import { useSelectedLayoutSegments } from "next/navigation";
import { setTheme } from "../RTK/dispatchFun/theme";
import { random } from "app/_functions/functions";
import { siteMapType } from "app/_types/siteMap";
import { siteMap } from "@/data/siteLinks";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useDispatch } from "react-redux";
import SearchBtn from "../SearchComp/SearchBtn";
import ThemeBtn from "../Links&Btns/ThemeBtn";
import BtnLink from "../Links&Btns/BtnLink";
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
      <Link
        key={random()}
        title={item.name}
        href={item.link}
        className={`p-2 text-center hover:bg-white dark:hover:bg-black uppercase rounded-lg group-focus:outline group-focus:outline-blue-600`}>
        {item.name}
      </Link>
    ));
  };

  useEffect(() => { segments.length > 0 ? setTab(segments[0]) : setTab("home"); }, [segments]);
  useEffect(() => {
    setTheme(dispatch);
    window.onscroll = () => setScroll(scrollY);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-30 w-full backdrop-blur-sm dark:text-white bg-very-light ${scroll > 0 ? "dark:bg-very-dark bg-very-light" : "bg-transparent"}`}>
        <div className="px-3 h-20 items-center flex justify-between lg:container mx-auto">
          <Brand />
          <div className=" hidden lg:flex items-center md:gap-2 xl:gap-4 h-full">
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
                    <div className="flex flex-col scale-y-0 origin-top group-hover:scale-y-100 group-focus:!scale-y-100 rounded-lg bg-very-light dark:bg-very-dark absolute min-w-full left-1/2 -translate-x-1/2 p-[3px] overflow-hidden">
                      {optionElem(item.child)}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <span className="w-[2px] h-6 rounded-full dark:bg-white/50 bg-black/50"></span>

            <div className="flex gap-2">
              <SearchBtn name={""} slug={""} />
              <ThemeBtn />
              <BtnLink
                title={'GitHub'}
                url={"https://github.com/codinasion"}
                target="_blank"
                style="px-2">
                <FaGithub className="group-hover:scale-125" />
              </BtnLink>
            </div>
          </div>
          <MenuBtn setState={setMenu} state={menu} />
        </div>
      </nav>
      {menu && <Menu activeTab={activeTab} setState={setMenu} />}
    </>
  );
}
