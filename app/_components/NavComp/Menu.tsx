import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { SocialMedia, topRepos } from "@/data/siteLinks";
import { random } from "app/_functions/functions";
import { navLinks } from "@/data/siteLinks";
import { menuType } from "app/_types/Nav";
import BtnLink from "../Links&Btns/BtnLink";
import Link from "next/link";

export default function Menu({ setState,  activeTab }: menuType) {
  return (
    <div className="fixed w-full overflow-auto p-2 pt-24 h-screen top-0 left-0 backdrop-blur-md bg-very-light/50 dark:bg-very-dark/50 z-[25] flex justify-center lg:hidden">
      <menu className="w-full rounded-[50px] p-5 lg:container h-fit dark:bg-very-dark bg-very-light z-[36] right-0 top-0">
        <ul>
          {navLinks.map((item) => (
            <li className="group" key={random()}>
              <Link
                title={item.name}
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
        <ul className="border-t border-gray-500/20 pt-5">
          {topRepos.map((item) => (
            <li className="group" key={random()}>
              <Link
                title={item.name}
                className={`p-3 inline-block hover:text-black dark:hover:text-white relative uppercase ${
                  activeTab === item.name
                    ? "text-black dark:text-white animate-glowTextDark dark:animate-glowTextLight"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                href={item.href}
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
                key={random()}
                href={item.href}
                title={item.name}
                className="hover:scale-125"
              >
                {item.name.toLowerCase() === "github" && <FaGithub />}
                {item.name.toLowerCase() === "twitter" && <FaTwitter />}
                {item.name.toLowerCase() === "discord" && <FaDiscord />}
              </Link>
            ))}
        </div>

        <article className="py-5 px-2 max-w-[640px] text-black dark:text-white">
          <h2 title={'Codinasion'} className="text-xl font-semibold">Codinasion</h2>
          <p className=" py-2 pb-3 text-gray-500">
            We are a group of developer/programer from all over the world helps other developers problems by our open-source projects. We provide a wide range of programmings and tools in multiple languages which is created by our independent developers.
          </p>
          <BtnLink
            title={'Join Codinasion'}
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
