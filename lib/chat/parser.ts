"use client";

import { ParsedResponse } from "./types";

export function parseResponse(data: unknown): ParsedResponse {
  try {
    // Handle string responses
    if (typeof data === 'string') {
      return { content: data.trim() };
    }

    // Handle object responses
    if (data && typeof data === 'object') {
      const obj = data as Record<string, unknown>;
      
      // Try to extract content from various possible response structures
      let content = '';
      
      if (typeof obj.response === 'string') {
        content = obj.response;
      } else if (typeof obj.message === 'string') {
        content = obj.message;
      } else if (typeof obj.content === 'string') {
        content = obj.content;
      } else if (obj.response && typeof obj.response === 'object') {
        // Handle nested response object
        const nestedResponse = obj.response as Record<string, unknown>;
        content = typeof nestedResponse.message === 'string' ? nestedResponse.message :
                 typeof nestedResponse.content === 'string' ? nestedResponse.content : '';
      }

      content = content.trim();

      // Extract options if available
      const options = Array.isArray(obj.options) ? obj.options as string[] : undefined;

      if (!content) {
        throw new Error('No valid content found in response');
      }

      return { content, options };
    }

    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Error parsing response:', error);
    throw error;
  }
}

export function validateResponse(parsed: ParsedResponse): boolean {
  return Boolean(parsed.content && parsed.content.length > 0);
}