import { random } from "app/_functions/functions";
import BasicDevCard from "../DevsComp/Card/BasicDevCard";
import Box from "../LayoutsComp/Box";

export default function AsideContributors({ contributors }: { contributors: string[] }) {
  return (
    <Box
      title={"Contributors"}
      style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50`}>
      <div className="flex flex-wrap">
        {contributors.map((item: string) =>
          <BasicDevCard
            key={random()}
            data={{
              name: item,
              avatar: `https://github.com/${item}.png`,
              role: "contributor"
            }}
          />)}
      </div>
    </Box>
  );
}
