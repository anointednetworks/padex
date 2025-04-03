
import React from 'react';
import { Textarea } from "@/components/ui/textarea";

interface RawTextSectionProps {
  extractedText: string;
  setExtractedText: React.Dispatch<React.SetStateAction<string>>;
}

export const RawTextSection: React.FC<RawTextSectionProps> = ({
  extractedText,
  setExtractedText
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">Raw Text:</h3>
      </div>
      <Textarea 
        value={extractedText} 
        onChange={(e) => setExtractedText(e.target.value)} 
        className="min-h-[300px] font-mono text-sm"
      />
    </div>
  );
};
