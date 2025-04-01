
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { SEOHead } from "@/components/SEOHead";
import { DocumentProcessor } from "@/components/DocumentProcessor";

const DocumentProcessorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead 
        title="Document Processor | Illuminated Links" 
        description="Upload and extract text from Word documents with our document processing tool."
      />
      <NavBarDemo />
      
      <div className="container mx-auto px-4 py-8 mt-20">
        <DocumentProcessor />
      </div>
      
      <div className="mt-auto">
        <StackedCircularFooter />
      </div>
    </div>
  );
};

export default DocumentProcessorPage;
