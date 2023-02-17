import Loading from "app/_components/Loading/Loading";
import Box from "app/_components/LayoutsComp/Box";

export default function Topics({ topics }: { topics: string[] | null }) {
  return (
    <Box title="Topics">
      {topics ? (
        <ul className="flex flex-wrap gap-1">
          {topics.map((item: string) => {
            return (
              <li
                key={crypto.randomUUID()}
                className="p-2 text-sm py-0 text-gray-700 dark:text-gray-300 bg-light/50 dark:bg-dark/50 rounded-full"
              >
                {item}
              </li>
            );
          })}
        </ul>
      ) : (
        <Loading basic={true} />
      )}
    </Box>
  );
}
