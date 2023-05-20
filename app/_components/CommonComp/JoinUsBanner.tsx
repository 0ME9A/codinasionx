import { externaL } from "@/data/siteLinks";
import { FaGithub } from "react-icons/fa";
import BtnLink from "../Links&BtnsComp/BtnLink";


export default function JoinUsbanner({ style }: { style?: string }) {
    return (
        <section
            className={`px-3 text-black dark:text-white border-y border-gray-500/0 bg-[#ebddff] dark:bg-[#160035] ${style}`}>
            <article className="lg:container mx-auto flex flex-col gap-10 md:flex-row justify-between items-center h-full py-20">
                <h3 className="text-6xl max-w-md text-center md:text-left font-extrabold text-stroke">
                    Join us and be a part of our open source community
                </h3>
                <BtnLink
                    href={externaL.github.href}
                    title={"Join Codinasion"}
                    target="_blank">
                    <FaGithub className="group-hover:scale-125" />
                    Join Codinasion
                </BtnLink>
            </article>
        </section>
    )
}