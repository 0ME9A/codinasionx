import { random } from "app/_functions/functions";
import Box from "app/_components/LayoutsComp/Box";

export default function Topics({ topics }: { topics: string[] }) {
  if (topics)
    return (
      <Box title="Topics">
        <ul className="flex flex-wrap gap-1">
          {topics.map((item: string) => {
            return (
              <li
                key={random()}
                className="p-2 text-sm py-0 text-gray-700 dark:text-gray-300 bg-light/50 dark:bg-dark/50 rounded-full"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </Box>
    );
  return <></>;
}
