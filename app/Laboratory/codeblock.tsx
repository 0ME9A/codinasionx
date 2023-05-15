import ReactMarkdown from 'react-markdown'

export default function Markdown({ content }: { content: string }) {
  return <ReactMarkdown>{content}</ReactMarkdown>
}








// import React from "react";
// import PropTypes from "prop-types";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

// export default function CodeBlock({ language, value }) {
//   return (
//     <SyntaxHighlighter language={language} style={xonokai}>
//       {value}
//     </SyntaxHighlighter>
//   );
// }

// CodeBlock.propTypes = {
//   language: PropTypes.string,
//   value: PropTypes.string.isRequired,
// };

// CodeBlock.defaultProps = {
//   language: "javascript",
// };