import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface ParagraphBlockProps {
  children: ParagraphBlockObjectResponse;
}

export default function ParagraphBlock({ children }: ParagraphBlockProps) {
  const blockType = children.type;
  if (blockType !== "paragraph") {
    console.log(`${children} is not a paragraph block`);
    return <></>;
  }
  const richText = children[blockType].rich_text;
  const block = [];
  for (let text of richText) {
    const annotations = text.annotations;
    const bold = annotations.bold ? "font-bold" : "font-normal";
    const italic = annotations.italic ? "italic" : null;
    const strikethrough = annotations.strikethrough ? "line-through" : null;
    const underline = annotations.underline ? "underline" : null;
    let color = "";
    switch (annotations.color) {
      case "blue":
        color = "text-blue-500";
        break;
      case "blue_background":
        color = "bg-blue-100";
        break;
      case "brown":
        color = "text-brown-500";
        break;
      case "brown_background":
        color = "bg-brown-100";
        break;
      case "gray":
        color = "text-gray-500";
        break;
      case "gray_background":
        color = "bg-gray-100";
        break;
      case "green":
        color = "text-green-500";
        break;
      case "green_background":
        color = "bg-green-100";
        break;
      case "orange":
        color = "text-orange-500";
        break;
      case "orange_background":
        color = "bg-orange-100";
        break;
      case "yellow":
        color = "text-yellow-500";
        break;
      case "yellow_background":
        color = "bg-yellow-100";
        break;
      case "pink":
        color = "text-pink-500";
        break;
      case "pink_background":
        color = "bg-pink-100";
        break;
      case "purple":
        color = "text-purple-500";
        break;
      case "purple_background":
        color = "bg-purple-100";
        break;
      case "red":
        color = "text-red-500";
        break;
      case "red_background":
        color = "bg-red-100";
    }
    let className = `${bold} ${italic} ${strikethrough} ${underline} ${color} whitespace-pre-wrap rounded-sm`;
    if (annotations.code) {
      className +=
        " bg-neutral-200 text-neutral-700 text-base rounded-[5px] px-1 mx-0.5";
      block.push(
        <code key={text.plain_text} className={className}>
          {text.plain_text}
        </code>
      );
    } else if (text.href) {
      let className = "text-neutral-400 underline whitespace-pre-wrap";
      block.push(
        <a key={text.plain_text} href={text.href} className={className}>
          {text.plain_text}
        </a>
      );
    } else {
      block.push(
        <span key={text.plain_text} className={className}>
          {text.plain_text}
        </span>
      );
    }
  }

  return <p className="text-lg mt-3">{block}</p>;
}
