import { ProgramType } from "app/_types";
import { createContext } from "react";
import initialState from "./theInitial";
import reducer from "./theReducer";

type valuesType = {
  theme: string;
  search: boolean;
  devs: {
    data: string[];
    status: number
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
type actionType = {
  type: string;
  payload: any;
};
type theContextType = {
  values: valuesType;
  dispatch: (state: any, action: actionType) => any;
};

export const theContext = createContext<theContextType>({
  values: initialState,
  dispatch: reducer,
});
