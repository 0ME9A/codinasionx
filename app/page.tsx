"use client";
import { Dispatch, SetStateAction, useContext } from "react";
import { theContext } from "./_context/theContext";
import OrgHighlights from "./_components/AboutComp/OrgInfo/OrgHighlights";
import BackgroundLight from "./_components/LayoutsComp/BackgroundLights";
import Background from "./_components/LayoutsComp/BackgroundBlobs";
import ShowoffRepos from "./_components/ReposComp/ShowoffRepos";
import Intro from "./_components/AboutComp/Intro";
import About from "./_components/AboutComp/About";
import Devs from "./_components/DevsComp/Devs";

export default function HomePage() {
  const context = useContext(theContext);
  const { values: { devs: { data: devsData, status: devsStatus }}} = context;

  const alertError: Dispatch<SetStateAction<number>> = (): number => 404;

  return (
    <>
      <Background />
      <div className="relative z-10">
        <Intro />
      </div>
      <div className="relative z-10">
        <BackgroundLight />
        <div className="relative z-10">
          <OrgHighlights />
          <About />
          <ShowoffRepos />
          <div
            className={`relative bg-gradient-to-br from-transparent mt-10 via-very-light to-light dark:via-very-dark dark:to-dark`}
          >
            <Devs
              apiData={{ data: devsData, status: devsStatus, setStatus: alertError }}
              btn={false}
              header={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
