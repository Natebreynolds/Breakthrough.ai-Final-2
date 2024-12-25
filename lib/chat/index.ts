"use client";

import { Message } from "@/types/chat";

// Constants
export const WEBHOOK_URL = "https://hook.us1.make.com/sh64dn74dr469wwmgxiwitkn9v5kqv1u";
export const TIMEOUT_MS = 10000;

// Message Validation & Formatting
export function validateMessage(message: string): boolean {
  return message.trim().length > 0;
}

export function formatMessage(message: string): string {
  return message.trim();
}

// Response Parsing
interface ParsedResponse {
  content: string;
  options?: string[];
}

export function parseResponse(data: any): ParsedResponse {
  try {
    // Handle string responses
    if (typeof data === 'string') {
      return { content: data.trim() };
    }

    // Handle object responses
    if (typeof data === 'object' && data !== null) {
      const content = data.response || data.message || data.content || '';
      const options = Array.isArray(data.options) ? data.options : undefined;

      return { 
        content: content.trim(),
        options 
      };
    }

    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Error parsing response:', error);
    throw error;
  }
}

// Error Handling
export function createErrorMessage(error: Error | string): Message {
  const message = error instanceof Error ? error.message : error;
  
  return {
    role: "assistant",
    content: `I apologize, but there was an issue: ${message}. Please try again.`,
    options: [
      "Try asking another question",
      "Start over"
    ]
  };
}

export function handleNetworkError(error: unknown): Message {
  if (error instanceof DOMException && error.name === 'AbortError') {
    return {
      role: "assistant",
      content: "I apologize, but the request timed out. Please try again.",
      options: ["Try asking another question", "Start over"]
    };
  }

  return {
    role: "assistant",
    content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
    options: ["Try asking another question", "Start over"]
  };
}

// Main Response Handler
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
    
    if (!parsed.content) {
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