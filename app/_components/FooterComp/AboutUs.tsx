import { scrollX } from "app/_framerVariants/framerVariants";
import { BiLinkExternal } from "react-icons/bi";
import { externaL } from "@/data/siteLinks";
import { motion } from "framer-motion";
import BtnLink from "../Links&BtnsComp/BtnLink";


export default function About({ description }: { description: string }) {
    return (
        <section className="col-span-12 md:col-span-6">
            <motion.h2
                title="Codinasion"
                variants={scrollX(-50)}
                className="text-3xl md:text-4xl font-bold text-black dark:text-white ">
                CODINASION
            </motion.h2>
            <motion.p
                variants={scrollX(-50)}
                className="text-gray-700 dark:text-gray-300">
                {description}
            </motion.p>
            <motion.div variants={scrollX(-50)}>
                <BtnLink
                    title={'Contribute'}
                    href={externaL.github.href}
                    style="rounded-tl-none mt-5 w-full sm:w-fit">
                    Contribute
                    <BiLinkExternal className="group-hover:scale-125" />
                </BtnLink>
            </motion.div>
        </section>

    )
}