import Container from "app/_components/LayoutsComp/Container";
import Nav from "app/_components/NavComp/ProjectNav";

export default async function Layout(): Promise<JSX.Element> {
  return (
    <Container style="pt-20">
      <Nav layout={{ name: `program`, slug: 'program' }} />
      <h1 className="w-full text-black py-10 dark:text-white text-center">Components Import Check</h1>
    </Container>
  )
}
