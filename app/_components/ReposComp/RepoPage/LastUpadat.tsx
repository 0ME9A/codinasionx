import { dateFunc } from "app/_functions/functions";
import Box from "app/_components/LayoutsComp/Box";

export default function LastUpadat({ lastUpdata }: { lastUpdata: string }) {
  if (!lastUpdata) return <></>

  const date = dateFunc(lastUpdata)
  
  return (
    <Box title={`Last Update `} titlePlus={date}>
      <span className="block text-sm opacity-50">
        {date}
      </span>
    </Box>
  );
}
