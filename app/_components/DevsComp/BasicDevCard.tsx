import Image from "next/image";
import Link from "next/link";

type DevType = {
  imgUrl: string;
  devName: string;
};
export default function BasicDevCard({ imgUrl, devName }: DevType) {
  return (
    <Link
      href={`/developers/${devName}`}
      title={devName}
      className="space-y-1 p-1 hover:shadow-lg border-2 border-transparent hover:border-darkII relative group dark:shadow-dark rounded-2xl overflow-hidden hover:bg-light dark:hover:bg-dark"
    >
      <Image
        src={imgUrl}
        alt={`${devName} profile avatar`}
        width={"40"}
        height={"40"}
        className={`w-[40px] aspect-square rounded-full group-hover:shadow-2xl mx-auto object-cover  scale-90 group-hover:scale-100 group-hover:brightness-125`}
      />
    </Link>
  );
}
