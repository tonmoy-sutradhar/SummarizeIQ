"use server";

import { getDbConnection } from "@/lib/Db";
import { generateSummaryFromGemini } from "@/lib/GeminiAi";
import { fetchAndExtractPdfText } from "@/lib/LangChain";
import { generateSummaryFromOpenAI } from "@/lib/OpenAi";
import { formatFileNameAsTitle } from "@/utils/FormatUtils";
import { auth } from "@clerk/nextjs/server";

interface pdfSummaryType {
  userId?: string;
  fileUrl: string;
  summary: string;
  title: string;
  fileName: string;
}

export async function generatedPdfSummary(
  uploadResponse: [
    {
      serverData: {
        userId: string;
        file: {
          url: string;
          name: string;
        };
      };
    }
  ]
) {
  // return
  if (!uploadResponse) {
    return {
      //invalid
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  const {
    serverData: {
      userId,
      file: { url: pdfUrl, name: fileName },
    },
  } = uploadResponse[0];

  if (!pdfUrl) {
    return {
      //invalid
      success: false,
      message: "No pdf url",
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);
    console.log(pdfText);

    let summary;

    try {
      summary = await generateSummaryFromGemini(pdfText);
      console.log({ summary });
    } catch (error) {
      console.log(error);

      // Call Gemini--------------------------------------->>
      if (error instanceof Error && error.message === "RATE_LIMIT_EXCEEDED") {
        try {
          summary = await generateSummaryFromGemini(pdfText);
        } catch (geminiError) {
          console.error("Gemini API failed after OpenAI quote exceeded");
          throw new Error(
            "Failed to generate summary with available AI providers"
          );
        }
      }
    }

    if (!summary) {
      return {
        success: false,
        message: "Failed to generate summary",
        data: null,
      };
    }

    const formattedFileName = formatFileNameAsTitle(fileName);

    return {
      success: true,
      message: "Summary generated successfully",
      data: {
        title: formattedFileName,
        summary,
      },
    };
  } catch (err) {
    return {
      //invalid
      success: false,
      message: "File upload failed try catch block",
      data: null,
    };
  }
}

// async function savePdfSummary({
//   userId,
//   fileUrl,
//   summary,
//   title,
//   fileName,
// }: pdfSummaryType) {
//   console.log("Saving PDF Summary for userId:", userId);

//   //sql inserting pdf summary
//   try {
//     const sql = await getDbConnection();
//     await sql`INSERT INTO pdf_summaries (
//     user_id,
//     original_file_url,
//     summary_text,
//     title,
//     file_name
// ) VALUES (
//     ${userId},
//     ${fileUrl},
//     ${summary},
//     ${title},
//     ${fileName},
// );`;
//   } catch (error) {
//     console.error("Error saving PDF summary", error);
//     throw error;
//   }
// }

async function savePdfSummary({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: pdfSummaryType) {
  console.log("Saving PDF Summary for userId:", userId);

  try {
    const sql = await getDbConnection();
    await sql`INSERT INTO pdf_summaries (
      user_id,
      original_file_url,
      summary_text,
      title,
      file_name
    ) VALUES (
      ${userId},
      ${fileUrl},
      ${summary},
      ${title},
      ${fileName}
    );`;
  } catch (error) {
    console.error("Error saving PDF summary", error);
    throw error;
  }
}

export async function storePdfSummaryAction({
  fileUrl,
  summary,
  title,
  fileName,
}: pdfSummaryType) {
  // User is logged in has a userId
  // SavePdfSummary
  // SavePdfSummary()

  let saveSummary: any;

  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "User not found.",
      };
    }

    saveSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    });

    if (!saveSummary) {
      return {
        success: false,
        message: "Do not save pdf. Please try again...",
      };
    }

    return {
      success: true,
      message: "PDF summary save successfully",
    };
  } catch (error) {
    return {
      //invalid
      success: false,
      message:
        error instanceof Error ? error.message : "Error saving PDF summary",
    };
  }
}
