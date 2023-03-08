import { Dispatch, SetStateAction } from "react";

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

export type qLinkType = {
  id: string | undefined;
  text: string;
  link: string;
  icon: JSX.Element;
}[];

export type devsType = Array<{
  id: number;
  login: string;
  avatar_url: string;
}>;

export type asideType = {
  repo: repoType;
  devs: devsType;
  langs: object | null;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

export type articleType = {
  repo: repoType;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

export type contributorsTypes = {
  devs: devsType;
  repoName: string;
};


// -----------------------------------------------------------

type status = {
  forks: number;
  stars: number;
};

export type showoffRepoCardType = {
  id: number | 0;
  imgUrl: string;
  title: string;
  desc: string;
  repoUrl: string;
  style?: string;
  order: number[];
  status: status;
};

// -----------------------------------------------------------

export type repoCardType = {
  imgUrl: string;
  title: string;
  desc: string;
  repoUrl: string;
  style?: string;
  status: status;
};
