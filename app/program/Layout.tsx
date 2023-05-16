import Container from "app/_components/LayoutsComp/Container";
import Nav from "app/_components/NavComp/ProjectNav";

export default function MyApp({ children }: { children: React.ReactNode }) {

  return (
    <Container style="pt-20">
      <Nav layout={{ name: `program`, slug: 'program' }} />
      {children}
    </Container>
  )
}
