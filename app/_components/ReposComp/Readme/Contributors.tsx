import { devsType } from "app/repositories/[repo]/page";
import BasicDevCard from "app/_components/DevsComp/BasicDevCard";
import BasicLink from "app/_components/Links/BasicLink";
import Loading from "app/_components/Loading/Loading";
import Box from "app/_components/LayoutsComp/Box";

type contributorsTypes = {
  devs: devsType | null;
  params?: any;
  repoName: string | null;
};
export default function Contributor({ devs, repoName }: contributorsTypes) {
  console.log(devs);
  return (
    <Box title="Contributors">
      {devs && repoName ? (
        <div className="flex flex-wrap">
          {devs.slice(0, 15).map((item) => (
            <BasicDevCard
              key={crypto.randomUUID()}
              imgUrl={item.avatar_url}
              devName={item.login}
            />
          ))}
          {devs.length > 15 && (
            <BasicLink
              href={`/repositories/${repoName}/developers`}
              style="h-full pt-5 p-2 text-sm"
            >
              Expend
            </BasicLink>
          )}
        </div>
      ) : (
        <Loading basic={true} />
      )}
    </Box>
  );
}
