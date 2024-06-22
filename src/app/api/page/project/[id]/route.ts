import { PageObject, ProjectPageObject } from "@/types/notion-api";
import { notion } from "../../../notionClient";
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
    })) as ProjectPageObject;

    const props = response.properties;

    const name = props["이름"].title[0].plain_text;
    const tags = props["태그"].multi_select.map((tag) => ({
      name: tag.name,
      color: tag.color,
    }));
    const skills = props["기술"].multi_select.map((tag) => ({
      name: tag.name,
      color: tag.color,
    }));
    const description1 = props["소개1"].rich_text[0].plain_text;
    const description2 = props["소개2"].rich_text[0].plain_text;
    const start = props["기간"].date.start;
    const end = props["기간"].date.end;
    const thumbnail = props["썸네일"].files[0].file.url;

    return Response.json({
      name,
      tags,
      skills,
      description1,
      description2,
      start,
      end,
      thumbnail,
    });
  } catch (error) {
    return Response.json(error);
  }
}
