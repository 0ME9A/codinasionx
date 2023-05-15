import { random } from "app/_functions/functions";
import { codinasionDevApiType } from "app/_types/Devs";
import BasicDevCard from "../DevsComp/Card/BasicDevCard";
import Box from "../LayoutsComp/Box";

export default function AsideContributors({ contributors }: { contributors: codinasionDevApiType[] }) {
  return (
    <Box
      title={"Contributors"}
      style={`p-3 rounded-3xl p-2 bg-very-light lg:bg-white/50 dark:bg-very-dark dark:lg:bg-black/50`}>
      <div className="flex flex-wrap">
        {contributors.map((item: codinasionDevApiType) =>
          <BasicDevCard
            key={random()}
            data={{
              name: item.user.login,
              avatar: `https://github.com/${item.user.login}.png`,
              role: item.role
            }}
          />)}
      </div>
    </Box>
  );
}
