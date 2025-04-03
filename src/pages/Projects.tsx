
import React, { useRef, useState, useEffect } from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Key } from 'lucide-react';
import { ResourcesTab } from '@/components/resource/ResourcesTab';
import { AdminTab } from '@/components/resource/AdminTab';

const Projects = () => {
  const resourcesContainerRef = useRef<HTMLDivElement>(null);
  const [adminPassword, setAdminPassword] = useState('');

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
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead 
        title="Resource Center | Illuminated Links" 
        description="Explore our resource center for insightful articles on insurance, retirement planning, and financial well-being." 
      />
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
              <ResourcesTab />
            </TabsContent>
            
            <TabsContent value="admin">
              <AdminTab 
                adminPassword={adminPassword} 
                setAdminPassword={setAdminPassword} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
