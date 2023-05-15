import Markdown from "./codeblock"

export default function Home() {
  const markdownContent = `# Hello World\nThis is some **markdown** content.`

  return <Markdown content={markdownContent} />
}