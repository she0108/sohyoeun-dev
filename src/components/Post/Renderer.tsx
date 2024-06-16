import { BlockWithChildren } from "@/types/notion-api";
import ParagraphBlock from "./Notion/ParagraphBlock";
import HeadingBlock from "./Notion/HeadingBlock";
import ImageBlock from "./Notion/ImageBlock";
import CodeBlock from "./Notion/CodeBlock";
import BulletedListBlock from "./Notion/BulletedListBlock";
import NumberedListBlock from "./Notion/NumberedListBlock";
import ListItemBlock from "./Notion/ListItemBlock";
import CalloutBlock from "./Notion/CalloutBlock";

interface RendererProps {
  block: BlockWithChildren;
}

function Renderer({ block }: RendererProps) {
  switch (block.type) {
    case "paragraph":
      return <ParagraphBlock>{block}</ParagraphBlock>;
    case "heading_1":
    case "heading_2":
    case "heading_3":
      return <HeadingBlock>{block}</HeadingBlock>;
    case "image":
      return <ImageBlock>{block}</ImageBlock>;
    case "code":
      return <CodeBlock>{block}</CodeBlock>;
    case "bulleted_list":
      return <BulletedListBlock>{block}</BulletedListBlock>;
    case "numbered_list":
      return <NumberedListBlock>{block}</NumberedListBlock>;
    case "bulleted_list_item":
    case "numbered_list_item":
      return <ListItemBlock>{block}</ListItemBlock>;
    case "callout":
      return <CalloutBlock>{block}</CalloutBlock>;
  }
  return <></>;
}

export default Renderer;
