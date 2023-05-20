import { scrollX } from "app/_framerVariants/framerVariants";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FooterBox({ title, children }: { title: string, children: ReactNode }) {
    return (
        <motion.section
            className="col-span-12 md:col-span-2 dark:text-white"
            variants={scrollX(-30)}>
            <h3 className="font-semibold" title={title}>{title}</h3>
            {children}
        </motion.section>
    )
}