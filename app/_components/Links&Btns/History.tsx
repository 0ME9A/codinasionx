"use client";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { historyType } from "app/_types/Links&Btns";
import { useRouter } from "next/navigation";

export default function History({ text, style }: historyType) {
  const router = useRouter();
  return (
    <button
      title={text}
      className={`p-2 px-4 flex items-center justify-center gap-2 font-medium rounded-full border-black dark:border-white border-2 bg-light dark:bg-dark group dark:text-white dark:shadow-darkShadow-md shadow-lightShadow-md hover:rounded-full ${style}`}
      type="button"
      onClick={() => router.back()}
    >
      <MdOutlineArrowBackIos />
      {text}
    </button>
  );
}
