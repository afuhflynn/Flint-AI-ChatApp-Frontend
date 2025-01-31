import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import Twemoji from "react-twemoji";
import SyntaxHighlighter from "react-syntax-highlighter";

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="prose max-w-none dark:prose-invert">
      <Twemoji options={{ className: "twemoji" }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeHighlight]}
          components={{
            code({
              inline = false,
              className,
              children,
              ...props
            }: ComponentPropsWithoutRef<"code"> & { inline?: boolean }) {
              const match = /language-(\w+)/.exec(className || "");
              const language = className?.replace(/language-/, "");
              const style: CSSProperties = {
                backgroundColor: "#f5f5f5",
                borderRadius: "5px",
                padding: "10px",
                fontSize: "14px",
              };
              const code = Array.isArray(children)
                ? children.map(String).join("")
                : String(children);

              return !inline && match ? (
                <SyntaxHighlighter style={style} language={language} {...props}>
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {code}
                </code>
              );
            },
            // Headings styling
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mt-4 mb-2">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mt-3 mb-2">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-medium mt-3 mb-2">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-lg font-medium mt-2 mb-1">{children}</h4>
            ),
            h5: ({ children }) => (
              <h5 className="text-base font-semibold mt-2">{children}</h5>
            ),
            h6: ({ children }) => (
              <h6 className="text-sm font-semibold mt-2">{children}</h6>
            ),
            // Blockquote styling
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400">
                {children}
              </blockquote>
            ),
            // List styling
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-1">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside space-y-1">{children}</ol>
            ),
            li: ({ children }) => <li className="ml-4">{children}</li>,
            // Table styling
            table: ({ children }) => (
              <table className="table-auto border-collapse border border-gray-400 dark:border-gray-600">
                {children}
              </table>
            ),
            th: ({ children }) => (
              <th className="border border-gray-400 dark:border-gray-600 px-4 py-2 bg-gray-200 dark:bg-gray-700">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                {children}
              </td>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </Twemoji>
    </div>
  );
};

export default MarkdownRenderer;
