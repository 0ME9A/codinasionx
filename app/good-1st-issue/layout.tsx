import Nav from "app/_components/NavComp/ProjectNav";

export default async function MyApp({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
  return (
    <>
      <Nav
        layout={{ name: `good1stissue`, slug: `good-1st-issue`, aside: true }} 
        api={{
          data: undefined,
          status: 0
        }} />
      {children}
    </>
  )
}
