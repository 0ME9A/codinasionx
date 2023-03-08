import { orgHighlightsDataType } from "app/_types/About";
import { RiGitRepositoryFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";

export const orgHighlightsData: orgHighlightsDataType = [
  {
    title: "300+ Contributors",
    text: `Codinasion is beloved by more than 300 very kind developers all over the world, who enjoy contributing to codinasion's open-source projects and helping millions of other developers.`,
    style: " col-span-12 xl:!col-span-4 ",
    icon: <HiUserGroup className="text-8xl mx-auto opacity-90" />,
  },
  {
    title: "200+ Stars",
    text: `Codinasion's all-time favorite repository on GitHub Program has been started by more than 200 users and continuously growing up.`,
    style: " col-span-12 sm:col-span-6 xl:!col-span-3 ",
    icon: <AiOutlineStar className="text-8xl mx-auto opacity-90" />,
  },
  {
    title: "10+ Active Repo",
    text: `Codinasion loves open-source projects and provides more than 10 active repositories on GitHub for beginners and advanced developers/programmers and is continuously updated by codinasion's developers.`,
    style: " col-span-12 sm:col-span-6 xl:!col-span-5 ",
    icon: <RiGitRepositoryFill className="text-8xl mx-auto opacity-90" />,
  },
];
