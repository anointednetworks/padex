
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RefreshCw, Trash } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { supabase } from "@/lib/supabase";

export interface StoredResourceSection {
  id: string;
  title: string;
  content: string[];
  order_index: number;
  created_at: string;
  updated_at: string;
}

interface DatabaseSectionProps {
  savedSections: StoredResourceSection[];
  setSavedSections: React.Dispatch<React.SetStateAction<StoredResourceSection[]>>;
  isLoading: boolean;
  refreshTrigger: number;
  setRefreshTrigger: React.Dispatch<React.SetStateAction<number>>;
}

export const DatabaseSection: React.FC<DatabaseSectionProps> = ({
  savedSections,
  setSavedSections,
  isLoading,
  refreshTrigger,
  setRefreshTrigger
}) => {
  // Function to delete a resource section from the database
  const deleteResourceSection = async (id: string) => {
    try {
      const { error } = await supabase
        .from('resource_sections')
        .delete()
        .eq('id', id);
        
      if (error) {
        throw new Error(error.message);
      }
      
      // Update the local state
      setSavedSections(prev => prev.filter(section => section.id !== id));
      
      console.log("Section deleted successfully!");
    } catch (error) {
      console.error('Error deleting section:', error);
    }
  };

  // Function to update a resource section in the database
  const updateResourceSection = async (section: StoredResourceSection) => {
    try {
      const { error } = await supabase
        .from('resource_sections')
        .update({
          title: section.title,
          content: section.content,
          updated_at: new Date().toISOString()
        })
        .eq('id', section.id);
        
      if (error) {
        throw new Error(error.message);
      }
      
      // Update the local state
      setSavedSections(prev => prev.map(s => 
        s.id === section.id ? section : s
      ));
      
      console.log("Section updated successfully!");
    } catch (error) {
      console.error('Error updating section:', error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Saved Sections: {savedSections.length}</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setRefreshTrigger(prev => prev + 1)}
          className="flex items-center"
          disabled={isLoading}
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
      
      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-pulse text-primary">Loading saved sections...</div>
        </div>
      ) : savedSections.length > 0 ? (
        <div className="space-y-4">
          {savedSections.map((section) => (
            <Card key={section.id} className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{section.title}</h4>
                <div className="flex space-x-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit Section</SheetTitle>
                        <SheetDescription>
                          Make changes to the resource section. Click save when you're done.
                        </SheetDescription>
                      </SheetHeader>
                      
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor={`title-${section.id}`}>Title</Label>
                          <Input 
                            id={`title-${section.id}`}
                            value={section.title}
                            onChange={(e) => {
                              setSavedSections(prev => 
                                prev.map(s => s.id === section.id 
                                  ? { ...s, title: e.target.value } 
                                  : s
                                )
                              );
                            }}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`content-${section.id}`}>Content</Label>
                          <Textarea 
                            id={`content-${section.id}`}
                            value={Array.isArray(section.content) ? section.content.join('\n') : ''}
                            onChange={(e) => {
                              setSavedSections(prev => 
                                prev.map(s => s.id === section.id 
                                  ? { 
                                      ...s, 
                                      content: e.target.value.split('\n')
                                        .map(line => line.trim())
                                        .filter(line => line.length > 0) 
                                    } 
                                  : s
                                )
                              );
                            }}
                            className="min-h-[200px]"
                          />
                        </div>
                      </div>
                      
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </SheetClose>
                        <Button 
                          onClick={() => {
                            updateResourceSection(
                              savedSections.find(s => s.id === section.id) as StoredResourceSection
                            );
                          }}
                        >
                          Save Changes
                        </Button>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Section</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete the section "{section.title}"? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button 
                          variant="destructive" 
                          onClick={() => deleteResourceSection(section.id)}
                        >
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {Array.isArray(section.content) ? (
                  section.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-2">{paragraph}</p>
                  ))
                ) : (
                  <p className="text-red-500">Invalid content format</p>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No saved sections found. Process a document and save sections to see them here.
        </div>
      )}
    </div>
  );
};
