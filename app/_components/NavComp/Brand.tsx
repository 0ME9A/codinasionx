import logo from "@/public/icons/icon-32x32.png";
import Image from "next/image";
import Link from "next/link";


export default function Brand() {
  return (
    <header className="text-xl font-semibold uppercase flex gap-2 items-center">
      <Link
        href={"/"}
        title={"Home"}
        className={`border-2 p-[3px] rounded-full dark:border-white border-black glowII`}>
        <Image
          src={logo}
          alt={"brand logo"}
          width={"100"}
          height={"100"}
          className={`rounded-full w-8 aspect-square animate-wiggle`}
        />
      </Link>

      <Link href={"/"} title={"Home"}>
        <h2 className="flex flex-col">
          Codinasion
        </h2>
        <h3 className="text-xs font-light">Codinasion ❤️ Open Source</h3>
      </Link>
    </header>
  );
}
