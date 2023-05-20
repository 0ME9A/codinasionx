import Nav from "app/_components/NavComp/ProjectNav";

export default async function Layout({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
  return (
    <>
      <Nav layout={{ name: `program`, slug: 'program' }} />
      {children}
    </>
  )
}
