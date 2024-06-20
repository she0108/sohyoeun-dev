import { MultiSelectPropResponse } from "@/types/notion-api";
import { notion } from "../../notionClient";

export async function GET(request: Request) {
  try {
    const databaseId = process.env.NEXT_PUBLIC_POST_DATABASE_ID;
    if (!databaseId) {
      throw new Error("Database ID is not defined");
    }

    const response = await notion.databases.retrieve({
      database_id: databaseId,
    });

    const tagProp = response.properties["태그"] as MultiSelectPropResponse;

    const tags = tagProp.multi_select.options.map((tag) => ({
      name: tag.name,
      color: tag.color,
    }));

    return Response.json(tags);
  } catch (error) {}
}

// export async function HEAD(request: Request) {}

// export async function POST(request: Request) {}

// export async function PUT(request: Request) {}

// export async function DELETE(request: Request) {}

// export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request: Request) {}
