import { random } from "app/_functions/functions";
import BasicDevCard from "../DevelopersComp/Card/BasicDevCard";
import Box from "../LayoutsComp/Box";


export default function AsideContributors({ contributors }: { contributors: string[] }) {
  if(!contributors) return <></>

  return (
    <Box
      title={"Contributors"}>
      <ul className="flex flex-wrap">
        {contributors.map((item: string) =>
          <li key={random()}>
            <BasicDevCard              
              data={{
                id: item,
                avatar: `https://github.com/${item}.png`
              }}
            />
          </li>
        )}
      </ul>
    </Box>
  );
}
