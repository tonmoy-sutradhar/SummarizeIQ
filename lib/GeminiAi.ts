import { SUMMARY_SYSTEM_PROMPT } from "@/utils/Prompts";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!!);

export const generateSummaryFromGemini = async (pdfText: string) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1500,
      },
    });

    const prompt = {
      contents: [
        {
          role: "user",
          parts: [
            { text: SUMMARY_SYSTEM_PROMPT },
            {
              text: `${SUMMARY_SYSTEM_PROMPT}\n\nTransform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
            },
          ],
        },
      ],
    };

    const result = await model.generateContent(prompt);
    const response = await result.response;

    if (!response.text()) {
      throw new Error("Empty response form GEMINI API");
    }

    return response.text();
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

//====================================================
// role e pblm
// import { GoogleGenAI } from "@google/genai";
// import { SUMMARY_SYSTEM_PROMPT } from "@/utils/Prompts";

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// export async function generateSummaryFromGemini(pdfText: string) {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-1", // Replace with the actual model name for Gemini
//       contents: [
//         { role: "system", content: SUMMARY_SYSTEM_PROMPT },
//         {
//           role: "user",
//           content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
//         },
//       ],
//       temperature: 0.7,
//       maxTokens: 1500, // Adjusted to match the expected parameter name
//     });

//     return response.text; // Assuming response.text contains the generated summary
//   } catch (error: any) {
//     if (error?.status === 429) {
//       throw new Error("RATE_LIMIT_EXCEEDED");
//     }
//     throw error;
//   }
// }

//=========================================================================================================
// import { SUMMARY_SYSTEM_PROMPT } from "@/utils/Prompts";
// // import { Gemini } from "gemini-api"; // Adjust the import based on the actual package

// const gemini = new Gemin({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// export async function generateSummaryFromGemini(pdfText: string) {
//   try {
//     const response = await gemini.chat.completions.create({
//       model: "gemini-1", // Replace with the actual model name for Gemini
//       messages: [
//         { role: "system", content: SUMMARY_SYSTEM_PROMPT },
//         {
//           role: "user",
//           content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
//         },
//       ],
//       temperature: 0.7,
//       maxTokens: 1500, // Adjusted to match the expected parameter name
//     });

//     return response.choices[0].message.content;
//   } catch (error: any) {
//     if (error?.status === 429) {
//       throw new Error("RATE_LIMIT_EXCEEDED");
//     }
//     throw error;
//   }
// }
//-----------------------------------------------------------------------------------------------------------

// import { SUMMARY_SYSTEM_PROMPT } from "@/utils/Prompts";

// // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
// import { GoogleGenAI } from "@google/genai";

// const genAI = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });

// export const generateSummaryFromGemini = (pdfText: string) => {
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const prompt = `${SUMMARY_SYSTEM_PROMPT}\n\nTransform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`;

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     return response.text();
//   } catch (error: any) {
//     if (error?.status === 429) {
//       throw new Error("RATE_LIMIT_EXCEEDED");
//     }
//     console.error("Gemini API Error:", error);
//     throw error;
//   }
// };
