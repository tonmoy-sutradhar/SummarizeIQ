"use server";

import { getDbConnection } from "@/lib/Db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function deleteSummaryAction({
  summaryId,
}: {
  summaryId: string;
}) {
  try {
    const user = await currentUser();
    const userId = user?.id;

    if (!userId) {
      throw new Error("user not found in summaryAction");
    }

    const sql = await getDbConnection();

    // delete from db
    const result = await sql`DELETE FROM pdf_summaries
    WHERE id = ${summaryId} AND user_id = ${userId}
    RETURNING id;`;

    if (result.length) {
      revalidatePath("/dashboard");
      return { success: true };
    }
    return { success: false };
  } catch (error) {
    console.error("Error deleting summary", error);
    return { success: false };
  }
}
