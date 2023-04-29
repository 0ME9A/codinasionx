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
      // { name: "good 1st issue", link: "/good-1st-issue" },
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
  { name: "linkfree-og", href: "/repositories/linkfree-og" },
  { name: "codinasion-tools", href: "/repositories/codinasion-tools" },
];

export const projects: urlType[] = [
  { name: "program", href: "/program" },
  // { name: "good 1st issue", href: "/good-1st-issue" },
  { name: "codinasion-tools", href: "https://tools.codinasion.org" },
];

export const SocialMedia: socialType[] = [
  { name: "gitHub", href: "https://github.com/codinasion", icon: <FaGithub /> },
  { name: "discord", href: "https://discord.com/invite/PzNmxsrXTX", icon: <FaDiscord /> },
  { name: "twitter", href: "https://twitter.com/codinasion", icon: <FaTwitter /> },
];
