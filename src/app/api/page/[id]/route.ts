import { PageObject } from "@/types/notion-api";
import { notion } from "../../notionClient";
import { TagColor } from "@/types/notion-color";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const pageId = params.id;
    if (!pageId) {
      throw new Error("Page ID is not defined");
    }

    const response = (await notion.pages.retrieve({
      page_id: pageId,
    })) as PageObject;

    const props = response.properties;

    const title = props["제목"].title[0].plain_text;
    const category = props["분류"].status.name;
    const tags = props["태그"].multi_select.map((tag) => ({
      name: tag.name,
      color: tag.color,
    }));
    const description = props["소개"].rich_text[0].plain_text;
    const date = response.created_time;

    return Response.json({ title, category, tags, description, date });
  } catch (error) {
    return Response.json(error);
  }
}
