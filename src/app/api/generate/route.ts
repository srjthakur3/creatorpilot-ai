import { NextResponse } from "next/server";
import { generateContent } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const result = await generateContent(prompt);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate content",
      },
      { status: 500 }
    );
  }
}