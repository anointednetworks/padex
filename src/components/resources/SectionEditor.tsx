
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";

export interface ResourceSection {
  title: string;
  content: string[];
}

interface SectionEditorProps {
  resourceSections: ResourceSection[];
  updateSection: (index: number, updatedSection: ResourceSection) => void;
  addNewSection: () => void;
  removeSection: (index: number) => void;
  useAutoFormatting: boolean;
  setUseAutoFormatting: (value: boolean) => void;
  saveToDatabase: (sections: ResourceSection[]) => Promise<void>;
  isSaving: boolean;
}

export const SectionEditor: React.FC<SectionEditorProps> = ({
  resourceSections,
  updateSection,
  addNewSection,
  removeSection,
  useAutoFormatting,
  setUseAutoFormatting,
  saveToDatabase,
  isSaving
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Extracted Sections: {resourceSections.length}</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch 
              id="auto-format" 
              checked={useAutoFormatting} 
              onCheckedChange={setUseAutoFormatting}
            />
            <Label htmlFor="auto-format">Auto-format</Label>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={addNewSection}
          >
            Add Section
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center">
                <Save className="mr-2 h-4 w-4" />
                Save to Database
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Save to Resource Center</DialogTitle>
                <DialogDescription>
                  These sections will be added to the Resource Center and displayed on the public page.
                </DialogDescription>
              </DialogHeader>
              
              <div className="max-h-[60vh] overflow-y-auto my-4">
                {resourceSections.length > 0 ? (
                  <div className="space-y-4">
                    {resourceSections.map((section, index) => (
                      <div key={index} className="p-3 border rounded-md">
                        <h4 className="font-medium">{section.title}</h4>
                        <p className="text-sm text-gray-500 truncate">
                          {section.content.length} paragraph(s)
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No sections available to save.
                  </div>
                )}
              </div>
              
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button 
                  onClick={() => saveToDatabase(resourceSections)}
                  disabled={resourceSections.length === 0 || isSaving}
                >
                  {isSaving ? 'Saving...' : `Save ${resourceSections.length} Section(s)`}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {resourceSections.length > 0 ? (
        <div className="space-y-4">
          {resourceSections.map((section, index) => (
            <Card key={index} className="p-4">
              <div className="flex justify-between items-center mb-2">
                <Input 
                  className="font-medium w-1/3" 
                  value={section.title}
                  onChange={(e) => {
                    const updatedSection = { ...section, title: e.target.value };
                    updateSection(index, updatedSection);
                  }}
                />
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => removeSection(index)}
                >
                  Remove
                </Button>
              </div>
              <Textarea 
                className="text-gray-600 text-sm min-h-[100px] mt-2"
                value={section.content.join('\n')}
                onChange={(e) => {
                  const updatedSection = { 
                    ...section, 
                    content: e.target.value.split('\n')
                      .map(line => line.trim())
                      .filter(line => line.length > 0)
                  };
                  updateSection(index, updatedSection);
                }}
              />
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No sections detected. Try adjusting the text format in your document.
        </div>
      )}
    </div>
  );
};
