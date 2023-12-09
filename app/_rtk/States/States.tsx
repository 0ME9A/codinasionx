import {
  KEYWORDS,
  LIMIT,
  PLASIDE,
  PLMENU,
  TAB,
  TAG,
  WINDOW,
} from "../stateType";
import { good1stIssueType, labelType } from "app/_types/Good1stIssue";
import { programType } from "app/_types/Program";
import { createSlice } from "@reduxjs/toolkit";
import { repoType } from "app/_types/Repos";

export interface CounterState {
  theme: string;
  search: { window: boolean; tab: string | null; keywords: string | null };
  program: { data: programType[]; status: number; error: boolean };
  good1stissue: { data: good1stIssueType[]; status: number; error: boolean };
  issueLabel: { data: labelType[]; status: number; error: boolean };
  repositories: { data: repoType[]; status: number; error: boolean };
  developers: { data: string[]; status: number; error: boolean };
  repositoriesProperties: { limit: number };
  programProperties: { limit: number; tag: string | "All" };
  issueProperties: { limit: number; tag: string | "All" };
  commonProperties: {
    projectLayout: {
      aside: boolean;
      menu: boolean;
    };
  };
}

const initialState: CounterState = {
  theme: "dark",
  search: { window: false, tab: "programs", keywords: null },
  program: { data: [], status: 200, error: false },
  good1stissue: { data: [], status: 200, error: false },
  developers: { data: [], status: 200, error: false },
  issueLabel: { data: [], status: 200, error: false },
  repositories: { data: [], status: 200, error: false },
  repositoriesProperties: { limit: 1 },
  programProperties: { limit: 1, tag: "All" },
  issueProperties: { limit: 1, tag: "All" },
  commonProperties: { projectLayout: { aside: false, menu: true } },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    theme: (state, action) => {
      state.theme = action.payload;
    },
    searchProperties: (state, action) => {
      switch (action.payload.type) {
        case WINDOW:
          state.search = { ...state.search, window: action.payload.value };
          break;
        case TAB:
          state.search = { ...state.search, tab: action.payload.value };
          break;
        case KEYWORDS:
          state.search = { ...state.search, keywords: action.payload.value };
          break;
        default:
          state.search;
          break;
      }
    },

    commonPropertie: (state, action) => {
      switch (action.payload.type) {
        case PLASIDE:
          state.commonProperties.projectLayout = {
            ...state.commonProperties.projectLayout,
            aside: action.payload.value,
          };
          break;
        case PLMENU:
          state.commonProperties.projectLayout = {
            ...state.commonProperties.projectLayout,
            menu: action.payload.value,
          };
          break;
        default:
          state.commonProperties.projectLayout;
          break;
      }
    },

    developers: (state, action) => {
      state.developers = {
        data: action.payload.data,
        status: action.payload.status,
        error: action.payload.error,
      };
    },
    repositories: (state, action) => {
      state.repositories = {
        data: action.payload.data,
        status: action.payload.status,
        error: action.payload.error,
      };
    },
    program: (state, action) => {
      state.program = {
        data: action.payload.data,
        status: action.payload.status,
        error: action.payload.error,
      };
    },
    good1stissue: (state, action) => {
      state.good1stissue = {
        data: action.payload.data,
        status: action.payload.status,
        error: action.payload.error,
      };
    },
    issueLabel: (state, action) => {
      state.issueLabel = {
        data: action.payload.data,
        status: action.payload.status,
        error: action.payload.error,
      };
    },
    programProperties: (state, action) => {
      switch (action.payload.type) {
        case LIMIT:
          state.programProperties = {
            ...state.programProperties,
            limit: action.payload.value,
          };
          break;
        case TAG:
          state.programProperties = {
            ...state.programProperties,
            tag: action.payload.value,
          };
          break;
        default:
          state.programProperties;
          break;
      }
    },
    repositoriesProperties: (state, action) => {
      switch (action.payload.type) {
        case LIMIT:
          state.repositoriesProperties = {
            ...state.repositoriesProperties,
            limit: action.payload.value,
          };
          break;
        default:
          state.repositoriesProperties;
          break;
      }
    },
    issueProperties: (state, action) => {
      switch (action.payload.type) {
        case LIMIT:
          state.issueProperties = {
            ...state.issueProperties,
            limit: action.payload.value,
          };
          break;
        case TAG:
          state.issueProperties = {
            ...state.issueProperties,
            tag: action.payload.value,
          };
          break;
        default:
          state.issueProperties;
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  theme,
  searchProperties,
  program,
  developers,
  repositories,
  programProperties,
  issueProperties,
  repositoriesProperties,
  good1stissue,
  commonPropertie,
} = counterSlice.actions;

export default counterSlice.reducer;
