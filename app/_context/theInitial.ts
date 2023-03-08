type initialStateType = {
  theme: string;
  devs: {
    data: string[];
    status: number;
  };
  repos: {
    data: string[];
    status: number;
  };
  showoffRepos: {
    data: string[];
    status: number;
  };
};
const initialState: initialStateType = {
  theme: "dark",
  devs: { data: [], status: 404 },
  repos: { data: [], status: 404 },
  showoffRepos: { data: [], status: 404 },
};

export default initialState;
