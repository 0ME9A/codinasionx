import Container from "app/_components/LayoutsComp/Container"
import BtnLink from "app/_components/Links&BtnsComp/BtnLink"
import Markdown from "./codeblock"

export default function Home() {
  const markdownContent = `# Hello World\nThis is some **markdown** content.`

  return <Container style="h-screen w-full dark:text-white text-black flex justify-center">
    <h1>Playground is under maintenance. ⏳</h1>
  </Container>

  // return <Markdown content={markdownContent} />
}