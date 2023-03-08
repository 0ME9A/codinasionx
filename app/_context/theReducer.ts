type actionType = {
  type: string;
  payload: any;
};

const reducer = (state: any, action: actionType) => {
  switch (action.type) {
    case "THEME":
      return { ...state, theme: action.payload };
    case "DEVS":
      return {
        ...state,
        devs: {
          data: [...state.devs.data, ...action.payload.data],
          status: action.payload.status
        },
      };
    case "REPOS":
      return {
        ...state,
        repos: {
          data: [...state.repos.data, ...action.payload.data],
          status: action.payload.status
        },
      };
    case "SHOWOFFREPOS":
      return {
        ...state,
        showoffRepos: {
          data: [...state.showoffRepos.data, ...action.payload.data],
          status: action.payload.status
        },
      };
    default:
      return state;
  }
};
export default reducer;
