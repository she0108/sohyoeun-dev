import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

interface HeadingBlockProps {
  children:
    | Heading1BlockObjectResponse
    | Heading2BlockObjectResponse
    | Heading3BlockObjectResponse;
}

export default function HeadingBlock({ children }: HeadingBlockProps) {
  let richText = [];
  let plainText = "";

  switch (children.type) {
    case "heading_1":
      richText = children[children.type].rich_text;
      for (let text of richText) {
        plainText += text.plain_text;
      }
      return <h1 className="text-4xl font-extrabold mt-10">{plainText}</h1>;
    case "heading_2":
      richText = children[children.type].rich_text;
      for (let text of richText) {
        plainText += text.plain_text;
      }
      return <h2 className="text-3xl font-bold mt-8">{plainText}</h2>;
    case "heading_3":
      richText = children[children.type].rich_text;
      for (let text of richText) {
        plainText += text.plain_text;
      }
      return <h3 className="text-2xl font-semibold mt-6">{plainText}</h3>;
  }
}
