
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, User, Shield, HeartPulse, Umbrella, DollarSign, Heart, Stethoscope, Infinity, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Article data
const ARTICLE_DATA = {
  id: 1,
  title: "Why Do You Need Health Insurance?",
  excerpt: "Today, the cost of insurance is high, and still increasing. Who will pay your bills if you have a serious accident or a major illness? Let's discuss insurance you don't have to die to use. It allows you to pay your bills while recuperating, without stress.",
  author: "Insurance Advisory Team",
  date: "June 2, 2023",
  readTime: "10 min read",
  imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  content: `
    <p>Insurance transfers the financial risk of life's events to an insurance company. A sound insurance strategy can help protect your family from the financial consequences of those events. A strategy can include personal insurance, liability insurance, and life insurance.</p>
  `
};

// Insurance items
const INSURANCE_ITEMS = [
  {
    title: "Health Insurance Basics",
    description: "Health insurance helps cover medical expenses and offers financial protection against unexpected healthcare costs. Policies typically cover doctor visits, hospital stays, and prescription medications.",
    icon: HeartPulse
  },
  {
    title: "Managing Medical Costs",
    description: "With rising healthcare costs, health insurance provides a financial safety net. Without it, a severe illness or accident could lead to significant debt or even bankruptcy.",
    icon: DollarSign
  },
  {
    title: "Preventive Care Benefits",
    description: "Many health insurance plans cover preventive services at no additional cost, including vaccinations, screenings, and annual check-ups, helping you stay healthy and catch issues early.",
    icon: CheckCircle2
  },
  {
    title: "Family Protection",
    description: "Health insurance doesn't just protect you—it protects your entire family. Family plans provide coverage for spouses and children, ensuring everyone has access to necessary healthcare.",
    icon: Heart
  },
  {
    title: "Emergency Coverage",
    description: "When unexpected medical emergencies occur, health insurance covers emergency room visits and hospital stays, reducing your financial burden during already stressful situations.",
    icon: AlertCircle
  },
  {
    title: "Long-Term Health Management",
    description: "For chronic conditions requiring ongoing treatment, health insurance helps manage long-term healthcare costs and ensures consistent access to necessary medications and therapies.",
    icon: Stethoscope
  },
  {
    title: "Mental Health Support",
    description: "Many health insurance plans now include coverage for mental health services, including therapy, counseling, and psychiatric care, supporting your complete wellbeing.",
    icon: Shield
  },
  {
    title: "Maternity and Newborn Care",
    description: "Health insurance typically covers prenatal care, childbirth, and newborn care, reducing the financial impact of bringing a new life into your family.",
    icon: Heart
  },
  {
    title: "Specialized Treatment Access",
    description: "Insurance networks often include specialists and advanced treatment options that might otherwise be financially out of reach, ensuring you have access to quality care.",
    icon: Umbrella
  },
  {
    title: "Peace of Mind",
    description: "Perhaps the most valuable benefit: knowing you're protected financially against healthcare costs provides peace of mind and reduces stress during health challenges.",
    icon: Infinity
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead 
        title="Resource Center | Illuminated Links"
        description="Explore our resource center for insightful articles on insurance, retirement planning, and financial well-being."
      />
      <NavBarDemo />
      
      <ServiceHero title="Resources" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8">
              <img 
                src={ARTICLE_DATA.imageUrl}
                alt={ARTICLE_DATA.title} 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{ARTICLE_DATA.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{ARTICLE_DATA.readTime}</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-3">{ARTICLE_DATA.title}</h2>
              <p className="text-gray-600 mb-8 text-lg">{ARTICLE_DATA.excerpt}</p>
              
              <div 
                className="prose max-w-none mb-8" 
                dangerouslySetInnerHTML={{ __html: ARTICLE_DATA.content }}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {INSURANCE_ITEMS.map((item, index) => (
                  <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 border-t border-gray-100">
              <div className="flex justify-center">
                <Button className="group">
                  Request More Information
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
