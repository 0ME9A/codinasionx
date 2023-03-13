import { ProgramType } from "app/_types";

type initialStateType = {
  theme: string;
  search: boolean;
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
  program: {
    data: ProgramType[] | [];
    status: number;
    compStatus: { aside: boolean, search: string, limit: number, tag: string | 'All' }
  };
};
const initialState: initialStateType = {
  theme: "dark",
  search: false,
  devs: { data: [], status: 404 },
  repos: { data: [], status: 404 },
  showoffRepos: { data: [], status: 404 },
  program: { data: [], status: 404, compStatus: { aside: false, search: '', limit: 1, tag: 'All' } }
};

export default initialState;
