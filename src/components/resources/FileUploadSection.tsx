
import React from 'react';
import { Input } from "@/components/ui/input";
import { FileText, Upload } from "lucide-react";
import { extractTextFromDocx } from "@/utils/documentProcessing";

interface FileUploadSectionProps {
  isProcessing: boolean;
  fileName: string;
  onFileProcessed: (text: string, fileName: string) => void;
}

export const FileUploadSection: React.FC<FileUploadSectionProps> = ({
  isProcessing,
  fileName,
  onFileProcessed
}) => {
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if file is a Word document
    if (!file.name.endsWith('.docx')) {
      console.error("Please upload a .docx file");
      return;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const text = await extractTextFromDocx(arrayBuffer);
      onFileProcessed(text, file.name);
    } catch (error) {
      console.error('Error processing document:', error);
    }
  };

  return (
    <div className="mb-6">
      <label 
        htmlFor="document-upload" 
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-8 h-8 mb-2 text-gray-500" />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">Word Document (.docx)</p>
        </div>
        <Input 
          id="document-upload" 
          type="file" 
          accept=".docx" 
          className="hidden" 
          onChange={handleFileUpload} 
        />
      </label>
      
      {fileName && (
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <FileText className="mr-2 h-4 w-4" />
          <span>Current file: {fileName}</span>
        </div>
      )}
      
      {isProcessing && (
        <div className="flex justify-center my-4">
          <div className="animate-pulse text-primary">Processing document...</div>
        </div>
      )}
    </div>
  );
};
