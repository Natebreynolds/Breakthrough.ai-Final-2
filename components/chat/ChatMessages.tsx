"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Message } from "@/types/chat";
import { Button } from "@/components/ui/button";
import TypingIndicator from "./TypingIndicator";

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
}

export default function ChatMessages({ messages, isTyping, onSendMessage }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-2xl ${
              message.role === "user"
                ? "bg-blue-500 text-white"
                : "bg-card/50 border border-white/10"
            }`}
          >
            <p className="text-sm">{message.content}</p>
            {message.options && (
              <div className="mt-4 space-y-2">
                {message.options.map((option, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-500/10"
                    onClick={() => onSendMessage(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
}