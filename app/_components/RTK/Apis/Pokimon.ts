import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pokemon } from 'app/RTK_Test/types'

// Define a service using a base URL and expected endpoints
import { HYDRATE } from 'next-redux-wrapper'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) => `pokemon/${name}`,
            // providesTags: ['pokemonApi']
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi

