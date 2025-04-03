
import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, Download } from "lucide-react";
import { saveAs } from 'file-saver';
import { generateResourceJSX, generateResourceHTML } from "@/utils/documentProcessing";
import { ResourceSection } from './SectionEditor';

interface OutputCodeSectionProps {
  resourceSections: ResourceSection[];
  fileName: string;
  outputFormat: 'jsx' | 'html';
  setOutputFormat: React.Dispatch<React.SetStateAction<'jsx' | 'html'>>;
}

export const OutputCodeSection: React.FC<OutputCodeSectionProps> = ({
  resourceSections,
  fileName,
  outputFormat,
  setOutputFormat
}) => {
  const copyOutput = () => {
    const output = outputFormat === 'jsx' ? generateResourceJSX(resourceSections) : generateResourceHTML(resourceSections);
    navigator.clipboard.writeText(output)
      .then(() => console.log("Output copied to clipboard!"))
      .catch(() => console.error("Failed to copy text"));
  };

  const downloadOutput = () => {
    const output = outputFormat === 'jsx' ? generateResourceJSX(resourceSections) : generateResourceHTML(resourceSections);
    const blob = new Blob([output], { 
      type: outputFormat === 'jsx' ? 'text/plain' : 'text/html;charset=utf-8' 
    });
    const extension = outputFormat === 'jsx' ? 'jsx' : 'html';
    saveAs(blob, `${fileName.replace('.docx', '')}_resource.${extension}`);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Output Format:</h3>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <Label htmlFor="format-jsx">
              <input
                type="radio"
                id="format-jsx"
                name="format"
                className="mr-2"
                checked={outputFormat === 'jsx'}
                onChange={() => setOutputFormat('jsx')}
              />
              JSX
            </Label>
            
            <Label htmlFor="format-html">
              <input
                type="radio"
                id="format-html"
                name="format"
                className="mr-2"
                checked={outputFormat === 'html'}
                onChange={() => setOutputFormat('html')}
              />
              HTML
            </Label>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={copyOutput}
              className="flex items-center"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button 
              variant="outline"
              size="sm" 
              onClick={downloadOutput}
              className="flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>
      
      <Textarea 
        value={outputFormat === 'jsx' ? generateResourceJSX(resourceSections) : generateResourceHTML(resourceSections)}
        readOnly
        className="min-h-[300px] font-mono text-sm"
      />
    </div>
  );
};
