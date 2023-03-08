import { createContext } from "react";
import initialState from "./theInitial";
import reducer from "./theReducer";

type valuesType = {
  theme: string;
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
