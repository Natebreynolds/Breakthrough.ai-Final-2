"use client";

import { Message } from "@/types/chat";
import { ChatContext } from "./types";
import { WEBHOOK_URL, TIMEOUT_MS } from "./constants";
import { parseResponse, validateResponse } from "./parser";
import { createErrorMessage, handleNetworkError } from "./errors";

export async function sendChatMessage(
  message: string,
  context: ChatContext[]
): Promise<Message> {
  try {
    // Setup request with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ 
        message,
        context,
        timestamp: new Date().toISOString() // Add timestamp for webhook tracking
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    let data;
    const contentType = response.headers.get("content-type");
    
    if (contentType?.includes("application/json")) {
      data = await response.json();
    } else {
      // Handle non-JSON responses
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }
    }
    
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
    console.error('Chat API error:', error);
    return error instanceof Error ? createErrorMessage(error) : handleNetworkError(error);
  }
}