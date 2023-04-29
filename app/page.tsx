"use client";
import { Dispatch, SetStateAction } from "react";
import OrgHighlights from "./_components/AboutComp/OrgInfo/OrgHighlights";
import BackgroundLight from "./_components/LayoutsComp/BackgroundLights";
import Background from "./_components/LayoutsComp/BackgroundBlobs";
import ShowoffRepos from "./_components/ReposComp/ShowoffRepos";
import AnimatedDevs from "./_components/DevsComp/AnimatedDevs";
import Intro from "./_components/AboutComp/Intro";
import About from "./_components/AboutComp/About";

export default function HomePage() {
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
          <div className={`relative bg-gradient-to-br from-transparent mt-10 via-very-light to-light dark:via-very-dark dark:to-dark`}>
            <AnimatedDevs
              api={{ data: [], status: 404 }} header={true}/>
          </div>
        </div>
      </div>
    </>
  );
}
