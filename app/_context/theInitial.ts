type initialStateType = {
  theme: string;
  devs: {
    data: string[];
    page: number;
  };
  repos: {
    data: string[];
    page: number;
  };
  showoffRepos: {
    data: string[];
  };
};
const initialState: initialStateType = {
  theme: "dark",
  devs: { data: [], page: 0 },
  repos: { data: [], page: 0 },
  showoffRepos: { data: [] },
};

export default initialState;
