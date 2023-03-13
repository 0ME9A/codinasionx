import Nav from "app/_components/ProgramComp/Nav";

export default async function MyApp({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
  try {
    const fetchApi = await fetch('https://api.codinasion.org/program')
    const data = fetchApi.status === 200 ? await fetchApi.json() : []
    return (
      <>
        <Nav api={data} status={fetchApi.status || 404} />
        {children}
      </>
    )
  } catch (error) {
    return (
      <>
        <Nav api={[]} status={404} />
        {children}
      </>
    )
  }
}
