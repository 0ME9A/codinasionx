import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from '../Apis/Pokimon'
import counterReducer from "../States/States"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch