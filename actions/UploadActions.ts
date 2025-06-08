"use server";

import { generateSummaryFromGemini } from "@/lib/GeminiAi";
import { fetchAndExtractPdfText } from "@/lib/LangChain";
import { generateSummaryFromOpenAI } from "@/lib/OpenAi";

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

    return {
      success: true,
      message: "Summary generated successfully",
      data: {
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
