"use client";

import { Message } from "@/types/chat";
import { DEFAULT_OPTIONS } from "./constants";

export function createErrorMessage(error: Error | string): Message {
  const message = error instanceof Error ? error.message : error;
  
  return {
    role: "assistant",
    content: `I apologize, but there was an issue: ${message}. Please try again.`,
    options: DEFAULT_OPTIONS
  };
}

export function handleNetworkError(error: unknown): Message {
  if (error instanceof DOMException && error.name === 'AbortError') {
    return {
      role: "assistant",
      content: "I apologize, but the request timed out. Please try again.",
      options: DEFAULT_OPTIONS
    };
  }

  return {
    role: "assistant",
    content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
    options: DEFAULT_OPTIONS
  };
}