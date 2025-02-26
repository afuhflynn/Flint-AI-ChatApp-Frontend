import React, { ComponentPropsWithoutRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import Twemoji from "react-twemoji";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
              const code = Array.isArray(children)
                ? children.map(String).join("")
                : String(children);

              console.log(children);

              return !inline && match ? (
                <SyntaxHighlighter style={docco} language={language}>
                  {`${String(children).replace("/\n/", "")}
                  console.log("Hello, world");
                  print("good morning")

                  #include <iostream>
                  #include <stdbool.h>

                  int main(int argc, char * argv[]){
                    std::cout<<"Hello, world";
                    return 0;
                  }
                  `}
                </SyntaxHighlighter>
              ) : (
                <code
                  className={
                    "h-auto w-[90%] overflow-x-scroll overflow-y-hidden"
                  }
                  {...props}
                >
                  {code}
                </code>
              );
            },
            // Headings styling
            h1: ({ children }) => (
              <h1 className="mt-4 mb-2 text-3xl font-bold">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="mt-3 mb-2 text-2xl font-semibold">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-3 mb-2 text-xl font-medium">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="mt-2 mb-1 text-lg font-medium">{children}</h4>
            ),
            h5: ({ children }) => (
              <h5 className="mt-2 text-base font-semibold">{children}</h5>
            ),
            h6: ({ children }) => (
              <h6 className="mt-2 text-sm font-semibold">{children}</h6>
            ),
            // Blockquote styling
            blockquote: ({ children }) => (
              <blockquote className="pl-4 italic text-gray-600 border-l-4 border-blue-500 dark:text-gray-400">
                {children}
              </blockquote>
            ),
            // List styling
            ul: ({ children }) => (
              <ul className="my-1 space-y-1 list-disc list-inside">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="my-1 space-y-1 list-decimal list-inside">
                {children}
              </ol>
            ),
            li: ({ children }) => <li className="ml-4">{children}</li>,
            // Table styling
            table: ({ children }) => (
              <table className="my-2 overflow-x-scroll overflow-y-hidden border border-collapse border-gray-400 table-auto dark:border-gray-600">
                {children}
              </table>
            ),
            th: ({ children }) => (
              <th className="px-4 py-2 bg-gray-200 border border-gray-400 dark:border-gray-600 dark:bg-gray-700">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-2 border border-gray-400 dark:border-gray-600">
                {children}
              </td>
            ),
            p: ({ children }) => <p className="text-body-text">{children}</p>,
            span: ({ children }) => (
              <span className="text-muted-text">{children}</span>
            ),
          }}
          className={"code-font"}
        >
          {content}
        </ReactMarkdown>
      </Twemoji>
    </div>
  );
};

export default MarkdownRenderer;
