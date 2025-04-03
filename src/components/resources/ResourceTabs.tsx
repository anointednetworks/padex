
import React, { useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Key } from 'lucide-react';
import { ResourceContent } from "./ResourceContent";
import { AdminAuth } from "./AdminAuth";
import { ResourceDocumentProcessor } from '@/components/ResourceDocumentProcessor';
import { useAdmin } from "@/contexts/AdminContext";

export const ResourceTabs: React.FC<{
  onScrollToResource: (ref: React.RefObject<HTMLDivElement>) => void;
}> = ({ onScrollToResource }) => {
  const resourcesContainerRef = useRef<HTMLDivElement>(null);
  const { showAdminTools } = useAdmin();

  React.useEffect(() => {
    // Set up ref for parent component to use
    if (resourcesContainerRef.current) {
      onScrollToResource(resourcesContainerRef);
    }
  }, [onScrollToResource]);

  return (
    <Tabs defaultValue="resources">
      <div className="flex justify-between items-center mb-6">
        <TabsList>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="admin" className="flex items-center">
            <Key className="mr-2 h-4 w-4" /> Admin
          </TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="resources">
        <ResourceContent scrollRef={resourcesContainerRef} />
      </TabsContent>
      
      <TabsContent value="admin">
        <AdminAuth />
        
        {showAdminTools && (
          <ResourceDocumentProcessor />
        )}
      </TabsContent>
    </Tabs>
  );
};
