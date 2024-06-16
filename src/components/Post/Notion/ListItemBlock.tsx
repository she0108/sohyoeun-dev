import { BlockWithChildren } from "@/types/notion-api";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import Renderer from "../Renderer";

interface ListItemBlockProps {
  children: BlockWithChildren;
}

export default function ListItemBlock({ children }: ListItemBlockProps) {
  let richText: RichTextItemResponse[] = [];
  switch (children.type) {
    case "bulleted_list_item":
      richText = children.bulleted_list_item.rich_text;
      break;
    case "numbered_list_item":
      richText = children.numbered_list_item.rich_text;
  }
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
        color = "bg-blue-200";
        break;
      case "brown":
        color = "text-brown-500";
        break;
      case "brown_background":
        color = "bg-brown-200";
        break;
      case "gray":
        color = "text-gray-500";
        break;
      case "gray_background":
        color = "bg-gray-200";
        break;
      case "green":
        color = "text-green-500";
        break;
      case "green_background":
        color = "bg-green-200";
        break;
      case "orange":
        color = "text-orange-500";
        break;
      case "orange_background":
        color = "bg-orange-200";
        break;
      case "yellow":
        color = "text-yellow-500";
        break;
      case "yellow_background":
        color = "bg-yellow-200";
        break;
      case "pink":
        color = "text-pink-500";
        break;
      case "pink_background":
        color = "bg-pink-200";
        break;
      case "purple":
        color = "text-purple-500";
        break;
      case "purple_background":
        color = "bg-purple-200";
        break;
      case "red":
        color = "text-red-500";
        break;
      case "red_background":
        color = "bg-red-200";
    }
    let className = `${bold} ${italic} ${strikethrough} ${underline} ${color} whitespace-pre-wrap rounded`;
    if (annotations.code) {
      className += " bg-neutral-100 text-neutral-700 rounded-lg px-1 -mx-1";
      block.push(
        <code key={text.plain_text} className={className}>
          {text.plain_text}
        </code>
      );
    } else {
      block.push(
        <span key={text.plain_text} className={className}>
          {text.plain_text}
        </span>
      );
    }
  }

  return (
    <li className="text-lg mt-3">
      {block}
      {children.children && renderNestedList(children)}
    </li>
  );
}

function renderNestedList(parent: BlockWithChildren) {
  const children = parent.children;
  if (!children) return null;

  if (children[0].type === "bulleted_list_item") {
    return (
      <ul>
        {children.map((block, index) => (
          <Renderer key={index} block={block} />
        ))}
      </ul>
    );
  }
  return (
    <ol>
      {children.map((block, index) => (
        <Renderer key={index} block={block} />
      ))}
    </ol>
  );
}
