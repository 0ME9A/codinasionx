export type navLinkType = {
  param: string;
  name: string;
  child:
    | {
        name: string;
        link: string;
      }[]
    | null;
};
export const navLinks: navLinkType[] = [
  {
    param: "/",
    name: "home",
    child: null,
  },
  {
    param: "/events",
    name: "events",
    child: null,
  },
  {
    param: "/repositories",
    name: "repositories",
    child: [
      { name: "program", link: "/program" },
      { name: "good 1st issue", link: "/good-1st-issue" },
      { name: "LinkFree-OG", link: "/linkfree-og" },
    ],
  },
  {
    param: "/developers",
    name: "developers",
    child: null,
  },
  {
    param: "/about",
    name: "about",
    child: null,
  },
];

type urlType = {
  name: string;
  href: string;
}[];
export const siteMap: urlType = [
  { name: "Home", href: "/" },
  { name: "Repositories", href: "/repositories" },
  { name: "Developers", href: "/developers" },
  { name: "About", href: "/about" },
];
export const topRepos: urlType = [
  { name: "Program", href: "/repositories/program" },
  { name: "Codinasion-Tools", href: "/repositories/codinasion-tools" },
  { name: "Good 1st issue", href: "/repositories/good-1st-issue" },
  { name: "LinkFree-OG", href: "/repositories/LinkFree-OG" },
];
export const SocialMedia: urlType = [
  { name: "GitHub", href: "https://github.com/codinasion" },
  { name: "Discord", href: "https://discord.com/invite/PzNmxsrXTX" },
  { name: "Twitter", href: "https://twitter.com/codinasion" },
];
