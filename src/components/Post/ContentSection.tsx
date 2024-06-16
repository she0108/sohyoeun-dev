"use client";

import { BlockWithChildren } from "@/types/notion-api";
import { ReactElement, useEffect, useState } from "react";
import ParagraphBlock from "./Notion/ParagraphBlock";
import Renderer from "./Renderer";

interface ContentSectionProps {
  pageId: string;
}

function ContentSection({ pageId }: ContentSectionProps) {
  const [notionBlocks, setNotionBlocks] = useState<ReactElement[]>([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      const response = await fetch(`/api/block/${pageId}`, { method: "GET" });
      const blockData = await response.json();
      const blocks: ReactElement[] = await blockData.map(
        (block: BlockWithChildren, index: number) => (
          <Renderer key={index} block={block} />
        )
      );
      setNotionBlocks(blocks);
    };
    fetchBlocks();
  }, [pageId]);
  return <div className="flex flex-col gap-2">{notionBlocks}</div>;
}

export default ContentSection;
