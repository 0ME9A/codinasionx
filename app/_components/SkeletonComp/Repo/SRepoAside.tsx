import { dummyArray, random } from "app/_functions/functions";
import Line from "../Common/SAtom";
import Box from "../Common/SBox";

export default function SRepoAside() {
  const i = dummyArray(20);

  return (
    <div className="space-y-2 w-full">
      <div className="space-y-1">
        {i.slice(0, 7).map(() => (
          <div key={random()} className={`flex gap-2 items-start w-full`}>
            <Line style="w-6 aspect-square" />
            <Line style="w-full h-6" />
          </div>
        ))}
      </div>
      <Box style="mt-5">
        <div className="flex flex-wrap gap-2">
          {i.slice(0, 7).map(() => (
            <Line style="w-[30%] h-6" key={random()}/>
          ))}
        </div>
      </Box>
      <Box style="mt-5">
        <div className="flex flex-wrap gap-2">
          {i.slice(0, 10).map(() => (
            <Line style="w-[30%] h-6" key={random()}/>
          ))}
        </div>
      </Box>
      <Box>
        <div className="flex flex-wrap gap-3 pt-2">
          {i.slice(0, 17).map(() => (
            <Line style="h-8 aspect-square" key={random()} />
          ))}
        </div>
      </Box>
      <Box>
        <Line style="w-[100%] h-24" />
      </Box>
      <div className="space-y-2">
        <Line style="w-[100%] h-10" />
        <Line style="w-[100%] h-10" />
      </div>
    </div>
  );
}
