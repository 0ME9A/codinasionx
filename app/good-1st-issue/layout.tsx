import Nav from "app/_components/NavComp/ProjectNav";

export default async function MyApp({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
  return (
    <>
      <Nav layout={{ name: `goodFirstIssue`, slug: `good-1st-issue` }} />
      {children}
    </>
  )
}
