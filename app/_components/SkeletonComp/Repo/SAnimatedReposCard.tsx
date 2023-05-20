import SAtom from "../Common/SAtom";

export default function SAnimatedReposCard() {
  return (
    <div
      className={`w-full overflow-hidden relative aspect-square border-2 rounded-2xl lg:rounded-[50px] border-white dark:border-black`}>
      <SAtom style="w-full aspect-square scale-90"/>
      <div className="scale-90 p-5 absolute w-full h-full top-0 left-0 flex flex-col gap-2 justify-center ">
        <SAtom style="w-[80%] h-10"/>
        <SAtom style="w-[100] h-24"/>
        <div className="flex gap-2 w-1/2 md:w-1/3">
          <SAtom/>
          <SAtom/>
        </div>
      </div>
    </div>
  );
}
