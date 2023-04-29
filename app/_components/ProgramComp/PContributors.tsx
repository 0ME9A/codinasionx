import { random } from "app/_functions/functions";
import BasicDevCard from "../DevsComp/BasicDevCard";
import Box from "../LayoutsComp/Box";

export default function PContributors({ contributors = [] }: { contributors: string[] }) {
  return (
    <Box
      title={"Contributors"}
      style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50`}>
      <div className="flex flex-wrap">
        {contributors.map((contributer: string) => <BasicDevCard imgUrl={`https://github.com/${contributer}.png`} devName={contributer} key={random()} />)}
      </div>
    </Box>
  );
}
