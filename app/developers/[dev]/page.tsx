import DevInfo from "app/_components/DevsComp/DevInfo";
import { fetchData } from "app/_functions/functions";

type devType = {
  params: { dev: string };
};
export default async function Page({ params }: devType) {
  const url = `https://api.github.com/users/${params.dev}`;
  const dev = await fetchData(url);

  // const dev = {
  //   login: "jfinley6",
  //   id: 12981495,
  //   node_id: "MDQ6VXNlcjEyOTgxNDk1",
  //   avatar_url: "https://avatars.githubusercontent.com/u/12981495?v=4",
  //   gravatar_id: "",
  //   url: "https://api.github.com/users/jfinley6",
  //   html_url: "https://github.com/jfinley6",
  //   followers_url: "https://api.github.com/users/jfinley6/followers",
  //   following_url:
  //     "https://api.github.com/users/jfinley6/following{/other_user}",
  //   gists_url: "https://api.github.com/users/jfinley6/gists{/gist_id}",
  //   starred_url: "https://api.github.com/users/jfinley6/starred{/owner}{/repo}",
  //   subscriptions_url: "https://api.github.com/users/jfinley6/subscriptions",
  //   organizations_url: "https://api.github.com/users/jfinley6/orgs",
  //   repos_url: "https://api.github.com/users/jfinley6/repos",
  //   events_url: "https://api.github.com/users/jfinley6/events{/privacy}",
  //   received_events_url:
  //     "https://api.github.com/users/jfinley6/received_events",
  //   type: "User",
  //   site_admin: false,
  //   name: "John Finley",
  //   company: null,
  //   blog: "https://www.linkedin.com/in/john-tyler-finley/",
  //   location: "Denver, CO",
  //   email: null,
  //   hireable: null,
  //   bio: "Software Engineer |\r\nRuby on Rails | React",
  //   twitter_username: null,
  //   public_repos: 22,
  //   public_gists: 0,
  //   followers: 3,
  //   following: 2,
  //   created_at: "2015-06-20T19:55:28Z",
  //   updated_at: "2022-12-30T19:05:26Z",
  // };

  // const dev = null

  return <DevInfo dev={dev} />;
}
