import { random } from "app/_functions/functions";
import Box from "app/_components/LayoutsComp/Box";

export default function Langs({ langs }: { langs: object | null }) {
  const langsArr = langs ? Object.keys(langs) : null;
  if (langsArr)
    return (
      <Box title="Languages">
        <ul className="flex flex-wrap gap-1">
          {langsArr.map((item: string) => (
            <li
              key={random()}
              className="p-2 text-sm py-0 text-gray-700 dark:text-gray-300 bg-light/50 dark:bg-dark/50 rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </Box>
    );
  return <></>;
}
