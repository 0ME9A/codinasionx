"use client";
import { developers, repositories, program } from "../RTK/States/States";
import { codinasionDevApiType, codinasionDevType } from "app/_types/Devs";
import { programType } from "app/_types/Program";
import { repoType } from "app/_types/Repos";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

type rootDispatchType = {
    api: {
        repos: { data: repoType[], status: number },
        devs: { data: codinasionDevApiType[], status: number },
        prg: { data: programType[], status: number },
    }
}
export default function RootDispatch({ api }: rootDispatchType) {
    const { repos, devs, prg } = api;
    const dispatch = useDispatch();

    useEffect(() => {
        repos.data.length && repos.status === 200 && dispatch(repositories(repos));
        devs.data.length && devs.status === 200 && dispatch(developers(devs));
        prg.data.length && devs.status === 200 && dispatch(program(prg));
    }, [devs, prg, repos])

    return null
}