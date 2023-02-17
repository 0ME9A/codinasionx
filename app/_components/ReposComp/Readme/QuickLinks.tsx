import { FaBalanceScale, FaGithub, FaRegHandshake } from "react-icons/fa";
import { readmeType } from "app/repositories/[repo]/page";
import { GiEarthAmerica } from "react-icons/gi";
import { IoTelescope } from "react-icons/io5";
import Loading from "app/_components/Loading/Loading";
import Link from "next/link";

export default function QuickLinks({ repo }: { repo: readmeType | null }) {
  type qLinkType = {
    id: string | undefined;
    text: string;
    link: string;
    icon: JSX.Element;
  }[];
  const qLink: qLinkType = [
    {
      id: repo?.homepage,
      text: "Website",
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

  console.log(repo);
  return repo ? (
    <div className="p-2 gap-2 grid">
      {qLink.map((item) => {
        return (
          item.id && (
            <Link
              key={crypto.randomUUID()}
              href={item.link}
              className="group flex gap-2 items-center"
              target={"_blank"}
            >
              {item.icon} {item.text}
            </Link>
          )
        );
      })}
    </div>
  ) : (
    <Loading basic={true} />
  );
}
