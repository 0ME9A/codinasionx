import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

import DefaultPreview from "@/public/logo.png";
import ProgramPreview from "@/public/Program.png";
import ToolsPreview from "@/public/Tools.png";
import Good1stIssuePreview from "@/public/Good1stIssue.png";

const projects = [
  {
    name: "Program",
    description:
      "An open-source codebase for sharing programming solutions. Good collection of `good first issue`",
    imageAlt: "Program",
    href: "https://github.com/codinasion/program",
  },
  {
    name: "Codinasion Tools",
    description: "A collection of open source tools.",
    imageAlt: "Codinasion Tools",
    href: "https://github.com/codinasion/codinasion-tools",
  },
  {
    name: "Good 1st Issue",
    description:
      "Good 1st Issue helps you find good first issues to contribute to open source projects.",
    imageAlt: "Good 1st Issue",
    href: "https://github.com/codinasion/good-1st-issue",
  },
];

export default function Example() {
  return (
    <div className="py-16 mb-10 px-5 sm:px-20">
      <h2 className="text-3xl font-bold tracking-tight sm:text-center sm:text-4xl my-10">
        Our Open Source Projects 😍
      </h2>
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        {projects.map((project) => (
          <div key={project.name} className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <Image
                src={
                  project.name === "Program"
                    ? ProgramPreview
                    : project.name === "Codinasion Tools"
                    ? ToolsPreview
                    : project.name === "Good 1st Issue"
                    ? Good1stIssuePreview
                    : DefaultPreview
                }
                alt={project.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <Link href={project.href} target="_blank">
                <span className="absolute inset-0" />
                {project.name}
              </Link>
            </h3>
            <p className="text-base font-semibold text-gray-900">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
