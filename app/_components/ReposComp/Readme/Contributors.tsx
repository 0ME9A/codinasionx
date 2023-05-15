"use client";
import { devGitDataTypeII } from "app/_types/Devs";
import { random } from "app/_functions/functions";
import { usePathname } from "next/navigation";
import BasicDevCard from "app/_components/DevsComp/Card/BasicDevCard";
import BasicLink from "app/_components/Links&Btns/BasicLink";
import Box from "app/_components/LayoutsComp/Box";

export default function Contributor({ devs }: { devs: devGitDataTypeII[] }) {
  const pathNeme = usePathname()

  if (devs) {
    return (
      <Box title="Contributors">
        <div className="flex flex-wrap">
          {devs.slice(0, 15).map((item: devGitDataTypeII) => (
            <BasicDevCard
              key={random()}
              data={{
                name: item.login,
                avatar: `https://github.com/${item.login}.png`,
                role: "contributor"
              }} />
          ))}
          {devs.length > 15 && (
            <BasicLink
              title={`Expend`}
              target={`_self`}
              href={`${pathNeme}/contributors/`}
              style="h-full pt-5 p-2 text-sm">
              Expend
            </BasicLink>
          )}
        </div>
      </Box>
    );
  }
  return <></>;
}
