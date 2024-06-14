import { isFullBlock } from "@notionhq/client";
import { notion } from "../../notionClient";
import { generateUniqueId } from "@/lib/utils";
import {
  BlockWithChildren,
  BulletedListBlockObjectResponse,
  NumberedListBlockObjectResponse,
} from "@/types/notion-api";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const pageId = params.id;
    if (!pageId) {
      throw new Error("Page ID is not defined");
    }

    // recursive
    const getBlocks = async (blockId: string): Promise<BlockWithChildren[]> => {
      const { results } = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 100,
      });

      const childBlocks = await Promise.all(
        results.map(async (block) => {
          if (!isFullBlock(block)) return block as BlockWithChildren;
          if (block.has_children) {
            const children = await getBlocks(block.id);
            return { ...block, children } as BlockWithChildren;
          }
          return block as BlockWithChildren;
        })
      );

      const structuredBlocks = childBlocks.reduce<BlockWithChildren[]>(
        (acc, curr) => {
          if (curr.type === "bulleted_list_item") {
            if (acc[acc.length - 1]?.type === "bulleted_list") {
              const bulletedList = acc[
                acc.length - 1
              ] as BulletedListBlockObjectResponse;
              bulletedList.bulleted_list.children?.push(curr);
            } else {
              acc.push({
                id: generateUniqueId(),
                type: "bulleted_list",
                bulleted_list: { children: [curr] },
              });
            }
          } else if (curr.type === "numbered_list_item") {
            if (acc[acc.length - 1]?.type === "numbered_list") {
              const numberedList = acc[
                acc.length - 1
              ] as NumberedListBlockObjectResponse;
              numberedList.numbered_list.children?.push(curr);
            } else {
              acc.push({
                id: generateUniqueId(),
                type: "numbered_list",
                numbered_list: { children: [curr] },
              });
            }
          } else {
            acc.push(curr);
          }
          return acc;
        },
        []
      );

      return structuredBlocks;
    };

    const blocks = await getBlocks(pageId);

    return new Response(JSON.stringify(blocks));
  } catch (error) {
    return Response.json(error);
  }
}
