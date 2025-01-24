import { AILogoPrompt } from "@/config/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();

  try {
    const AiPromptResult = await AILogoPrompt.sendMessage(prompt);
    console.log(JSON.parse(AiPromptResult.response.text()));

    const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt;

    return NextResponse.json(AIPrompt);
  } catch (error) {
    console.log(error);
  }
}
