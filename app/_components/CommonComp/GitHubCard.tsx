import Image from "app/_components/Image"
import Link from "next/link";

type RepoCardProps = {
    repo: string;
    style?: string;
};

export default function GitHubCard({ repo, style }: RepoCardProps) {
    return (
        <Link href={`https://github.com/${repo}`} target="_blank" className={`${style}`}>
            <Image
                src={`https://gh-card.dev/repos/${repo}.svg`}
                alt={`Repo Card for ${repo}`}
                className="w-full rounded-2xl shadow-lg hover:shadow-xl"
            />
        </Link>
    );
}
