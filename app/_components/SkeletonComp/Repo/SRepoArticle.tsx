import { dummyArray, random } from "app/_functions/functions";
import Box from "../Common/SBox";
import Line from "../Common/SAtom";

export default function SRepoArticle() {
  const i = dummyArray(10);

  return (
    <div className="space-y-2 w-full">
      <div className="p-2 space-y-2">
        <Line style="h-12 w-[80%] rounded-xl" />
        <Line style="h-24 w-[100%] rounded-xl" />
      </div>
      <Box style="!shadow-none !bg-transparent" key={random()}>
        <Line style="h-6 w-[40%] rounded-xl" />
        <Line style="h-6 w-[100%] rounded-xl" />
        <Line style="h-6 w-[100%] rounded-xl" />
        <Line style="h-6 w-[60%] rounded-xl" />
      </Box>
      <Box style="!shadow-none !bg-transparent" key={random()}>
        <Line style="h-20 w-full" />
      </Box>
      <Box style="!shadow-none !bg-transparent" key={random()}>
        <Line style="h-28 w-full" />
      </Box>
    </div>
  );
}
