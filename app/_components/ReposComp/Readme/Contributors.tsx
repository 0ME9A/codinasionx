import { contributorsTypes} from "app/_types/Repos";
import { random } from "app/_functions/functions";
import BasicDevCard from "app/_components/DevsComp/BasicDevCard";
import BasicLink from "app/_components/Links&Btns/BasicLink";
import Box from "app/_components/LayoutsComp/Box";

export default function Contributor({ devs, repoName }: contributorsTypes) {
  if (devs && repoName) {
    return (
      <Box title="Contributors">
        <div className="flex flex-wrap">
          {devs.slice(0, 15).map((item) => (
            <BasicDevCard
              key={random()}
              imgUrl={item.avatar_url}
              devName={item.login}
            />
          ))}
          {devs.length > 15 && (
            <BasicLink
              title={`Expend`}
              href={`/repositories/${repoName}/developers`}
              style="h-full pt-5 p-2 text-sm"
            >
              Expend
            </BasicLink>
          )}
        </div>
      </Box>
    );
  }
  return <></>;
}
