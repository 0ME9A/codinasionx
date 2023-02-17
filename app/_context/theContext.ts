import { createContext } from "react";
import initialState from "./theInitial";
import reducer from "./theReducer";

type valuesType = {
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
