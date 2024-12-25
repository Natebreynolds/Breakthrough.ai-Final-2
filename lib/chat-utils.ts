"use client";

import { Message } from "@/types/chat";

export async function handleChatResponse(response: Response): Promise<Message> {
  try {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Handle empty response
    if (!data) {
      return createErrorMessage('No response received');
    }

    // Extract content from various response formats
    let content: string;
    let options: string[] | undefined;

    if (typeof data === 'string') {
      content = data;
    } else if (typeof data === 'object') {
      // Handle different response structures
      if (data.error) {
        return createErrorMessage(data.error);
      }
      
      content = data.response || data.message || data.content || '';
      options = Array.isArray(data.options) ? data.options : undefined;
    } else {
      return createErrorMessage('Invalid response format');
    }

    if (!content.trim()) {
      return createErrorMessage('Empty response content');
    }

    return {
      role: "assistant",
      content: content.trim(),
      options
    };
  } catch (error) {
    console.error('Error handling chat response:', error);
    return createErrorMessage('Unable to process response');
  }
}

function createErrorMessage(message: string): Message {
  return {
    role: "assistant",
    content: `I apologize, but there was an issue: ${message}. Please try again.`,
    options: [
      "Try asking another question",
      "Start over"
    ]
  };
}

export function formatChatMessage(message: string): string {
  return message.trim();
}

export function validateMessage(message: string): boolean {
  return message.trim().length > 0;
}