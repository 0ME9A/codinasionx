import { codinasionDevType } from "app/_types/Devs";
import Image from "next/image";
import Link from "next/link";

export default function BasicDevCard({
  data: { id, avatar },
}: {
  data: codinasionDevType;
}) {
  return (
    <Link
      href={`/developers/${id}`}
      title={id}
      className="block space-y-1 h-fit p-1 hover:shadow-lg border-2 border-transparent hover:border-darkII relative group dark:shadow-dark rounded-2xl overflow-hidden hover:bg-light dark:hover:bg-dark"
    >
      <Image
        src={avatar}
        alt={`${id} profile avatar`}
        width={"40"}
        height={"40"}
        className={`w-[40px] aspect-square rounded-full group-hover:shadow-2xl mx-auto object-cover scale-90 group-hover:scale-100 group-hover:brightness-125 shadow-md !shadow-blue-500 bg-blue-500`}
      />
    </Link>
  );
}
