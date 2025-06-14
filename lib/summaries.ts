import { getDbConnection } from "./Db";

export async function GetSummaries(userId: string) {
  const sql = await getDbConnection();
  const summaries =
    await sql`SELECT * from pdf_summaries where user_id= ${userId} ORDER BY created_at DESC`;
  return summaries;
}
