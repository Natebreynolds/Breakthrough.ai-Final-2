"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FileUpload from "./FileUpload";
import AnalysisResponse from "./AnalysisResponse";

interface FormData {
  name: string;
  email: string;
  helpType: string;
  transcript: string;
}

export default function AnalysisForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://hook.us1.make.com/aqfkiu5z2uh2yj3a6hf4xc62oaa979t0", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      setResponse(result);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (response) {
    return <AnalysisResponse response={response} onReset={() => setResponse(null)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-card/30 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            {...register("name", { required: true })}
            className="bg-background/50"
          />
          {errors.name && (
            <span className="text-sm text-red-500">Name is required</span>
          )}
        </div>

        <div className="space-y-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="bg-background/50"
          />
          {errors.email && (
            <span className="text-sm text-red-500">Valid email is required</span>
          )}
        </div>

        <div className="space-y-4">
          <Label htmlFor="helpType">How can we help you?</Label>
          <Select onValueChange={(value) => setValue("helpType", value)}>
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="Choose one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sales-improvement">Sales Call Improvement</SelectItem>
              <SelectItem value="pitch-analysis">Pitch Analysis</SelectItem>
              <SelectItem value="objection-handling">Objection Handling</SelectItem>
              <SelectItem value="closing-techniques">Closing Techniques</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label>Discovery Transcript</Label>
          <FileUpload onUpload={(content) => setValue("transcript", content)} />
          
          <div className="relative">
            <Label htmlFor="transcript" className="text-sm text-foreground/60">
              Or type/paste your transcript below:
            </Label>
            <Textarea
              id="transcript"
              {...register("transcript", { required: true })}
              className="min-h-[200px] mt-2 bg-background/50"
              placeholder="Enter your sales call transcript here..."
            />
            {errors.transcript && (
              <span className="text-sm text-red-500">Transcript is required</span>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Get Analysis"
          )}
        </Button>
      </form>
    </motion.div>
  );
}