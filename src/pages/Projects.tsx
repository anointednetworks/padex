
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { FaqSection } from "@/components/ui/faq-section";

const RESOURCE_FAQS = [
  {
    question: "What makes your platform unique?",
    answer: "Our platform stands out through its intuitive design, powerful automation capabilities, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features.",
  },
  {
    question: "How does the pricing structure work?",
    answer: "We offer flexible, transparent pricing tiers designed to scale with your needs. Each tier includes a core set of features, with additional capabilities as you move up. All plans start with a 14-day free trial.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBarDemo />
      <div className="flex-grow flex flex-col items-center px-4 py-32">
        <h1 className="text-4xl font-bold mb-8 tracking-tight text-foreground">Resources</h1>
        
        <FaqSection
          title="Frequently Asked Questions"
          description="Everything you need to know about our platform"
          items={RESOURCE_FAQS}
          contactInfo={{
            title: "Still have questions?",
            description: "We're here to help you",
            buttonText: "Contact Support",
            onContact: () => console.log("Contact support clicked"),
          }}
        />
      </div>
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
