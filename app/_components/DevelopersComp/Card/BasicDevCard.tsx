import { codinasionDevType } from "app/_types/Devs";
import Image from "next/image";
import Link from "next/link";


export default function BasicDevCard({ data: { name, avatar, role = "contributor" } }: { data: codinasionDevType }) {
  return (
    <Link
      href={`/developers/${name}`}
      title={name}
      className="block space-y-1 h-fit p-1 hover:shadow-lg border-2 border-transparent hover:border-darkII relative group dark:shadow-dark rounded-2xl overflow-hidden hover:bg-light dark:hover:bg-dark">
      <Image
        src={avatar}
        alt={`${name} profile avatar`}
        width={"40"}
        height={"40"}
        className={`w-[40px] aspect-square rounded-full group-hover:shadow-2xl mx-auto object-cover scale-90 group-hover:scale-100 group-hover:brightness-125 shadow-md ${role === 'team' && '!shadow-orange-600 bg-orange-600'} ${role === 'member' && '!shadow-yellow-600 bg-yellow-600'} ${role === 'contributor' && '!shadow-blue-500 bg-blue-500'}`}
      />
    </Link>
  );
}
