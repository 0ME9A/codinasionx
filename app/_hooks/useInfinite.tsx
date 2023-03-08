"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type useInfiniteType = {
  onUpdate: number;
  apiCall: Dispatch<SetStateAction<number>>;
};
export default function useInfinite({ onUpdate, apiCall }: useInfiniteType) {
  const [footerH, setFooterH] = useState<number>(100);
  useEffect(() => {
    const callApiFunc = () => window.innerHeight + window.scrollY > document.documentElement.scrollHeight - footerH && apiCall(onUpdate + 1);
    const footer = document?.querySelector("#footer")?.clientHeight || 100;

    setFooterH(footer);
    window.addEventListener("scroll", callApiFunc);
    return () => window.removeEventListener("scroll", callApiFunc);
  }, [apiCall, footerH, onUpdate]);
}
