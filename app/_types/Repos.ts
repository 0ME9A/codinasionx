import { devProjectGitType } from "./Devs";

type status = {
  forks: number;
  stars: number;
};

export type repoType = {
  name: string;
  description: string;
  languages_url: string;
  contributors_url: string;
  updated_at: string;
  homepage: string;
  stargazers_count: number;
  open_issues_count: number;
  topics: Array<string>;
  forks: number;
};

export type basicRepoCardType = {
  title: string;
  desc: string;
  repoUrl: string;
  style?: string;
  status: status;
}

export type qLinkType = {
  id: string | undefined;
  text: string;
  link: string;
  icon: JSX.Element;
};

export type asideType = {
  repo: {
    data: repoType;
    status: number
  };
  devs: {
    data: devProjectGitType[];
    status: number
  };
  langs: {
    data: object | null;
    status: number
  };
};

export type articleType = {
  repo: {
    data: repoType;
    status: number
  };
};

export type showoffRepoCardType = {
  imgUrl: string;
  title: string;
  desc: string;
  repoUrl: string;
  style?: string;
  status: status;
};
// export type showoffRepoCardType = {
//   id: number | 0;
//   imgUrl: string;
//   title: string;
//   desc: string;
//   repoUrl: string;
//   style?: string;
//   order: number[];
//   status: status;
// };

export type repoCardType = {
  imgUrl: string;
  title: string;
  desc: string;
  repoUrl: string;
  style?: string;
  status: status;
};

export type langType = {
  [key: string]: number;
}

export type readmeType = {
  repo: { data: repoType, status: number };
  lang: { data: langType, status: number };
  devs: { data: devProjectGitType[], status: number };
}