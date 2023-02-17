import { RiGitRepositoryFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { IconType } from "react-icons/lib";

type orgHighlightsDataType = {
  title: string;
  text: string;
  style: string;
  icon: IconType | JSX.Element;
}[];
export const orgHighlightsData: orgHighlightsDataType = [
  {
    title: "300+ Contributors",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi
    omnis quod eos ratione beatae tempora non velit fugiat nesciunt cumque
    tenetur quae esse architecto est debitis, praesentium quisquam
    distinctio mollitia et libero aperiam repudiandae dolorem? Voluptatum
    quod sed dolore fuga est atque, consectetur, `,
    style: " col-span-12 xl:!col-span-4 ",
    icon: <HiUserGroup className="text-8xl mx-auto opacity-90" />,
  },
  {
    title: "200+ Stars",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi
    omnis quod eos ratione beatae tempora non velit fugiat nesciunt cumque
    tenetur quae esse architecto est debitis, praesentium quisquam
    distinctio mollitia et libero aperiam repudiandae dolorem? Voluptatum
    quod sed dolore fuga est atque, consectetur, `,
    style: " col-span-12 sm:col-span-6 xl:!col-span-3 ",
    icon: <AiOutlineStar className="text-8xl mx-auto opacity-90" />,
  },
  {
    title: "10+ Active Repo",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi
    omnis quod eos ratione beatae tempora non velit fugiat nesciunt cumque
    tenetur quae esse architecto est debitis, praesentium quisquam
    distinctio mollitia et libero aperiam repudiandae dolorem? Voluptatum
    quod sed dolore fuga est atque, consectetur, `,
    style: " col-span-12 sm:col-span-6 xl:!col-span-5 ",
    icon: <RiGitRepositoryFill className="text-8xl mx-auto opacity-90" />,
  },
];
