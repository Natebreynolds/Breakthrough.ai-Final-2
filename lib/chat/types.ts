export interface ParsedResponse {
  content: string;
  options?: string[];
}

export interface ChatContext {
  role: "user" | "assistant";
  content: string;
}