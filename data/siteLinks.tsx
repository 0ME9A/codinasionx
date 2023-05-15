import { siteMapType, socialType, urlType } from "app/_types/siteMap";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

export const siteMap: siteMapType[] = [
  {
    url: "/",
    name: "home",
    child: null,
  },
  {
    url: "/events",
    name: "events",
    child: null,
  },
  {
    url: "/repositories",
    name: "repositories",
    child: [
      { name: "program", link: "/program" },
      { name: "api", link: "/api" },
    ],
  },
  {
    url: "/developers",
    name: "developers",
    child: null,
  },
  {
    url: "/about",
    name: "about",
    child: null,
  },
];

export const topRepos: urlType[] = [
  { name: "program", href: "/repositories/program" },
  { name: "good 1st issue", href: "/repositories/good-1st-issue" },
  { name: "codinasion-tools", href: "/repositories/codinasion-tools" },
];

export const projects: urlType[] = [
  { name: "program", href: "/program" },
  // { name: "good 1st issue", href: "/good-1st-issue" },
  { name: "codinasion-tools", href: "https://tools.codinasion.org" },
  { name: "api", href: "/api" },
];

export const SocialMedia: socialType[] = [
  { name: "gitHub", href: "https://github.com/codinasion", icon: <FaGithub /> },
  { name: "discord", href: "https://discord.com/invite/PzNmxsrXTX", icon: <FaDiscord /> },
  { name: "twitter", href: "https://twitter.com/codinasion", icon: <FaTwitter /> },
];

export const externaL = {
  discussion: { name: "discussion", href: "https://github.com/orgs/codinasion/discussions" },
  github: { name: "gitHub", href: "https://github.com/codinasion" },
  fearlessTech: { name: "fearlessTech", href: "https://github.com/FearlessTech" },
  eddieHub: { name: "eddieHub", href: "https://github.com/EddieHubCommunity" },
  discord: { name: "discord", href: "https://discord.com/invite/PzNmxsrXTX" },
  twitter: { name: "twitter", href: "https://twitter.com/codinasion" },
  mail: { name: "email", href: "heyome9a@gmail.com" },
  invite: { name: "join codinasion", href: `https://github.com/codinasion/.github/issues/new?assignees=&labels=welcome&template=invitation.yml&title=Please+invite+me+to+Codinasion` }
}

