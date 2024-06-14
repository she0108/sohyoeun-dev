import { BlockWithChildren } from "@/types/notion-api";
import ParagraphBlock from "./Notion/ParagraphBlock";
import HeadingBlock from "./Notion/HeadingBlock";

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
  }
  return <></>;
}

export default Renderer;
