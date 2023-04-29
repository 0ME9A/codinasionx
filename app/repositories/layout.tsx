import Nav from "app/_components/NavComp/ProjectNav";

export default async function MyApp({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
    const url = "https://api.github.com";
    const fetchApi = await fetch(url + '/orgs/codinasion/repos?per_page=100')
    const data = await fetchApi.json()
    return (
        <>
            <Nav api={{ data, status: fetchApi.status }} layout={{ name: `repositories`, slug: 'repositories', aside: true }} />
            {children}
        </>
    )
}
