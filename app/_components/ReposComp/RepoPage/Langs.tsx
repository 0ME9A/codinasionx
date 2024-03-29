import { random } from "app/_functions/functions";
import Box from "app/_components/LayoutsComp/Box";
import Tag from "app/_components/CommonComp/Tag";

export default function Langs({ langs }: { langs: object | null }) {
  if (!langs) return <></>
  
  const langsArr = Object.keys(langs);

  return (
    <Box title="Languages">
      <ul className="flex flex-wrap gap-1">
        {langsArr.map((item: string) => <Tag key={random()} tag={item} />)}
      </ul>
    </Box>
  );
}
