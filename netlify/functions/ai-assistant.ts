// netlify/functions/ai-assistant.ts
import type { Handler, HandlerEvent } from "@netlify/functions";

// This is the initial "system prompt" or instruction for your AI sales assistant.
// It sets the persona and goal for the conversation.
const SYSTEM_PROMPT = `You are InnovateAI's helpful and friendly sales assistant.
Your goal is to answer user questions about our services and gently convince them that signing up for a trial is the best next step.
Our services include: AI-Powered Workflows using models like Gemini and GPT-4o, n8n integration, custom websites, and intelligent chatbots.
Our value proposition is "We Build, You Earn."
Be concise, friendly, and always aim to guide the conversation towards the benefits of trying our platform.
If asked about pricing, mention we have flexible plans starting from $29/mo and the best way to see the value is to try it.
If you don't know an answer, say you will connect them with a human specialist.
End your responses by encouraging them to sign up or ask another question.`;


const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { messages } = JSON.parse(event.body || "{}");

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return { statusCode: 400, body: "Bad Request: Missing or invalid messages payload." };
    }

    // --- Read variables from the environment ---
    const apiKey = process.env.LLM_API_KEY;
    const baseUrl = process.env.LLM_BASE_URL;

    if (!apiKey || !baseUrl) {
      console.error("Missing environment variables: LLM_API_KEY or LLM_BASE_URL");
      return { statusCode: 500, body: "Server configuration error." };
    }
    
    // Construct the full payload with the system prompt and user messages
    const apiPayload = {
      model: "gemini-2.5-pro", // Or your preferred model
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages // Append the user's conversation history
      ],
      // You can add tools here if your provider supports it for this endpoint
      tools: [ { type: "function", function: { name: "googleSearch" } } ],
      tool_choice: "auto"
    };

    // Make the API call to your LLM provider
    const response = await fetch(`${process.env.LLM_BASE_URL}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify(apiPayload),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error("LLM API Error:", errorBody);
        throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    // Send only the assistant's response back to the client
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error("Error in ai-assistant function:", error);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};

export { handler };