import { Metadata } from "next";
import Index from "app/_components/ReposComp";

export const metadata: Metadata = {
  title: `Repositories || Codinasion`,
  description: `Discover and contribute to open-source projects on Codinasion's repository. Find 'good first issue' tickets and make high-quality code contributions. Join our developer community events for collaboration and growth`,
};
export default function Page() {
  return (
    <Index />
  )
}