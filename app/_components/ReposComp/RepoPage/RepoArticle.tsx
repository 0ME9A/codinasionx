import { articleType } from "app/_types/Repos";
import { useEffect, useState } from "react";
import { externaL } from "@/data/siteLinks";
import ShareOnTwitter from "app/_components/Links&BtnsComp/share/Twitter";
import SRepoArticle from "app/_components/SkeletonComp/Repo/SRepoArticle";
import BasicLink from "app/_components/Links&BtnsComp/BasicLink";
import Article from "app/_components/LayoutsComp/Article";
import AstroImg from "app/_components/CommonComp/Img";


export default function RepoArticle({ repo }: articleType) {
  const [isMount, setMount] = useState(false);
  const [url, setUrl] = useState("https://codinasion.org")
  const { data, status } = repo;

  useEffect(() => {
    setUrl(window.location.href)
    setMount(true)
  }, [])

  if (!isMount) {
    return (
      <Article style="!bg-transparent">
        <SRepoArticle />
      </Article>
    )
  }

  return (
    <Article style="!bg-transparent">
      <header className="flex justify-between items-center">
        <h1 title={data.name} className="text-3xl lg:text-4xl uppercase py-2 font-bold ">
          {data.name}
        </h1>
        <ShareOnTwitter title={data.name} url={url} />
      </header>
      <hr className="border-gray-500/50" />
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        {data.description}
      </p>

      <h2 title={`Contribution`} className="text-xl font-semibold mt-5">
        {`Contribution`}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        If you&apos;re looking for a way to contribute, you can scan through
        our existing issues for something to work on. We want to make
        contributing to this project as easy and transparent as possible, and
        we are grateful to the community for contributing bug fixes and
        improvements. Read our{" "}
        <BasicLink
          title={"Contributing Guide"}
          href={`https://github.com/codinasion/${data.name}/blob/master/CONTRIBUTING.md`}
          target="_blank">
          Contributing Guide
        </BasicLink>{" "}
        how you can take part in improving.
      </p>
      <h2 title={`Join us in discussions`} className="text-xl font-semibold mt-5">
        {`Join us in discussions`}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        {`We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing, join us in the `}
        <BasicLink
          title={externaL.discussion.name}
          href={externaL.discussion.href}
          target={"_blank"}>
          {externaL.discussion.name}
        </BasicLink>
        .
      </p>

      <div className="text-white mt-10 flex flex-col md:flex-row gap-5 items-center">
        <AstroImg
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
    </Article>
  );
}
