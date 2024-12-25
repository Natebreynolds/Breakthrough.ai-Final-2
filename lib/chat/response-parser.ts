"use client";

import { Message } from "@/types/chat";

interface ParsedResponse {
  content: string;
  options?: string[];
}

export function parseResponse(data: any): ParsedResponse {
  // Handle string responses
  if (typeof data === 'string') {
    return { content: data.trim() };
  }

  // Handle object responses
  if (typeof data === 'object' && data !== null) {
    // Extract content from various response formats
    const content = data.response || data.message || data.content || '';
    const options = Array.isArray(data.options) ? data.options : undefined;

    return { 
      content: content.trim(),
      options 
    };
  }

  throw new Error('Invalid response format');
}

export function validateResponse(parsed: ParsedResponse): boolean {
  return parsed.content.length > 0;
}