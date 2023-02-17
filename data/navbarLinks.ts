const navbarLinks = [
  { name: "API", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Projects", href: "#" },
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

export default navbarLinks;
