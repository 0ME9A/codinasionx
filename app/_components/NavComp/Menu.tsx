import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { SocialMedia } from "@/data/navbarLinks";
import { navLinks } from "@/data/Obj/nav";
import BtnLink from "../Links/BtnLink";
import Link from "next/link";

type menuType = {
  activeTab: string;
  setState: Dispatch<SetStateAction<boolean>>;
};
export default function Menu({ setState,  activeTab }: menuType) {
  return (
    <div className="fixed w-full overflow-auto p-2 pt-24 h-screen top-0 left-0 backdrop-blur-md bg-very-light/50 dark:bg-very-dark/50 z-[25] flex justify-center lg:hidden">
      <menu className="w-full rounded-[50px] p-5 lg:container h-fit dark:bg-very-dark bg-very-light z-[36] right-0 top-0">
        <ul>
          {navLinks.map((item) => (
            <li className="group" key={crypto.randomUUID()}>
              <Link
                className={`p-3 inline-block hover:text-black dark:hover:text-white relative uppercase ${
                  activeTab === item.name
                    ? "text-black dark:text-white animate-glowTextDark dark:animate-glowTextLight"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                href={item.param}
                onClick={() => setState(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="py-5 px-2 text-black mt-5 dark:text-white border-t border-gray-500/20 col-span-12 flex text-2xl gap-2">
          {SocialMedia &&
            SocialMedia.map((item) => (
              <Link
                key={crypto.randomUUID()}
                href={item.href}
                className="hover:scale-125"
              >
                {item.name.toLowerCase() === "github" && <FaGithub />}
                {item.name.toLowerCase() === "twitter" && <FaTwitter />}
                {item.name.toLowerCase() === "discord" && <FaDiscord />}
              </Link>
            ))}
        </div>

        <article className="py-5 px-2 max-w-[640px] text-black dark:text-white">
          <h2 className="text-xl font-semibold">Codinasion</h2>
          <p className=" py-2 pb-3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            ducimus quo, sit vero doloremque vel eaque distinctio nobis, soluta
            possimus eos laboriosam aspernatur, labore ut odio dicta. Molestias,
            nihil alias?
          </p>
          <BtnLink
            url={"https://github.com/codinasion"}
            style={`sm:w-fit rounded-tl-none`}
          >
            Join Codinasion
          </BtnLink>
        </article>
      </menu>
    </div>
  );
}
