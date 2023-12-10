"use client";
import { projectPath, random } from "app/_functions/functions";
import { projectPathType } from "app/_types/_functionsType";
import { useSelectedLayoutSegments } from "next/navigation";
import { commonProperties } from "app/_rtk/States/States";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { PLASIDE, PLMENU } from "app/_rtk//stateType";
import { BsFillGridFill } from "react-icons/bs";
import { projectNavType } from "app/_types/Nav";
import { RootState } from "app/_rtk/Store/store";
import { IoHomeSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import SearchBtn from "../Links&BtnsComp/SearchBtn";
import Link from "next/dist/client/link";

export default function Nav({ layout }: projectNavType) {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const splitPath = pathName.split("/");
  const segments: string[] = useSelectedLayoutSegments();
  const path: projectPathType = projectPath([layout.slug, ...segments]);
  const { menu, aside } = useSelector(
    (state: RootState) => state.counter.commonProperties.projectLayout
  );

  function handleMenuStatus() {
    dispatch(commonProperties({ type: PLASIDE, value: !aside }));
  }

  useEffect(() => {
    if (splitPath.includes("developers")) {
      dispatch(commonProperties({ type: PLMENU, value: false }));
      dispatch(commonProperties({ type: PLASIDE, value: false }));
    } else {
      dispatch(commonProperties({ type: PLMENU, value: true }));
      dispatch(commonProperties({ type: PLASIDE, value: false }));
    }
  }, [pathName]);

  return (
    <>
      <div
        className={`w-full h-12 dark:bg-very-light bg-very-dark fixed top-20 z-20`}
      ></div>

      <nav
        className={`sticky z-[22] top-20 mx-auto h-12 xl:container flex justify-between item-center text-lg text-white dark:text-black py-1 px-2 sm:px-5`}
      >
        <ul className="flex items-center gap-2 px-1 capitalize max-w-[80%] truncate">
          <li>
            <Link href={"/"} title={"Home"} className={`hover:scale-110`}>
              <IoHomeSharp />
            </Link>
          </li>
          {path.map((item) => (
            <li
              key={random()}
              className={`flex flex-nowrap items-center gap-2 lg:gap-3`}
            >
              <HiOutlineChevronRight />
              {item.active ? (
                <Link
                  href={item.slug}
                  title={item.name}
                  style={{ display: "ruby" }}
                >
                  {item.name}
                </Link>
              ) : (
                <span title={item.name} style={{ display: "ruby" }}>
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex gap-2 items-center">
          <li>
            <SearchBtn name={layout.name} slug={layout.slug} />
          </li>
          <li>
            {menu && (
              <ul className={`flex h-full items-center gap-2 lg:hidden`}>
                <li className="w-[2px] h-[60%] bg-gray-500/30"></li>
                <li>
                  <button
                    type={"button"}
                    title={"Filter menu"}
                    onClick={handleMenuStatus}
                    className={` rounded-lg p-2 aspect-square group shadow-lg shadow-gray-500/50 `}
                  >
                    <BsFillGridFill className="group-hover:scale-125" />
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
