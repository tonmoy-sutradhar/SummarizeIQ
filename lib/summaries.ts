import { getDbConnection } from "./Db";

export async function GetSummaries(userId: string) {
  const sql = await getDbConnection();
  const summaries =
    await sql`SELECT * from pdf_summaries where user_id= ${userId} ORDER BY created_at DESC`;
  return summaries;
}

export async function getSummaryById(id: string) {
  try {
    const sql = await getDbConnection();

    const [summary] = await sql`SELECT * FROM pdf_summaries where id = ${id}`;
    return summary;
  } catch (err) {
    console.error("Error fetching summary by id", err);
    return null;
  }
}
