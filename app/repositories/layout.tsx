import Container from "app/_components/LayoutsComp/Container";
import Nav from "app/_components/NavComp/ProjectNav";

export default async function Layout({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
    return (
        <Container style="pt-20">
            <Nav layout={{ name: `repositories`, slug: 'repositories' }} />
            {children}
        </Container>
    )
}
