import HomeArticles from 'app/_components/Good-1st-issueComp/HomeArticles';
import HomeAside from 'app/_components/Good-1st-issueComp/HomeAside';

export default async function Page() {
  return null;
  
  const baseUrl = 'https://api.codinasion.org/';
  const urls = [`${baseUrl}good-1st-issue`, `${baseUrl}good-1st-issue/labels`];
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const [issue, labels] = await Promise.all(responses.map((res) => res.json()));
  const [issueStatus, labelsStatus] = responses;

  return (
    <div className={"flex lg:container mx-auto p-2 gap-3 relative"}>
      <HomeArticles data={issue} status={issueStatus.status} />
      <HomeAside data={labels} status={labelsStatus.status} allIssue={issue.length} />
    </div>
  );
}
