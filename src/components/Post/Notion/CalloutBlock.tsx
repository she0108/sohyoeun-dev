import { Color } from "@/types/notion-color";
import { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface CalloutBlockProps {
  children: CalloutBlockObjectResponse;
}

export default function CalloutBlock({ children }: CalloutBlockProps) {
  const callout = children.callout;
  let icon;
  if (!callout.icon || callout.icon.type !== "emoji") icon = null;
  else icon = callout.icon.emoji;
  const blockClassName = `text-lg p-4 my-2 rounded-lg bg-neutral-100 flex gap-2`;
  const richText = callout.rich_text;
  const block = [];
  for (let text of richText) {
    const annotations = text.annotations;
    const bold = annotations.bold ? "font-bold" : "font-normal";
    const italic = annotations.italic ? "italic" : null;
    const strikethrough = annotations.strikethrough ? "line-through" : null;
    const underline = annotations.underline ? "underline" : null;
    const color = colorToClassName(annotations.color);
    const className = `${bold} ${italic} ${strikethrough} ${underline} ${color} whitespace-pre-wrap rounded`;
    if (annotations.code) {
      block.push(<code className={className}>{text.plain_text}</code>);
    } else {
      block.push(<span className={className}>{text.plain_text}</span>);
    }
  }

  return (
    <p className={blockClassName}>
      {icon}
      {block}
    </p>
  );
}

function colorToClassName(color: Color) {
  switch (color) {
    case "blue":
      return "text-blue-500";
    case "blue_background":
      return "bg-blue-200";
    case "brown":
      return "text-brown-500";
    case "brown_background":
      return "bg-brown-200";
    case "gray":
      return "text-neutral-500";
    case "gray_background":
      return "bg-neutral-200";
    case "green":
      return "text-green-500";
    case "green_background":
      return "bg-green-200";
    case "orange":
      return "text-orange-500";
    case "orange_background":
      return "bg-orange-200";
    case "yellow":
      return "text-yellow-500";
    case "yellow_background":
      return "bg-yellow-200";
    case "pink":
      return "text-pink-500";
    case "pink_background":
      return "bg-pink-200";
    case "purple":
      return "text-purple-500";
    case "purple_background":
      return "bg-purple-200";
    case "red":
      return "text-red-500";
    case "red_background":
      return "bg-red-200";
    default:
      return "";
  }
}
