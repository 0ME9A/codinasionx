import { Author, Icons, Robots } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const desc = `Find open-source programming solutions and contribute to the community with Codinasion's Program repository. Access a wide collection of 'good first issue' tickets and submit high-quality assignment-based contributions. Join a welcoming developer community that values inclusivity and diverse skill sets.`

export const authors: Author[] = [
  {
    name: 'Baliram Singh (0me9a)',
    url: 'https://ome9a.com',
  },
  {
    name: 'Harsh Raj (harshraj8843)',
    url: 'https://github.com/harshraj8843/',
  }
];

export function keywords(keywords: string[]) {
  return [
    "codinasion",
    "open source",
    "programming solutions",
    "good first issue",
    "contributions",
    "developer community",
    "GitHub organization",
    "team collaboration",
    ...keywords
  ]
}

export const openGraph: OpenGraph = {
  title: 'Codinasion - The Community for Developers',
  description: 'Join Codinasion - a community for developers, where you can learn, connect, and share your knowledge and skills.',
  url: 'https://codinasion.com',
  siteName: 'Codinasion',
  images: [
    {
      url: 'https://codinasion.com/images/codinasion-og.png',
      width: 1200,
      height: 630,
      alt: 'Codinasion - The Community for Developers',
    },
  ],
  locale: 'en-US',
  type: 'website',
}

export const robots: Robots = {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    'max-video-preview': 'none',
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

export const icons: Icons = {
  icon: [{ url: '/icons/icon-16x16.png' }, new URL('/icons/icon-16x16.png', 'https://codinasion.org')],
  shortcut: ['/icons/icon-32x32.png'],
  apple: [
    { url: '/icons/icon-32x32.png' },
    { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
  other: [
    {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/apple-touch-icon.png',
    },
  ],
};

export function twitterMeta({ title, desc, authors }: { title: string, desc: string, authors: string[]}) {
  const twitter = {
    card: 'summary_large_image',
    title: title,
    description: desc,
    domain: 'codinasion.org',
    siteId: '@codinasion',
    creatorId: '@codinasion',
    images: ['/shareCardImg/twitter.png'],
  }

  return twitter
}

export function linkedInMeta({ title, desc, authors }: { title: string, desc: string, authors: string[] }) {
  const linkedin = {
    title: title,
    description: desc,
    thumbnail: {
      url: '/shareCardImg/linkedin.png',
      width: 1200,
      height: 630,
    },
  }

  return linkedin
}

export const commonData = {
  title: "Codinasion",
  description: "Codinasion is a global community of developers who collaborate, create, and innovate with open source. Our mission is to provide valuable resources, mentorship, and opportunities to developers of all levels. We offer a range of programming solutions, tools, and resources in multiple languages that are free, open-source, and available to anyone who wants to contribute or learn. Whether you're a seasoned developer or just starting your coding journey, we welcome you to join our community and explore all that Codinasion has to offer.",
  siteUrl: "https://codinasion.org",
  github_url: "https://github.codinasion.org",
  twitter_url: "https://twitter.codinasion.org",
  discord_url: "https://discord.codinasion.org",
}
