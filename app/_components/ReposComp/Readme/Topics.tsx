import { random } from "app/_functions/functions";
import Box from "app/_components/LayoutsComp/Box";
import Tag from "app/_components/CommonComp/Tag";

export default function Topics({ topics }: { topics: string[] }) {
  if (topics)
    return (
      <Box title="Topics">
        <ul className="flex flex-wrap gap-1">
          {topics.map((item: string) => <Tag key={random()} tag={item} />)}
        </ul>
      </Box>
    );
  return <></>;
}
