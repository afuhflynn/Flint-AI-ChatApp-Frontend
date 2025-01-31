import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import { Copy } from "lucide-react";
import Twemoji from "react-twemoji";

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="prose max-w-none dark:prose-invert">
      <Twemoji options={{ className: "twemoji" }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeHighlight]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const code = String(children).trim();
              const language = match ? match[1] : "plaintext";

              return (
                <div className="relative group">
                  <pre className="overflow-x-auto p-3 rounded-lg bg-gray-900 text-gray-100">
                    <code className={`hljs language-${language}`} {...props}>
                      {code}
                    </code>
                  </pre>
                  <button
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white p-1 rounded"
                    onClick={() => navigator.clipboard.writeText(code)}
                  >
                    <Copy size={16} />
                  </button>
                </div>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </Twemoji>
    </div>
  );
};

export default MarkdownRenderer;
