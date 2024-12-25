"use client";

import { Message } from "@/types/chat";
import { parseResponse, validateResponse } from "./response-parser";
import { createErrorMessage, handleNetworkError } from "./error-handler";

export async function handleChatResponse(response: Response): Promise<Message> {
  try {
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data) {
      throw new Error('No response received');
    }

    const parsed = parseResponse(data);
    
    if (!validateResponse(parsed)) {
      throw new Error('Empty response content');
    }

    return {
      role: "assistant",
      content: parsed.content,
      options: parsed.options
    };
  } catch (error) {
    console.error('Error handling chat response:', error);
    return error instanceof Error ? createErrorMessage(error) : handleNetworkError(error);
  }
}

export function validateMessage(message: string): boolean {
  return message.trim().length > 0;
}

export function formatMessage(message: string): string {
  return message.trim();
}