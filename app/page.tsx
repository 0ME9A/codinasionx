import TestimonialContainer from "./_components/TestimonialComp/TestimonialContainer";
import BackgroundGradient from "./_components/LayoutsComp/BackgroundGradient";
import OrgHighlights from "./_components/AboutComp/OrgInfo/OrgHighlights";
import BackgroundLight from "./_components/LayoutsComp/BackgroundLights";
import Background from "./_components/LayoutsComp/BackgroundHero";
import Intro from "./_components/AboutComp/Intro";
import Repos from "./_components/ReposComp/Repos";
import About from "./_components/AboutComp/About";
import Devs from "app/_components/DevsComp/Devs";

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
          <OrgHighlights />
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
