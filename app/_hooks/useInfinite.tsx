"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type useInfiniteType = {
  funcVal: { type: string, payload: any };
  funcCall: Dispatch<SetStateAction<{ type: string, payload: any }>>;
};
export default function useInfinite({ funcVal, funcCall }: useInfiniteType) {
  const [footerH, setFooterH] = useState<number>(100);
  useEffect(() => {
    const callApiFunc = () => window.innerHeight + window.scrollY > document.documentElement.scrollHeight - footerH && funcCall(funcVal);
    const footer = document?.querySelector("#footer")?.clientHeight || 100;

    setFooterH(footer);
    window.addEventListener("scroll", callApiFunc);
    return () => window.removeEventListener("scroll", callApiFunc);
  }, [funcCall, footerH, funcVal]);
}
