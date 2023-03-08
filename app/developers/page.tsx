"use client";
import useInfinite from "app/_hooks/useInfinite";
import Devs from "app/_components/DevsComp/Devs";
import useFetch from "app/_hooks/useFetch";

export default function Page() {
  const url = "https://api.github.com/repos/codinasion/program/contributors";
  const { data, setIncrement, page, status, setStatus } = useFetch({
    url,
    storage: true,
    per_page: 60,
  });
  useInfinite({ onUpdate: page, apiCall: setIncrement });
  return <Devs apiData={{ data, status, setStatus }} btn={true} />;
}
