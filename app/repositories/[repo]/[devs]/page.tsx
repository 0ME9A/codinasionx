"use client";
import { usePathname } from "next/navigation";
import Devs from "app/_components/DevsComp/Devs";
import useInfinite from "app/_hooks/useInfinite";
import useFetch from "app/_hooks/useFetch";

export default function Page() {
  const pathName = usePathname();
  const param = pathName?.split("/").at(2);
  const url = `https://api.github.com/repos/codinasion/${param}/contributors`;
  const { data, setIncrement, page, status, setStatus } = useFetch({
    url,
    storage: true,
    per_page: 60,
  });
  useInfinite({ funcVal: page, apiCall: setIncrement });

  return <Devs apiData={{ data, status, setStatus }} btn={true} />;
}
