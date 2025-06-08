"use server";

import { fetchAndExtractPdfText } from "@/lib/LangChain";

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
  } catch (err) {
    return {
      //invalid
      success: false,
      message: "File upload failed try catch block",
      data: null,
    };
  }
}
