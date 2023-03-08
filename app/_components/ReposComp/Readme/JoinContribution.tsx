import { FaGithub } from "react-icons/fa";
import BtnLink from "app/_components/Links&Btns/BtnLink";

export default function JoinContribution({ repoName }: { repoName: string | null; }) {
  if (repoName)
    return (
      <div className="p-2 space-y-2 mt-5">
        <BtnLink
          title={`Contribute`}
          url={`https://github.com/codinasion/${repoName}`}
          target="_blank"
        >
          <FaGithub className="group-hover:scale-125" />
          Contribute
        </BtnLink>
        <BtnLink
          title={`Join codinasion`}
          url={`https://github.com/codinasion/.github/issues/new?assignees=&labels=welcome&template=invitation.yml&title=Please+invite+me+to+Codinasion`}
          target="_blank"
        >
          <FaGithub className="group-hover:scale-125" />
          Join Codinasion
        </BtnLink>
      </div>
    );

  return <></>;
}
