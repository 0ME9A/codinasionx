import { KEYWORDS, LIMIT, PLASIDE, PLMENU, TAB, TAG, WINDOW } from '../stateType';
import { codinasionDevApiType, codinasionDevType } from 'app/_types/Devs';
import { programType } from 'app/_types/Program';
import { createSlice } from '@reduxjs/toolkit';
import { repoType } from 'app/_types/Repos';

export interface CounterState {
    theme: string;
    search: { window: boolean, tab: string | null, keywords: string | null }
    program: { data: programType[]; status: number; };
    repositories: { data: repoType[]; status: number; };
    developers: { data: codinasionDevApiType[]; status: number; };
    repositoriesProperties: { limit: number };
    programProperties: { limit: number, tag: string | 'All' }
    issueProperties: { limit: number, tag: string | 'All' }
    // programProperties: { aside: boolean, limit: number, tag: string | 'All' }
    // issueProperties: { aside: boolean, limit: number, tag: string | 'All' }
    commonProperties: {
        projectLayout: {
            aside: boolean;
            menu: boolean;
        }
    }
}

const initialState: CounterState = {
    theme: "dark",
    search: { window: false, tab: "programs", keywords: null },
    program: { data: [], status: 404 },
    developers: { data: [], status: 404 },
    repositories: { data: [], status: 404 },
    repositoriesProperties: { limit: 1 },
    programProperties: { limit: 1, tag: 'All' },
    issueProperties: { limit: 1, tag: 'All' },
    commonProperties: { projectLayout: { aside: false, menu: true } }
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        theme: (state, action) => {
            state.theme = action.payload;
        },
        searchProperties: (state, action) => {
            switch (action.payload.type) {
                case WINDOW:
                    state.search = { ...state.search, window: action.payload.value }
                    break;
                case TAB:
                    state.search = { ...state.search, tab: action.payload.value }
                    break;
                case KEYWORDS:
                    state.search = { ...state.search, keywords: action.payload.value }
                    break;
                default:
                    state.search
                    break;
            }
        },

        commonPropertie: (state, action) => {
            switch (action.payload.type) {
                case PLASIDE:
                    state.commonProperties.projectLayout = { ...state.commonProperties.projectLayout, aside: action.payload.value }
                    break;
                case PLMENU:
                    state.commonProperties.projectLayout = { ...state.commonProperties.projectLayout, menu: action.payload.value }
                    break;
                default:
                    state.commonProperties.projectLayout
                    break;
            }
        },

        developers: (state, action) => {
            state.developers = { data: action.payload.data, status: action.payload.status }
        },
        repositories: (state, action) => {
            state.repositories = { data: action.payload.data, status: action.payload.status }
        },
        program: (state, action) => {
            state.program = { data: action.payload.data, status: action.payload.status }
        },
        programProperties: (state, action) => {
            switch (action.payload.type) {
                case LIMIT:
                    state.programProperties = { ...state.programProperties, limit: action.payload.value }
                    break;
                case TAG:
                    state.programProperties = { ...state.programProperties, tag: action.payload.value }
                    break;
                default:
                    state.programProperties;
                    break;
            }
        },
        repositoriesProperties: (state, action) => {
            switch (action.payload.type) {
                case LIMIT:
                    state.repositoriesProperties = { ...state.repositoriesProperties, limit: action.payload.value }
                    break;
                default:
                    state.repositoriesProperties;
                    break;
            }
        },
        issueProperties: (state, action) => {
            switch (action.payload.type) {
                case LIMIT:
                    state.issueProperties = { ...state.issueProperties, limit: action.payload.value }
                    break;
                case TAG:
                    state.issueProperties = { ...state.issueProperties, tag: action.payload.value }
                    break;
                default:
                    state.issueProperties;
                    break;
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { theme, searchProperties, program, developers, repositories, programProperties, issueProperties, repositoriesProperties, commonPropertie } = counterSlice.actions

export default counterSlice.reducer