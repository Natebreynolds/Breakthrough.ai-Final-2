"use client";

import { useState, useCallback } from "react";
import { Upload } from "lucide-react";
import { useDropzone } from "react-dropzone";

interface FileUploadProps {
  onUpload: (content: string) => void;
}

export default function FileUpload({ onUpload }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onUpload(content);
      };
      reader.readAsText(file);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/plain": [".txt"]
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
    onDropAccepted: () => setIsDragging(false),
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-200 ${
        isDragging
          ? "border-blue-500 bg-blue-500/10"
          : "border-foreground/20 hover:border-foreground/40"
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-8 w-8 mb-4 text-foreground/60" />
      <p className="text-sm text-foreground/60">
        Drop your transcript file here or{" "}
        <span className="text-blue-400">browse</span>
      </p>
      <p className="text-xs text-foreground/40 mt-2">
        Supports: TXT files only (max 5MB)
      </p>
    </div>
  );
}