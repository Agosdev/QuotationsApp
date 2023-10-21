import { createLLMService } from "usellm";

const llmService = createLLMService({
  openaiApiKey: process.env.OPENAI_API_KEY,
  actions: ["speak"],
});

export const runtime = "edge";

export default async function POST(request) {
  const body = await request.json();

  try {
    const { result } = await llmService.handle({ body, request });
    return new Response(result, { status: 200 });
  } catch (error) {
    console.error("[LLM Service]", error);
    return new Response(error.message, {
      status: error?.status || 400,
    });
  }
}
