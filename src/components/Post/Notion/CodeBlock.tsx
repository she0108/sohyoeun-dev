import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface CodeBlockProps {
  children: CodeBlockObjectResponse;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const blockType = children.type;
  if (blockType !== "code") {
    console.log(`${children} is not a code block`);
    return <></>;
  }
  const richText = children[blockType].rich_text;
  let plainText = "";
  for (let text of richText) {
    plainText += text.plain_text;
  }
  return (
    <code className="text-base bg-neutral-800 text-white rounded-xl px-6 py-5 mt-3 whitespace-pre-wrap">
      {plainText}
    </code>
  );
}
