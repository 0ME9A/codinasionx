import { FaBalanceScale, FaGithub, FaRegHandshake } from "react-icons/fa";
import { qLinkType, repoType } from "app/_types/Repos";
import { random } from "app/_functions/functions";
import { GiEarthAmerica } from "react-icons/gi";
import { IoTelescope } from "react-icons/io5";
import Link from "next/link";

export default function QuickLinks({ repo }: { repo: repoType | null }) {
  const qLink: qLinkType[] = [
    {
      id: repo?.homepage,
      text: "Source/Website",
      link: repo?.homepage ?? "https://github.com/codinasion",
      icon: <GiEarthAmerica className="group-hover:scale-125" />,
    },
    {
      id: repo?.name,
      text: "GitHub",
      link: `https://github.com/codinasion/${repo?.name}`,
      icon: <FaGithub className="group-hover:scale-125" />,
    },
    {
      id: repo?.name,
      text: "ReadMe",
      link: `https://github.com/codinasion/${repo?.name}/blob/master/README.md`,
      icon: <IoTelescope className="group-hover:scale-125" />,
    },
    {
      id: repo?.name,
      text: "License",
      link: `https://github.com/codinasion/${repo?.name}/blob/master/LICENSE.md`,
      icon: <FaBalanceScale className="group-hover:scale-125" />,
    },
    {
      id: repo?.name,
      text: "Code of conduct",
      link: `https://github.com/codinasion/${repo?.name}/blob/master/CODE_OF_CONDUCT.md`,
      icon: <FaRegHandshake className="group-hover:scale-125" />,
    },
  ];

  if (!repo) return <></>

  return (
    <ul className="p-2 gap-2 grid text-black dark:text-white">
      {qLink.map(
        (item: qLinkType) =>
          item.id && (
            <li key={random()}>
              <Link
                href={item.link}
                title={item.text}
                className="group flex gap-2 items-center"
                target={"_blank"}>
                {item.icon} {item.text}
              </Link>
            </li>
          )
      )}
    </ul>
  );
}
