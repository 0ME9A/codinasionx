import { dateFun } from "app/_functions/functions";
import Box from "app/_components/LayoutsComp/Box";

export default function LastUpadat({
  lastUpdata,
}: {
  lastUpdata: string | null;
}) {
  return (
    <Box title="Last Update">
      <span className="block text-sm opacity-50">
        {dateFun(lastUpdata ? lastUpdata : "")}
      </span>
    </Box>
  );
}
