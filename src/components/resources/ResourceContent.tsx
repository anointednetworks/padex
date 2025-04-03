
import React, { useState, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

interface ResourceSection {
  id: string;
  title: string;
  content: string[];
  order_index: number;
}

export const ResourceContent: React.FC<{
  scrollRef: React.RefObject<HTMLDivElement>;
}> = ({ scrollRef }) => {
  const [resourceSections, setResourceSections] = useState<ResourceSection[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchResourceSections = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('resource_sections')
          .select('id, title, content, order_index')
          .order('order_index', { ascending: true });
        
        if (error) {
          console.error('Error fetching resource sections:', error);
          toast({
            title: "Error",
            description: "Failed to load resource content",
            variant: "destructive"
          });
        } else {
          setResourceSections(data as unknown as ResourceSection[]);
        }
      } catch (error) {
        console.error('Error in fetchResourceSections:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResourceSections();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-pulse text-primary">Loading resource content...</div>
      </div>
    );
  }

  if (resourceSections.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No resource content found. Content will appear here once it's added.</p>
      </div>
    );
  }

  return (
    <div ref={scrollRef} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8 pt-12">
      {resourceSections.map((section) => (
        <div key={section.id} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
          {Array.isArray(section.content) ? (
            section.content.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 mb-4">{paragraph}</p>
            ))
          ) : (
            <p className="text-red-500">Invalid content format</p>
          )}
        </div>
      ))}
    </div>
  );
};
