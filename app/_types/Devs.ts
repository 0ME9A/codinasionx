import { Dispatch, SetStateAction } from "react";

export type devinfoType = {
  bio: string;
  type: string;
  name: string;
  blog: string;
  login: string;
  location: string;
  followers: number;
  following: number;
  avatar_url: string;
  public_gists: number;
  public_repos: number;
  twitter_username: null;
};

export type DevType = {
  imgUrl: string;
  devName: string;
  target?: string;
};

export type animateddevsType = {
  api: {
    data: devsDataType[];
    status: number;
  }
  header: boolean;
}
export type devsType = {
  api: {
    data: devsDataType[];
    status: number;
  }
  infinite: boolean;
}

export type devsDataType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  contributions: number;
};
