import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Brand() {
  return (
    <div className="text-xl font-semibold uppercase flex gap-2 items-center">
      <Link
        href={"/"}
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
        <Link href={"/"} className="">
          Codinasion
        </Link>
        <span className="text-xs font-light">Codinasion ❤️ Open Source</span>
      </span>
    </div>
  );
}
