import { DevType } from "app/_types/Devs";
import Image from "next/image";
import Link from "next/link";

export default function DevCard({ imgUrl, devName, target = "_self" }: DevType) {
  return (
    <Link
      href={`/developers/${devName}`}
      title={devName}
      target={target}
      className="grid justify-center space-y-1 p-2 hover:shadow-lg border-2 border-transparent relative group rounded-2xl overflow-hidden w-full hover:border-darkII shadow-dark hover:bg-light dark:hover:bg-dark focus:bg-light dark:focus:bg-dark focus:border-darkII focus:outline-0">
      <Image
        src={imgUrl}
        alt={`${devName} profile avatar`}
        width={"100"}
        height={"100"}
        className={`w-[80px] aspect-square rounded-full group-hover:shadow-2xl mx-auto object-cover  scale-90 group-hover:scale-100 group-hover:brightness-125`}
      />
      <span className="opacity-80 hover:opacity-100 text-center">
        {devName}
      </span>
    </Link>
  );
}
