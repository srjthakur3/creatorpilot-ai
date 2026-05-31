import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";

const genAI = new GoogleGenerativeAI(apiKey);

export async function generateContent(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error: any) {
    console.error("GEMINI ERROR:", error);

    return `ERROR: ${error?.message || JSON.stringify(error)}`;
  }
}
