import { child } from "app/_framerVariants/framerVariants";
import { articleType } from "app/_types/Repos";
import { IoMdMore } from "react-icons/io";
import { motion } from "framer-motion";
import BasicLink from "app/_components/Links&Btns/BasicLink";
import Img from "app/_components/CommonComp/Img";

export default function Article({ repo, state, setState }: articleType) {
  return (
    <motion.div
      variants={child}
      className="p-2 w-full lg:col-span-3 pb-60 md:!blur-0"
      style={{ filter: `blur(${state ? "5px" : 0})` }}
    >
      <header className={``}>
        <div className="flex justify-between items-center">
          <h1 title={repo.name} className="text-2xl md:text-3xl lg:text-4xl uppercase py-2 font-bold text-black dark:text-white">
            {repo.name}
          </h1>
          <IoMdMore
            className="dark:text-white text-black md:hidden hover:scale-125 cursor-pointer text-2xl"
            onClick={() => setState(!state)}
          />
        </div>
        <hr className="border-gray-500/50" />
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {repo.description}
        </p>
      </header>
      <article className={`mt-5`}>
        <h2 title={`Contribution`} className="text-xl font-semibold dark:text-white">
          {`Contribution`}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          If you&apos;re looking for a way to contribute, you can scan through
          our existing issues for something to work on. We want to make
          contributing to this project as easy and transparent as possible, and
          we are grateful to the community for contributing bug fixes and
          improvements. Read our{" "}
          <BasicLink
            title={"Contributing Guide"}
            href={`https://github.com/codinasion/${repo.name}/blob/master/CONTRIBUTING.md`}
            target="_blank"
          >
            Contributing Guide
          </BasicLink>{" "}
          how you can take part in improving.
        </p>
      </article>
      <article className={`mt-5`}>
        <h2 title={`Join us in discussions`} className="text-xl font-semibold dark:text-white">
          {`Join us in discussions`}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {`We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing, join us in the `}
          <BasicLink
            title={"Discussions"}
            href="https://github.com/orgs/codinasion/discussions"
            target={"_blank"}
          >
            Discussions
          </BasicLink>
          .
        </p>
      </article>
      <div className="text-white mt-10 flex flex-col md:flex-row gap-5 items-center">
        <Img
          imgUrl={"/img/octocat.png"}
          alt={"Thanks"}
          radius={50}
          imgSize={[400, 400]}
          style={"w-full h-[150px] md:h-auto md:max-w-[300px] md:w-[30%]"}
        />
        <article className="w-full">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Thanks for contributing 💜
          </h2>
          <hr className="border-gray-500/50 my-2" />
          <p className="text-gray-700 dark:text-gray-300">
            Thanks for all your contributions and efforts
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We thank you being part of our ✨ commUnity ✨ !
          </p>
        </article>
      </div>
    </motion.div>
  );
}
