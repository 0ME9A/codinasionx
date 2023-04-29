import Nav from "app/_components/NavComp/ProjectNav";

export default async function MyApp({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
  const fetchApi = await fetch('https://api.codinasion.org/program')
  const data = await fetchApi.json()

  return (
    <>
      <Nav api={{ data, status: fetchApi.status }} layout={{ name: `program`, slug: 'program', aside: true }} />
      {children}
    </>
  )
}
