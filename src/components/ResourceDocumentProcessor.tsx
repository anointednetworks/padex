
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/lib/supabase";
import { parseResourceSections } from "@/utils/documentProcessing";
import { FileUploadSection } from "./resources/FileUploadSection";
import { SectionEditor, ResourceSection } from "./resources/SectionEditor";
import { OutputCodeSection } from "./resources/OutputCodeSection";
import { DatabaseSection, StoredResourceSection } from "./resources/DatabaseSection";
import { RawTextSection } from "./resources/RawTextSection";

export const ResourceDocumentProcessor = () => {
  // State variables
  const [extractedText, setExtractedText] = useState('');
  const [fileName, setFileName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [resourceSections, setResourceSections] = useState<ResourceSection[]>([]);
  const [outputFormat, setOutputFormat] = useState<'jsx' | 'html'>('jsx');
  const [useAutoFormatting, setUseAutoFormatting] = useState(true);
  const [savedSections, setSavedSections] = useState<StoredResourceSection[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Fetch existing resource sections from Supabase
  useEffect(() => {
    const fetchResourceSections = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('resource_sections')
          .select('*')
          .order('order_index', { ascending: true });
        
        if (error) {
          console.error('Error fetching resource sections:', error);
          toast({
            title: "Error",
            description: "Failed to load saved resource sections.",
            variant: "destructive"
          });
        } else {
          setSavedSections(data as unknown as StoredResourceSection[]);
        }
      } catch (error) {
        console.error('Error in fetchResourceSections:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResourceSections();
  }, [refreshTrigger]);

  // Handler for when a file is processed
  const handleFileProcessed = (text: string, newFileName: string) => {
    setFileName(newFileName);
    setIsProcessing(true);

    try {
      setExtractedText(text);
      
      // Try to auto-format as resource sections
      if (useAutoFormatting) {
        const sections = parseResourceSections(text);
        setResourceSections(sections);
      }

      toast({
        title: "Success",
        description: "Document processed successfully!"
      });
    } catch (error) {
      console.error('Error processing document:', error);
      toast({
        title: "Error",
        description: "Error processing document. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Function to update a section
  const updateSection = (index: number, updatedSection: ResourceSection) => {
    const updatedSections = [...resourceSections];
    updatedSections[index] = updatedSection;
    setResourceSections(updatedSections);
  };

  // Function to add a new empty section
  const addNewSection = () => {
    setResourceSections([...resourceSections, { title: 'New Section', content: ['Add content here'] }]);
  };

  // Function to remove a section
  const removeSection = (index: number) => {
    const updatedSections = [...resourceSections];
    updatedSections.splice(index, 1);
    setResourceSections(updatedSections);
  };

  // Function to save resource sections to Supabase
  const saveToDatabase = async (selectedSections: ResourceSection[]) => {
    setIsSaving(true);
    
    try {
      // Get the current max order_index
      const { data: existingData, error: fetchError } = await supabase
        .from('resource_sections')
        .select('order_index')
        .order('order_index', { ascending: false })
        .limit(1);
        
      if (fetchError) {
        throw new Error(fetchError.message);
      }
      
      // Calculate the starting index for new sections
      const startIndex = existingData && existingData.length > 0 
        ? (existingData[0].order_index + 1) 
        : 0;
      
      // Prepare the sections for insert
      const sectionsToInsert = selectedSections.map((section, index) => ({
        title: section.title,
        content: section.content,
        order_index: startIndex + index
      }));
      
      // Insert sections into the database
      const { error: insertError } = await supabase
        .from('resource_sections')
        .insert(sectionsToInsert as any);
        
      if (insertError) {
        throw new Error(insertError.message);
      }
      
      // Refresh the list of saved sections
      setRefreshTrigger(prev => prev + 1);
      
      toast({
        title: "Success",
        description: `${selectedSections.length} section(s) saved to the database!`
      });
    } catch (error) {
      console.error('Error saving to database:', error);
      toast({
        title: "Error",
        description: `Failed to save to database: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" /> 
            Resource Document Processor
          </CardTitle>
          <CardDescription>
            Upload a Word document (.docx) to extract resource content and format it for the Resource Center.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FileUploadSection 
            isProcessing={isProcessing}
            fileName={fileName}
            onFileProcessed={handleFileProcessed}
          />

          {extractedText && (
            <Tabs defaultValue="sections">
              <TabsList className="mb-4">
                <TabsTrigger value="sections">Resource Sections</TabsTrigger>
                <TabsTrigger value="raw">Raw Text</TabsTrigger>
                <TabsTrigger value="output">Output Code</TabsTrigger>
                <TabsTrigger value="database">Saved Sections</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sections" className="space-y-4">
                <SectionEditor 
                  resourceSections={resourceSections}
                  updateSection={updateSection}
                  addNewSection={addNewSection}
                  removeSection={removeSection}
                  useAutoFormatting={useAutoFormatting}
                  setUseAutoFormatting={setUseAutoFormatting}
                  saveToDatabase={saveToDatabase}
                  isSaving={isSaving}
                />
              </TabsContent>
              
              <TabsContent value="raw">
                <RawTextSection 
                  extractedText={extractedText}
                  setExtractedText={setExtractedText}
                />
              </TabsContent>
              
              <TabsContent value="output">
                <OutputCodeSection 
                  resourceSections={resourceSections}
                  fileName={fileName}
                  outputFormat={outputFormat}
                  setOutputFormat={setOutputFormat}
                />
              </TabsContent>
              
              <TabsContent value="database">
                <DatabaseSection 
                  savedSections={savedSections}
                  setSavedSections={setSavedSections}
                  isLoading={isLoading}
                  refreshTrigger={refreshTrigger}
                  setRefreshTrigger={setRefreshTrigger}
                />
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
