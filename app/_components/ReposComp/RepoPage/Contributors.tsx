"use client";
import { devGitDataType, devProjectGitType } from "app/_types/Devs";
import { random } from "app/_functions/functions";
import { usePathname } from "next/navigation";
import BasicDevCard from "app/_components/DevelopersComp/Card/BasicDevCard";
import BasicLink from "app/_components/Links&BtnsComp/BasicLink";
import Box from "app/_components/LayoutsComp/Box";

export default function Contributor({
  devs,
}: {
  devs: string[] | devGitDataType[];
}) {
  const pathName = usePathname();

  if (!devs) return <></>;

  return (
    <Box title="Contributors">
      <ul className="flex flex-wrap">
        {devs.slice(0, 15).map((item: string | devGitDataType) => (
          <li key={random()}>
            <BasicDevCard
              data={{
                id: typeof item === "string" ? item : item.login,
                avatar: `https://github.com/${
                  typeof item === "string" ? item : item.login
                }.png`,
              }}
            />
          </li>
        ))}
        {devs.length > 15 && (
          <li>
            <BasicLink
              title={`Expend`}
              target={`_self`}
              href={`${pathName}/contributors/`}
              style="h-full pt-5 p-2 text-sm flex"
            >
              Load More...
            </BasicLink>
          </li>
        )}
      </ul>
    </Box>
  );
}
