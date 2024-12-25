"use client";

import { useState } from "react";
import { Message } from "@/types/chat";
import { ChatContext } from "@/lib/chat/types";
import { sendChatMessage } from "@/lib/chat/api";

const initialMessage: Message = {
  role: "assistant",
  content: "Welcome to Breakthrough Coaching AI! What would you like to learn about?",
  options: [
    "Tell me about Fractional CSO Services",
    "How does AI-Powered Sales Coaching work?",
    "Explain your Sales Automation Solutions",
    "What Custom Training Programs do you offer?"
  ]
};

export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    try {
      // Add user message
      const userMessage: Message = { role: "user", content: content.trim() };
      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      // Get recent context
      const context: ChatContext[] = messages.slice(-3).map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Send message and get response
      const assistantMessage = await sendChatMessage(content.trim(), context);
      
      // Add slight delay for natural feel
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but something went wrong. Please try again.",
          options: ["Try asking another question", "Start over"]
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return { messages, isTyping, sendMessage };
}