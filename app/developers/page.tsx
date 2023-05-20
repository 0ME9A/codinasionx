import { Index } from "app/_components/DevelopersComp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Developers || Codinasion`,
  description: `Codinasion's events cover a range of activities, from new project announcements and upgrades to code help sessions and meeting announcements. As a developer community, Codinasion's events provide opportunities for members to engage with one another and collaborate on open-source projects.`,
};

export default function Page() {
  return <Index />
}