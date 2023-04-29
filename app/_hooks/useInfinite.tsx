"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type useInfiniteType = {
  funcVal: any;
  funcCall: Dispatch<SetStateAction<any>>;
};
export default function useInfinite({ funcVal, funcCall }: any) {
  const [footerH, setFooterH] = useState<number>(100);
  useEffect(() => {
    const callApiFunc = () => window.innerHeight + window.scrollY > document.documentElement.scrollHeight - footerH && funcCall(funcVal);
    const footer = document?.querySelector("#footer")?.clientHeight || 100;

    setFooterH(footer);
    window.addEventListener("scroll", callApiFunc);
    return () => window.removeEventListener("scroll", callApiFunc);
  }, [funcCall, footerH, funcVal]);
}
