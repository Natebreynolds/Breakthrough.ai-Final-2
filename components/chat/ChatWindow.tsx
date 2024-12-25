"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare } from "lucide-react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { Message } from "@/types/chat";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
}

export default function ChatWindow({ 
  isOpen, 
  onClose, 
  messages, 
  isTyping,
  onSendMessage 
}: ChatWindowProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          style={{ maxHeight: 'calc(100vh - 48px)' }}
          className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-background/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden z-50"
        >
          {/* Enhanced Header */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10" />
            <div className="relative flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Breakthrough AI</h3>
                  <span className="text-xs text-foreground/60">AI-Powered Assistant</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col h-[calc(100%-76px)]">
            <ChatMessages 
              messages={messages} 
              isTyping={isTyping}
              onSendMessage={onSendMessage} 
            />
            <ChatInput onSendMessage={onSendMessage} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}