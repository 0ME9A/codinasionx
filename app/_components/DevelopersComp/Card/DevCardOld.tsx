"use client";
import { searchProperties } from "app/_rtk/States/States";
import { codinasionDevType } from "app/_types/Devs";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";

type devType = {
  data: codinasionDevType;
  target?: "_self" | "_blank";
};

export default function DevCardOld({
  data: { id, avatar = "contributor" },
  target = "_self",
}: devType) {
  const dispatch = useDispatch();
  return (
    <Link
      href={`/developers/${id}`}
      title={id}
      target={target}
      onClick={() =>
        dispatch(searchProperties({ type: "WINDOW", value: false }))
      }
      className="grid h-fit justify-center space-y-1 p-2 hover:shadow-lg border-2 border-transparent relative group rounded-2xl overflow-hidden w-full hover:border-darkII shadow-dark hover:bg-light dark:hover:bg-dark focus:bg-light dark:focus:bg-dark focus:border-darkII focus:outline-0"
    >
      <Image
        src={avatar}
        alt={`${name} profile avatar`}
        width={"100"}
        height={"100"}
        className={`w-[80px] aspect-square rounded-full group-hover:shadow-2xl mx-auto object-cover scale-90 group-hover:scale-100 group-hover:brightness-125 shadow-lg !shadow-blue-500 bg-blue-500`}
      />
      <span className="opacity-80 hover:opacity-100 text-center truncate">
        {id}
      </span>
    </Link>
  );
}
