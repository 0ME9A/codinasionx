import { orgHighlightsDataType } from "app/_types/About";
import { RiGitRepositoryFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";

export const orgHighlightsData: orgHighlightsDataType = [
  {
    title: "500+ Contributors",
    text: `Codinasion is powered by a global community of 500+ contributors who help create and curate its content. Their passion for software development and open-source has helped Codinasion become a valuable resource for programmers of all skill levels.`,
    style: " col-span-12 xl:!col-span-4 ",
    icon: <HiUserGroup className="text-8xl mx-auto opacity-90" />,
  },
  {
    title: "200+ Stars",
    text: `Our program repository on GitHub has garnered over 200 stars, a testament to the quality and usefulness of the code we create. We're thrilled to see our work being appreciated by developers around the world and will continue to strive for excellence in all that we do.`,
    style: " col-span-12 sm:col-span-6 xl:!col-span-3 ",
    icon: <AiOutlineStar className="text-8xl mx-auto opacity-90" />,
  },
  {
    title: "10+ Active Repo",
    text: `Codinasion has more than 10 open-source repositories on Github that cover various topics including web development, machine learning, and data structures. These projects are maintained by a dedicated community of contributors who actively support and update them.`,
    style: " col-span-12 sm:col-span-6 xl:!col-span-5 ",
    icon: <RiGitRepositoryFill className="text-8xl mx-auto opacity-90" />,
  },
];
