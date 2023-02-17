"use client";
import TestimonialContainer from "app/_components/TestimonialComp/TestimonialContainer";
import RepoDevs from "app/_components/DevsComp/RepoDevs";

export default function Page() {
  return (
    <div className="relative z-10">
      <RepoDevs />
      <TestimonialContainer />
    </div>
  );
}
