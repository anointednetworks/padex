
import React, { useRef, useState, useEffect } from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { ResourceDocumentProcessor } from '@/components/ResourceDocumentProcessor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Key } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ResourceSection {
  id: string;
  title: string;
  content: string[];
  order_index: number;
}

const Projects = () => {
  const resourcesContainerRef = useRef<HTMLDivElement>(null);
  const [showAdminTools, setShowAdminTools] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [resourceSections, setResourceSections] = useState<ResourceSection[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Fetch resource sections from the database
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
          setResourceSections(data as ResourceSection[]);
        }
      } catch (error) {
        console.error('Error in fetchResourceSections:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResourceSections();
  }, []);
  
  const handleAdminAuth = () => {
    if (inputPassword === adminPassword) {
      setShowAdminTools(true);
      toast({
        title: "Success",
        description: "Admin access granted"
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid password",
        variant: "destructive"
      });
    }
  };
  
  const handleSetPassword = () => {
    if (inputPassword.length >= 4) {
      setAdminPassword(inputPassword);
      setShowAdminTools(true);
      localStorage.setItem('resourceAdminPassword', inputPassword);
      toast({
        title: "Success",
        description: "Admin password set"
      });
    } else {
      toast({
        title: "Error",
        description: "Password must be at least 4 characters",
        variant: "destructive"
      });
    }
  };
  
  const handleLogout = () => {
    setShowAdminTools(false);
    setInputPassword('');
  };

  useEffect(() => {
    const savedPassword = localStorage.getItem('resourceAdminPassword');
    if (savedPassword) {
      setAdminPassword(savedPassword);
    }
  }, []);

  const scrollToAnnuities = () => {
    if (resourcesContainerRef.current) {
      const yOffset = -100;
      const element = resourcesContainerRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Render Resource Sections from Database
  const renderDatabaseContent = () => {
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

    return resourceSections.map((section) => (
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
    ));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead title="Resource Center | Illuminated Links" description="Explore our resource center for insightful articles on insurance, retirement planning, and financial well-being." />
      <NavBarDemo />
      
      <ServiceHero 
        title="Resources" 
        subheading="Expert guidance for your financial well-being"
        onReadMoreClick={scrollToAnnuities}
        showReadMoreButton={true}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
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
              <div ref={resourcesContainerRef} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8 pt-12">
                {renderDatabaseContent()}
              </div>
            </TabsContent>
            
            <TabsContent value="admin">
              <Card className="p-6 mb-6">
                {!adminPassword ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Set Admin Password</h3>
                    <p className="text-sm text-gray-500">
                      Create a password to protect the admin tools. This will be stored locally in your browser.
                    </p>
                    <div className="flex gap-2">
                      <Input 
                        type="password" 
                        placeholder="Set a password" 
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}
                      />
                      <Button onClick={handleSetPassword}>Set Password</Button>
                    </div>
                  </div>
                ) : !showAdminTools ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Admin Login</h3>
                    <div className="flex gap-2">
                      <Input 
                        type="password" 
                        placeholder="Enter admin password" 
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}
                      />
                      <Button onClick={handleAdminAuth}>Login</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Admin Tools</h3>
                      <Button variant="outline" size="sm" onClick={handleLogout}>
                        Logout
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Use these tools to manage content. When you're done, click "Logout" to hide the admin tools.
                    </p>
                    <div className="flex gap-2">
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => {
                          localStorage.removeItem('resourceAdminPassword');
                          setAdminPassword('');
                          setShowAdminTools(false);
                          toast({
                            title: "Success",
                            description: "Admin access removed"
                          });
                        }}
                      >
                        Delete Admin Access
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
              
              {showAdminTools && (
                <ResourceDocumentProcessor />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
