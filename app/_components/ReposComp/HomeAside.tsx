"use client";
import {
  filterUniqueCondinasionDevs,
  filterUniqueRepos,
} from "app/_functions/filters";
import { commonData } from "@/data/siteMetadata";
import { RootState } from "app/_rtk/Store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SHomeAside from "../SkeletonComp/Repo/SHomeAside";
import Contributors from "./Contributors";
import Aside from "../LayoutsComp/Aside";
import Recommended from "./Recommended";
import Box from "../LayoutsComp/Box";

export default function HomeAside() {
  const { data: devs, status: devStatus } = useSelector(
    (state: RootState) => state.counter.developers
  );
  const { data: repos, status: repoStatus } = useSelector(
    (state: RootState) => state.counter.repositories
  );
  const [isMount, setMount] = useState(false);
  const filteredRepos = filterUniqueRepos(repos, "codinasion");
  const filteredContributors = filterUniqueCondinasionDevs(devs, "team");

  useEffect(() => setMount(true), []);

  if (!isMount)
    return (
      <Aside>
        <SHomeAside />
      </Aside>
    );

  return (
    <Aside>
      <Box title={"Codinasion repositories"}>
        <p className="text-gray-700 dark:text-gray-400 ">
          {commonData.repoDesc}
        </p>
      </Box>
      {devStatus === 200 && (
        <Contributors contributors={filteredContributors} />
      )}
      {repoStatus === 200 && <Recommended repos={filteredRepos} />}
    </Aside>
  );
}
