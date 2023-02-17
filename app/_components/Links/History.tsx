"use client";
import { useRouter } from "next/navigation";
import { MdOutlineArrowBackIos } from "react-icons/md";

type styleType = {
  text: string;
  style: string;
};
export default function History({ text, style }: styleType) {
  const router = useRouter();
  return (
    <button
      className={`p-2 px-4 flex items-center justify-center gap-2 font-medium rounded-full border-black dark:border-white border-2 bg-light dark:bg-dark group dark:text-white dark:shadow-darkShadow-md shadow-lightShadow-md hover:rounded-full ${style}`}
      type="button"
      onClick={() => router.back()}
    >
      <MdOutlineArrowBackIos />
      {text}
    </button>
  );
}
