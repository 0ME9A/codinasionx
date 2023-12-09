import {
  authors,
  desc,
  icons,
  keywords,
  openGraph,
  robots,
  twitterMeta,
} from "@/data/siteMetadata";
import { Metadata } from "next";
import { fetchApi } from "./_api/getInitialApi";

import "atropos/atropos.css";
import "./globals.css";
import "./atropos.css";
import "./styles.css";

import LayoutClient from "./_components/LayoutsComp/layoutClient";

export const metadata: Metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: "Codinasion || Collaborate with Codinasion's Open-Source Community.",
  description: desc,
  generator: "Next.js",
  applicationName: "Codinasion",
  referrer: "no-referrer-when-downgrade",
  keywords: keywords([]),
  authors: authors,
  themeColor: "black",
  colorScheme: "light",
  creator: "Codinasion Team",
  publisher: "Codinasion Inc.",
  manifest: "/manifest.json",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: openGraph,
  robots: robots,
  icons: icons,
  twitter: twitterMeta({
    title: "Codinasion",
    authors: [],
    desc,
  }),
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const urls = {
    repositories: process.env.REPOSITORIESURL || "",
    developers: process.env.DEVELOPERSURL || "",
    programs: process.env.PROGRAMSURL || "",
  };

  const repos = await fetchApi(urls.repositories);
  const devs = await fetchApi(urls.developers);
  const prg = await fetchApi(urls.programs);

  return (
    <LayoutClient
      api={{
        repos,
        devs,
        prg,
      }}
    >
      {children}
    </LayoutClient>
  );
}
