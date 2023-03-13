type actionType = {
  type: string;
  payload: any;
};

function reducer(state: any, action: actionType) {
  console.log(state, '-----dispatch status----- ', action)
  switch (action.type) {
    case "THEME":
      return { ...state, theme: action.payload };
    case "SEARCH":
      return { ...state, search: action.payload };
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
    case "PROGRAM":
      return {
        ...state,
        program: {
          data: [...action.payload.data],
          status: action.payload.status,
          compStatus: { ...state.program.compStatus }
        },
      };
    case "PROGRAMASIDE":
      return {
        ...state,
        program: {
          ...state.program,
          compStatus: { ...state.program.compStatus, aside: action.payload }
        },
      };
    case "PROGRAMSEARCH":
      return {
        ...state,
        program: {
          ...state.program,
          compStatus: { ...state.program.compStatus, search: action.payload }
        },
      };
    case "PROGRAMTAG":
      return {
        ...state,
        program: {
          ...state.program,
          compStatus: { ...state.program.compStatus, tag: action.payload }
        },
      };
    case "PROGRAMLIMIT":
      return {
        ...state,
        program: {
          ...state.program,
          compStatus: { ...state.program.compStatus, limit: action.payload }
        },
      };
    default:
      return state;
  }
};
export default reducer;
