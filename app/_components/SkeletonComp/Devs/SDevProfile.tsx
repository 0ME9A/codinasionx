import SContainer from "../Common/SContainer";
import SAtom from "../Common/SAtom";
import SBox from "../Common/SBox";

export default function SDevProfile() {
  return (
    <SContainer style="xl:container mx-auto !h-fit relative md:flex justify-center gap-5 item-start py-5 md:py-20">
      <SAtom style="w-[120px] h-10 hidden md:block absolute top-4 left-4 !rounded-full" />
      <SAtom style="aspect-square h-fit w-[20%] md:max-w-[300px] !rounded-full" />
      <SBox style="max-w-[600px] w-full relative md:mt-10 !h-fit shadow-none">
        <SAtom style="w-1/2 h-6" />
        <SAtom style="w-full h-6" />
        <SAtom style="w-[80%] h-6" />
        <SContainer style="!h-fit !mt-5">
          <div className="grid grid-cols-3 gap-2">
            <SAtom style="w-[80%] h-6" />
            <SAtom style="w-[80%] h-6" />
            <SAtom style="w-[80%] h-6" />
            <SAtom style="w-[80%] h-6" />
            <SAtom style="w-[80%] h-6" />
            <SAtom style="w-[80%] h-6" />
          </div>
        </SContainer>
        <div className="grid grid-cols-2 gap-2 pt-10 w-[80%]">
          <SAtom style="w-[80%] h-6" />
          <SAtom style="w-[80%] h-6" />
          <SAtom style="w-[80%] h-6" />
          <SAtom style="w-[80%] h-6" />
        </div>
      </SBox>
      <SAtom style="w-full h-10 mt-5 rounded-full md:hidden" />
    </SContainer>
  )
}
