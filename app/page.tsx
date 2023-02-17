import TestimonialContainer from "./_components/TestimonialComp/TestimonialContainer";
import BackgroundGradient from "./_components/LayoutsComp/BackgroundGradient";
import BackgroundLight from "./_components/LayoutsComp/BackgroundLights";
import Background from "./_components/LayoutsComp/BackgroundHero";
import AboutCards from "./_components/AboutComp/OrgInfo/OrgHighlights";
import Repos from "./_components/ReposComp/Repos";
import About from "./_components/AboutComp/About";
import Devs from "app/_components/DevsComp/Devs";
import Intro from "./_components/AboutComp/Intro";

export default async function HomePage() {
  return (
    <>
      <Background />
      <div className="relative z-10">
        <Intro />
      </div>
      <div className="relative z-10">
        <BackgroundLight />
        <div className="relative z-10">
          <AboutCards />
          <About />
          <Repos showOff={true} />
          <BackgroundGradient>
            <Devs forward={true} header={true} />
            <TestimonialContainer />
          </BackgroundGradient>
        </div>
      </div>
    </>
  );
}
