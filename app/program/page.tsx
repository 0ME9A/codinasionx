import { Metadata } from "next";
import Index from "app/_components/ProgramComp";

export const metadata: Metadata = {
  title: `Program || Codinasion`,
  description: `Share solutions with the community on Codinasion's Program repository. Find good first issues, make coordinated contributions, and join an inclusive community.`,
};

export default function Page() {
  return (
    <Index />
  )
}