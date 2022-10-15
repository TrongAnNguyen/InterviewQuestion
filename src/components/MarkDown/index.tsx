import ReactMarkdown from "react-markdown";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light";
import { MarkDownContainer } from "./styled.component";
interface MarkDownProps {
  children: string;
}

const MarkDown = ({ children }: MarkDownProps): JSX.Element => {
  return (
    <MarkDownContainer>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                style={oneLight}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </MarkDownContainer>
  );
};

export default MarkDown;
