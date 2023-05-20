import { externaL } from "@/data/siteLinks";
import { FaGithub } from "react-icons/fa";
import BtnLink from "app/_components/Links&BtnsComp/BtnLink";


export default function JoinContribution({ repoName }: { repoName: string | null; }) {
  if (!repoName) return <></>

  return (
    <ul className="p-2 space-y-2 ">
      <li>
        <BtnLink
          title={`Contribute`}
          href={`https://github.com/codinasion/${repoName}`}
          target="_blank">
          <FaGithub className="group-hover:scale-125" />
          Contribute
        </BtnLink>
      </li>
      <li>
        <BtnLink
          title={externaL.invite.name}
          href={externaL.invite.href}
          target="_blank">
          <FaGithub className="group-hover:scale-125" />
          {externaL.invite.name}
        </BtnLink>
      </li>
    </ul>
  );

}
