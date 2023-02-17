import Loading from "app/_components/Loading/Loading";
import BtnLink from "app/_components/Links/BtnLink";
import { FaGithub } from "react-icons/fa";

export default function JoinContribution({
  repoName,
}: {
  repoName: string | null;
}) {
  return repoName ? (
    <div className="p-2 space-y-2 mt-5">
      <BtnLink
        url={`https://github.com/codinasion/${repoName}`}
        target="_blank"
      >
        <FaGithub className="group-hover:scale-125" />
        Contribute
      </BtnLink>
      <BtnLink
        url={`https://github.com/codinasion/.github/issues/new?assignees=&labels=welcome&template=invitation.yml&title=Please+invite+me+to+Codinasion`}
        target="_blank"
      >
        <FaGithub className="group-hover:scale-125" />
        Join Codinasion
      </BtnLink>
    </div>
  ) : (
    <Loading basic={true} />
  );
}
