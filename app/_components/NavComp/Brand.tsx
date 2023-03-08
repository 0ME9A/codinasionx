import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <div className="text-xl font-semibold uppercase flex gap-2 items-center">
      <Link
        href={"/"}
        title={"Home"}
        className={`border-2 p-[3px] rounded-full dark:border-white border-black glowII`}
      >
        <Image
          src={logo}
          alt={"brand avatar"}
          width={"100"}
          height={"100"}
          className={`rounded-full w-8 aspect-square animate-wiggle`}
        />
      </Link>

      <span className="flex flex-col">
        <Link href={"/"} title={"Home"}>
          Codinasion
        </Link>
        <span className="text-xs font-light">Codinasion ❤️ Open Source</span>
      </span>
    </div>
  );
}
