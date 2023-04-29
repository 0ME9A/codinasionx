"use client"


import { useGetPokemonByNameQuery } from "app/_components/RTK/Apis/Pokimon"

export default function Poke() {
  const { data, error, isLoading }: any = useGetPokemonByNameQuery('ditto')
  console.log(data, error, isLoading);

  return (
    <div className={`w-full h-screen flex justify-center items-center`}>
      <h1>RTK Query. {isLoading ? 'Loading...' : data.name}</h1>
      {/* <h1>RTK Query....</h1> */}
    </div>
  )
}