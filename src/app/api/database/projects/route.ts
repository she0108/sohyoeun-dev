import { ProjectPageObject } from "@/types/notion-api";
import { notion } from "../../notionClient";
import { NextRequest } from "next/server";

// export async function GET(request: Request) {}

// export async function HEAD(request: Request) {}

export async function POST(request: NextRequest) {
  try {
    const databaseId = process.env.NEXT_PUBLIC_PROJECT_DATABASE_ID;
    if (!databaseId) {
      throw new Error("Database ID is not defined");
    }

    const searchParams = request.nextUrl.searchParams;
    const size = searchParams.get("size");

    const filter = {
      property: "상태",
      status: {
        equals: "공개",
      },
    };

    const start = searchParams.get("start");
    const startCursor = !start || start == "null" ? undefined : start;
    const { results, next_cursor: nextCursor } = await notion.databases.query({
      database_id: databaseId,
      page_size: size ? parseInt(size) : 5,
      filter: filter,
      start_cursor: startCursor,
    });

    const pages = results as ProjectPageObject[];

    const projects = pages.map((project) => ({
      id: project.id,
      start: project.properties.기간.date.start,
      end: project.properties.기간.date.end,
      name: project.properties.이름.title[0].plain_text,
      description1: project.properties.소개1.rich_text[0].plain_text,
      description2: project.properties.소개2.rich_text[0].plain_text,
      tags: project.properties.태그.multi_select,
      skills: project.properties.기술.multi_select,
      thumbnail: project.properties.썸네일.files[0].file.url,
    }));

    return Response.json({ projects, nextCursor });
  } catch (error) {
    return Response.json(error);
  }
}

// export async function PUT(request: Request) {}

// export async function DELETE(request: Request) {}

// export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request: Request) {}
