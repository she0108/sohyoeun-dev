import React, { useRef, useEffect } from "react";
import "highlight.js/styles/github-dark-dimmed.css"; // Replace with your preferred style
import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import hljs from "highlight.js";

interface CodeBlockProps {
  children: CodeBlockObjectResponse;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const codeRef = useRef<HTMLElement>(null);

  const richText = children.code.rich_text;
  let plainText = "";
  for (let text of richText) {
    plainText += text.plain_text;
  }

  const language = children.code.language;

  const className = `language-${language} rounded-xl`;

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, []);

  return (
    <pre>
      <code ref={codeRef} className={className}>
        {plainText}
      </code>
    </pre>
  );
};

export default CodeBlock;
