import { dummayArray, random } from "app/_functions/functions";
import SAtom from "../Common/SAtom";
import Box from "../Common/SBox";

export default function SProgramArticle() {
  const i = dummayArray(15);

  return (
    <div className="p-2 space-y-2 w-full">
      <SAtom style="h-12 w-full" />
      <SAtom style="h-24 w-full mt-10" />

      <div className="py-5 space-y-2">
        <SAtom style="h-6 w-full" />
        <SAtom style="h-6 w-[80%]" />
        <SAtom style="h-6 w-[80%]" />
        <SAtom style="h-6 w-full" />
        <SAtom style="h-6 w-[50%]" />
      </div>

      <Box style="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {i.map(() => <SAtom style="h-6 w-full" key={random()} />)}
      </Box>

      <Box>
        <SAtom style="h-6 w-[20%]" />
        <SAtom style="h-6 w-[30%]" />
        <SAtom style="h-6 w-[20%]" />
        <SAtom style="h-6 w-[80%]" />
        <SAtom style="h-6 w-[40%]" />
        <SAtom style="h-6 w-[30%]" />
        <SAtom style="h-6 w-[30%]" />
        <SAtom style="h-6 w-[90%]" />
        <SAtom style="h-6 w-[90%]" />
        <SAtom style="h-6 w-[20%]" />
        <SAtom style="h-6 w-[20%]" />
        <SAtom style="h-6 w-[80%]" />
        <SAtom style="h-6 w-[10%]" />
        <SAtom style="h-6 w-[10%]" />
      </Box>

      <div className="!mt-10 space-y-2">
        <SAtom style="h-8 w-1/4" />
        <SAtom style="h-32 w-full" />
      </div>
    </div>
  );
}
