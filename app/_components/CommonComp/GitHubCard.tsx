import Image from "next/image";
import Link from "next/link";

type RepoCardProps = {
    repo: string;
    style?: string;
};

export default function GitHubCard({ repo, style }: RepoCardProps) {
    if (!repo) return <></>

    return (
        <Link href={`https://github.com/${repo}`} target="_blank" className={`shadow-xl h-fit shadow-gray-500/10 ${style}`} referrerPolicy={"no-referrer"}>
            <Image
                src={`https://gh-card.dev/repos/${repo}.svg`}
                alt={`Repo Card for ${repo}`}
                width={`600`}
                height={`150`}
                className="w-full rounded-2xl shadow-lg hover:shadow-xl"
            />
        </Link>
    );
}
