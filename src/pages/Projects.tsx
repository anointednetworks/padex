
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { FaqSection } from "@/components/ui/faq-section";

const RESOURCE_FAQS = [
  {
    question: "Annuities",
    answer: "What are your retirement goals?  For most people, it’s making sure the money lasts through out their retirement. Do you know the secret about having an income for the rest of your life?  Ask me how.",
  },
  {
    question: "Insurance",
    answer: "Why Do You Need Health Insurance?",
Today, the cost of insurance is high, and still increasing. Who will pay your bills if you have a serious accident or a major illness?  Let’s discuss insurance you don’t have to die to use.  It allows you to pay your bills while recuperating, without stress.",
  },
  {
    question: "Health Insurance",
    answer: "We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.",
  },
  {
    question: "Can I integrate your platform with my existing tools?",
    answer: "Absolutely! Our platform is designed with flexibility in mind, offering seamless integration with most popular business tools and software. We provide robust APIs and pre-built connectors for common applications like CRM systems, accounting software, and project management tools.",
  },
  {
    question: "Is my data secure on your platform?",
    answer: "Security is our top priority. We implement industry-leading encryption, regular security audits, and compliance with major regulations like GDPR and HIPAA. All customer data is stored in SOC 2 compliant data centers, and we maintain a comprehensive disaster recovery plan.",
  },
  {
    question: "Do you offer customization options?",
    answer: "Yes, we offer extensive customization options to meet your specific business needs. From white-labeling to workflow customization, our platform can be tailored to align with your brand identity and operational requirements. Enterprise clients also have access to our professional services team for advanced customization.",
  },
  {
    question: "What training resources are available?",
    answer: "We provide a comprehensive suite of training resources, including detailed documentation, video tutorials, regular webinars, and a knowledge base. New users receive access to our onboarding program, and enterprise plans include personalized training sessions with our product specialists.",
  },
  {
    question: "How often do you release updates?",
    answer: "We follow a continuous improvement model with major feature releases quarterly and smaller updates monthly. All updates are automatically deployed with zero downtime. We communicate upcoming changes through our product newsletter, and all new features include comprehensive documentation and tutorials.",
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
        />
      </div>
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
