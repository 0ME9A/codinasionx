"use client";
import { RootState } from "./_components/RTK/Store/store";
import { useSelector } from "react-redux";
import OrgHighlights from "./_components/AboutComp/OrgInfo/OrgHighlights";
import AnimatedRepos from "./_components/ReposComp/AnimatedRepos";
import AnimatedDevs from "./_components/DevsComp/AnimatedDevs";
import Intro from "./_components/AboutComp/Intro";
import About from "./_components/AboutComp/About";


export default function HomePage() {
  const repos = useSelector((state: RootState) => state.counter.repositories)
  const devs = useSelector((state: RootState) => state.counter.developers)

  return (
    <>
      <Intro />
      <div className="bg-very-light dark:bg-very-dark relative z-10 w-full overflow-x-hidden">
        <OrgHighlights />
        <About />
        <AnimatedRepos api={repos} />
        <div className={`relative bg-gradient-to-br from-transparent mt-10 via-very-light to-light dark:via-very-dark dark:to-dark`}>
          <AnimatedDevs api={devs} header={true} />
        </div>
      </div>
    </>
  );
}
