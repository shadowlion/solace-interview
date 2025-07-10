import { advocateData } from "@/db/seed/advocates";

const DEFAULT_QUERY_LIMIT = 10;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const index = parseInt(searchParams.get("index") || "0", 10);
  const limit = parseInt(searchParams.get("limit") || `${DEFAULT_QUERY_LIMIT}`, 10);

  // Uncomment this line to use a database
  // const data = await db.select().from(advocates);
  const data = advocateData;

  const paginated = data.slice(index, index + limit);

  return Response.json({ data: paginated, count: data.length });
}
