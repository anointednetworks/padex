
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Upload, FileText, Copy, Download } from "lucide-react";
import * as docx from 'docx';
import { saveAs } from 'file-saver';

export const DocumentProcessor = () => {
  const [extractedText, setExtractedText] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const extractTextFromDocx = async (arrayBuffer: ArrayBuffer) => {
    try {
      const result = await docx.Reader.read(arrayBuffer);
      const text = result.getValue().body.paragraphs
        .map(paragraph => 
          paragraph.text + (paragraph.text ? '\n' : '')
        )
        .join('');
      return text;
    } catch (error) {
      console.error('Error extracting text:', error);
      throw new Error('Failed to extract text from document');
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if file is a Word document
    if (!file.name.endsWith('.docx')) {
      toast.error('Please upload a .docx file');
      return;
    }

    setFileName(file.name);
    setIsProcessing(true);
    
    try {
      const arrayBuffer = await file.arrayBuffer();
      const text = await extractTextFromDocx(arrayBuffer);
      setExtractedText(text);
      toast.success('Document processed successfully!');
    } catch (error) {
      console.error('Error processing document:', error);
      toast.error('Error processing document. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(extractedText)
      .then(() => toast.success('Text copied to clipboard!'))
      .catch(() => toast.error('Failed to copy text'));
  };

  const downloadAsTextFile = () => {
    const blob = new Blob([extractedText], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${fileName.replace('.docx', '')}_extracted.txt`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Document Text Extractor</h2>
        <p className="text-gray-600 mb-6">
          Upload a Word document (.docx) to extract its text content.
        </p>
        
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
        </div>
        
        {fileName && (
          <div className="mb-4 flex items-center text-sm text-gray-500">
            <FileText className="mr-2 h-4 w-4" />
            <span>Current file: {fileName}</span>
          </div>
        )}
        
        {isProcessing && (
          <div className="flex justify-center my-4">
            <div className="animate-pulse text-primary">Processing document...</div>
          </div>
        )}

        {extractedText && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Extracted Text:</h3>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={copyTextToClipboard}
                  className="flex items-center"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={downloadAsTextFile}
                  className="flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
            
            <Textarea 
              value={extractedText} 
              onChange={(e) => setExtractedText(e.target.value)}
              className="min-h-[300px] font-mono text-sm" 
            />
          </div>
        )}
      </Card>
    </div>
  );
};
