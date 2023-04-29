import Nav from "app/_components/NavComp/ProjectNav";

export default async function MyApp({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
  // const fetchApi = await fetch('https://api.github.com/users/0me9a')
  // const fetchApi = await fetch('https://api.codinasion.org/program')
  // const data = await fetchApi.json()
  // console.log(data);

  return (
    <>
      <Nav
        api={{ data: [], status: 404 }}
        layout={{ name: `linkfree-og`, slug: `linkfree-og` }} 
      />
      {children}
    </>
  )
}
