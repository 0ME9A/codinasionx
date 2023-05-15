"use client";
import { useEffect, useState } from "react";

type UseInfiniteProps ={
  funcVal: any;
  funcCall: (funcVal: any) => void;
}

export default function useInfinite({ funcVal, funcCall }: UseInfiniteProps) {
  const [footerH, setFooterH] = useState<number>(100);

  const callApiFunc = () => {
    if (window.innerHeight + window.scrollY > document.documentElement.scrollHeight - footerH) {
      funcCall(funcVal);
    }
  };

  useEffect(() => {
    const footer = document?.querySelector("#footer")?.clientHeight || 100;
    setFooterH(footer);

    window.addEventListener("scroll", callApiFunc);
    return () => window.removeEventListener("scroll", callApiFunc);
  }, [funcCall, funcVal]);

  return null;
}


// export default function useInfinite({ funcVal, funcCall }) {
//   const [footerH, setFooterH] = useState<number>(100);
//   useEffect(() => {
//     const callApiFunc = () => window.innerHeight + window.scrollY > document.documentElement.scrollHeight - footerH && funcCall(funcVal);
//     const footer = document?.querySelector("#footer")?.clientHeight || 100;
    
//     setFooterH(footer);
//     window.addEventListener("scroll", callApiFunc);
//     return () => window.removeEventListener("scroll", callApiFunc);
//   }, [funcCall, footerH, funcVal]);
// }

// type useInfiniteType = {
//   funcVal: any;
//   funcCall: Dispatch<SetStateAction<any>>;
// };