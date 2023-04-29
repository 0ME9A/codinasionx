import type { PayloadAction } from '@reduxjs/toolkit'
import { devsDataType } from 'app/_types/Devs';
import { createSlice } from '@reduxjs/toolkit';
import { repoType } from 'app/_types/Repos';
import { ProgramType } from 'app/_types';

export interface CounterState {
    value: number
    theme: string;
    search: { window: boolean, tab: string | null, keywords: string | null }
    program: { data: ProgramType[]; status: number; };
    repositories: { data: repoType[]; status: number; };
    developers: { data: devsDataType[]; status: number; };
    repositoriesProperties: { aside: boolean, limit: number };
    programProperties: { aside: boolean, limit: number, tag: string | 'All' }
    issueProperties: { aside: boolean, limit: number, tag: string | 'All' }
}

const initialState: CounterState = {
    value: 0,
    theme: "dark",
    search: { window: false, tab: "programs", keywords: null },
    program: { data: [], status: 404 },
    developers: { data: [], status: 404 },
    repositories: { data: [], status: 404 },
    repositoriesProperties: { aside: false, limit: 1 },
    programProperties: { aside: false, limit: 1, tag: 'All' },
    issueProperties: { aside: false, limit: 1, tag: 'All' }
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
                case "WINDOW":
                    state.search = { ...state.search, window: action.payload.value }
                    break;
                case "TAB":
                    state.search = { ...state.search, tab: action.payload.value }
                    break;
                case "KEYWORDS":
                    state.search = { ...state.search, keywords: action.payload.value }
                    break;
                default:
                    state.search
                    break;
            }
        },
        developers: (state, action) => {
            console.log(action, '-----deves action')
            state.developers = { data: action.payload.api, status: action.payload.status }
        },
        repositories: (state, action) => {
            console.log(action, '-----repos action')
            state.repositories = { data: action.payload.api, status: action.payload.status }
        },
        program: (state, action) => {
            console.log(action, '-----program')
            state.program = { data: action.payload.api, status: action.payload.status }
        },
        programProperties: (state, action) => {
            switch (action.payload.type) {
                case "ASIDE":
                    state.programProperties = { ...state.programProperties, aside: action.payload.value }
                    break;
                case "LIMIT":
                    state.programProperties = { ...state.programProperties, limit: action.payload.value }
                    break;
                case "TAG":
                    state.programProperties = { ...state.programProperties, tag: action.payload.value }
                    break;
                default:
                    state.programProperties;
                    break;
            }
        },
        repositoriesProperties: (state, action) => {
            switch (action.payload.type) {
                case "ASIDE":
                    state.repositoriesProperties = { ...state.repositoriesProperties, aside: action.payload.value }
                    break;
                case "LIMIT":
                    state.repositoriesProperties = { ...state.repositoriesProperties, limit: action.payload.value }
                    break;
                default:
                    state.repositoriesProperties;
                    break;
            }
        },
        issueProperties: (state, action) => {
            switch (action.payload.type) {
                case "ASIDE":
                    state.issueProperties = { ...state.issueProperties, aside: action.payload.value }
                    break;
                case "LIMIT":
                    state.issueProperties = { ...state.issueProperties, limit: action.payload.value }
                    break;
                case "TAG":
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
export const { theme, searchProperties, program, developers, repositories, programProperties, issueProperties, repositoriesProperties } = counterSlice.actions

export default counterSlice.reducer