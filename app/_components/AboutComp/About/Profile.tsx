"use client";
import { container, scrollX } from "app/_framerVariants/framerVariants";
import { commonData } from "@/data/siteMetadata";
import { externaL } from "@/data/siteLinks";
import { motion } from "framer-motion";
import TestimonialContainer from "../../TestimonialComp/TestimonialSection";
import JoinUsbanner from "app/_components/CommonComp/JoinUsBanner";
import BasicLink from "../../Links&BtnsComp/BasicLink";

export default function Profile() {
    return (
        <>
            <section className={"py-32"}>
                <motion.article
                    className="flex flex-col gap-5 px-5 lg:container mx-auto"
                    variants={container}
                    initial="hidden"
                    whileInView={"show"}>
                    <motion.h1
                        className="text-3xl md:text-4xl uppercase font-extrabold dark:text-white"
                        variants={scrollX(-50)}>
                        About Us
                    </motion.h1>
                    <motion.p
                        className="text-xl w-full mx-auto dark:text-white tracking-normal font-light"
                        variants={scrollX(-50)}>
                        {commonData.description}
                        Codinasion is a vibrant and diverse GitHub organization committed to fostering open-source development around the world. Our mission is to provide solutions and support for developers at all levels, from beginners to experts, through a wide range of open-source projects and initiatives. With 83 followers on GitHub and a website at <BasicLink href={externaL.github.href} title={externaL.github.name}>Codinasion</BasicLink>, we are a community of developers from around the globe who share a passion for collaboration, innovation, and giving back to the developer community.

                        <br />
                        <br />
                        At the heart of our organization is our commitment to Good First Issue projects, which are designed to help new contributors get started in the world of open-source development. We believe that everyone should have access to the tools and resources they need to succeed in their programming journey, and we work tirelessly to provide a welcoming and inclusive environment for all developers who want to learn, grow, and contribute.

                        <br />
                        Our most popular repository, Program, is an open-source codebase for sharing programming solutions in multiple languages. With over 400 forks and 300 stars on GitHub, it offers a wealth of programming solutions and is continuously updated by our team of over 400 developers from around the world. In addition to Program, we have several other open-source repositories, including Good-1st-issue, which offers thousands of new issues for all types of developers, and Language, which is a collection of programming language data.
                        <br />
                        <br />

                        At Codinasion, we are guided by a set of core values that drive everything we do. We believe in collaboration, innovation, inclusivity, and giving back to the developer community. Our team members come from a variety of backgrounds and cultures, but we share a common passion for open-source development and a commitment to excellence in everything we do.
                        <br />
                        <br />

                        To stay connected with our community of maintainers and contributors, we have several social links available, including a <BasicLink href={externaL.discussion.href} title={externaL.discussion.name} >{externaL.discussion.name}</BasicLink> page on <BasicLink href={externaL.github.href} title={externaL.github.name}>{externaL.github.name}</BasicLink> , a <BasicLink href={externaL.twitter.href} title={externaL.twitter.name}>{externaL.twitter.name}</BasicLink> account, an <BasicLink href={`mailto:${externaL.mail.href}`} title={externaL.mail.name}>{externaL.mail.name}</BasicLink> address, and a <BasicLink href={externaL.discord.href} title={externaL.discord.name}>{externaL.discord.name}</BasicLink> server. We also encourage developers to check out other awesome open-source communities such as <BasicLink href={externaL.eddieHub.href} title={externaL.eddieHub.name}>{externaL.eddieHub.name}</BasicLink> and <BasicLink href={externaL.fearlessTech.href} title={externaL.fearlessTech.name}>{externaL.fearlessTech.name}</BasicLink>, which share our commitment to fostering open-source development around the world.

                    </motion.p>
                </motion.article>
            </section>
            <JoinUsbanner />
            <TestimonialContainer />
        </>
    );
}
