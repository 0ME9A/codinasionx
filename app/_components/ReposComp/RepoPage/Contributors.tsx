"use client";
import { devProjectGitType } from "app/_types/Devs";
import { random } from "app/_functions/functions";
import { usePathname } from "next/navigation";
import BasicDevCard from "app/_components/DevelopersComp/Card/BasicDevCard";
import BasicLink from "app/_components/Links&BtnsComp/BasicLink";
import Box from "app/_components/LayoutsComp/Box";

export default function Contributor({ devs }: { devs: devProjectGitType[] }) {
  const pathNeme = usePathname()
  
  if (!devs) return <></>

  return (
    <Box title="Contributors">
      <ul className="flex flex-wrap">
        {devs.slice(0, 15).map((item: devProjectGitType) => (
          <li key={random()}>
            <BasicDevCard
              data={{
                name: item.login,
                avatar: `https://github.com/${item.login}.png`,
                role: "contributor"
              }} />
          </li>
        ))}
        {devs.length > 15 && (
          <li>
            <BasicLink
              title={`Expend`}
              target={`_self`}
              href={`${pathNeme}/contributors/`}
              style="h-full pt-5 p-2 text-sm flex">
              Load More...
            </BasicLink>
          </li>
        )}
      </ul>
    </Box>
  );
}
