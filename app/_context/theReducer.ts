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
          page: action.payload.page,
        },
      };
    case "REPOS":
      return {
        ...state,
        repos: {
          data: [...state.repos.data, ...action.payload.data],
          page: action.payload.page,
        },
      };
    case "SHOWOFFREPOS":
      // console.log(action.payload)
      return {
        ...state,
        showoffRepos: {
          data: [...state.showoffRepos.data, ...action.payload.data],
        },
      };
    default:
      return state;
  }
};
export default reducer;
