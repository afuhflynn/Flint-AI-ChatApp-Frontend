import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownRenderer = ({ text }: { text: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-semibold">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold">{children}</h3>
        ),
        strong: ({ children }) => (
          <strong className="font-bold">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-gray-500 pl-4 italic opacity-80">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
        li: ({ children }) => <li className="mb-1">{children}</li>,
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter style={atomDark} language={match[1]}>
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className="bg-gray-200 dark:bg-gray-800 p-1 rounded">
              {children}
            </code>
          );
        },
      }}
    >
      {text}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
