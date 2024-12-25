export interface Message {
  role: "user" | "assistant";
  content: string;
  options?: string[];
  isTyping?: boolean;
}