"use client";
import { developers, repositories, program } from "app/_rtk/States/States";
import { programType } from "app/_types/Program";
import { repoType } from "app/_types/Repos";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

type rootDispatchType = {
  api: {
    repos: { data: repoType[]; status: number; error: boolean };
    devs: { data: string[]; status: number; error: boolean };
    prg: { data: programType[]; status: number; error: boolean };
  };
};
export default function RootDispatch({ api }: rootDispatchType) {
  const { repos, devs, prg } = api;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(repositories(repos));
    dispatch(developers(devs));
    dispatch(program(prg));
  }, [devs, prg, repos]);

  return null;
}
