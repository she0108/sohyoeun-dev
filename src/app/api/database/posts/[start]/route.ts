import { MultiSelectPropResponse, PageObject } from "@/types/notion-api";
import { notion } from "../../../notionClient";

// export async function GET(request: Request) {}

// export async function HEAD(request: Request) {}

export async function POST(
  request: Request,
  { params }: { params: { start: string } }
) {
  try {
    const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
    if (!databaseId) {
      throw new Error("Database ID is not defined");
    }

    const startCursor = params.start;

    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 10,
      filter: {
        property: "분류",
        status: {
          equals: "post",
        },
      },
      start_cursor: startCursor === "0" ? undefined : startCursor,
    });

    const nextCursor = response.next_cursor;

    const pages = response.results as PageObject[];

    const posts = pages.map((post) => ({
      id: post.id,
      date: post.created_time,
      title: post.properties.제목.title[0].plain_text,
      description: post.properties.소개.rich_text[0].plain_text,
      tags: post.properties.태그.multi_select,
    }));

    return Response.json({ posts, nextCursor });
  } catch (error) {
    return Response.json(error);
  }
}

// export async function PUT(request: Request) {}

// export async function DELETE(request: Request) {}

// export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request: Request) {}
