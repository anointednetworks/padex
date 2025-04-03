
import React, { useRef } from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { ResourceTabs } from '@/components/resources/ResourceTabs';
import { AdminProvider } from '@/contexts/AdminContext';

const Projects = () => {
  const scrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const yOffset = -100;
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
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
        onReadMoreClick={() => {
          const resourcesElements = document.querySelectorAll('[data-tab-content="resources"]');
          if (resourcesElements.length > 0) {
            const resourcesElement = resourcesElements[0];
            const y = resourcesElement.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}
        showReadMoreButton={true}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <AdminProvider>
            <ResourceTabs onScrollToResource={scrollToElement} />
          </AdminProvider>
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
