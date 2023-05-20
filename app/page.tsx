"use client";
import { RootState } from "./_rtk/Store/store";
import { useSelector } from "react-redux";
import AnimatedDevsSection from "./_components/DevelopersComp/AnimatedDevsSection";
import HighlightSection from "./_components/AboutComp/Highlight/HighlightSection";
import AnimatedRepos from "./_components/ReposComp/AnimatedReposSection";
import JoinBanner from "./_components/CommonComp/JoinUsBanner";
import Aboutus from "./_components/AboutComp/About/Summary";
import Hero from "./_components/AboutComp/Hero";


export default function HomePage() {
  const repos = useSelector((state: RootState) => state.counter.repositories)
  const devs = useSelector((state: RootState) => state.counter.developers)

  return (
    <>
      <Hero />
      <div className="bg-very-light dark:bg-very-dark relative z-10 w-full overflow-x-hidden">
        <HighlightSection />
        <Aboutus />
        <AnimatedRepos api={repos} />
        <div className={`relative bg-gradient-to-br mt-10 md:mt-20 from-transparent via-very-light to-light dark:via-very-dark dark:to-dark`}>
          <AnimatedDevsSection api={devs} header={true} />
          <JoinBanner/>
        </div>
      </div>
    </>
  );
}
