import Link from "next/link";

type SRType = {
    title: string;
    desc: string;
    style?: string;
}
export default function SRepoCard({ title, desc, style }: SRType) {
    return (
        <Link href={`/repositories/${title}`} title={'ReadMe'} className={`p-2 py-5 block odd:bg-gray-500/10 hover:bg-light dark:hover:bg-dark focus:bg-light dark:focus:bg-dark focus:outline-0 ${style}`}>
            <h2 className="text-xl">{title}</h2>
            <p className="text-gray-500">{desc}</p>
        </Link>
    )
}