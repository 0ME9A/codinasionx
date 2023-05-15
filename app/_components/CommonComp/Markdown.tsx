import ReactMarkdown from 'react-markdown'

export default function Markdown({ content }: { content: string }) {
    return <ReactMarkdown>{content}</ReactMarkdown>
}


