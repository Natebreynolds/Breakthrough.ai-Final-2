"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { validateMessage } from "@/lib/chat-utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateMessage(input)) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-card/50 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!validateMessage(input)}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}