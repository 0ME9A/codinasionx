export type devProjectGitType = {
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

export type devGitDataType = {
  // id: number;
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

export type codinasionDevApiOldType = {
  user: {
    id: number;
    login: string;
  };
  role: "team" | "member" | "contributor";
};

export type codinasionDevTypeOld = {
  name: string;
  avatar: string;
  role: "team" | "member" | "contributor";
};

export type codinasionDevType = {
  id: string;
  avatar: string;
};

export type devProjectGitApiType = {
  data: string[];
  status: number;
  error: boolean;
};

export type devApiGitInfoType = {
  data: devGitDataType;
  status: number;
  error: boolean;
};

export type devApiCodinasionType = {
  data: string[];
  status: number;
  error: boolean;
};

export type animatedDevsType = {
  api: string[];
  header: boolean;
};
