"use client";

import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { useChatMessages } from "@/hooks/use-chat-messages";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isTyping, sendMessage } = useChatMessages();

  return (
    <div className="fixed bottom-0 right-0 z-50">
      <ChatButton onClick={() => setIsOpen(true)} isOpen={isOpen} />
      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        isTyping={isTyping}
        onSendMessage={sendMessage}
      />
    </div>
  );
}