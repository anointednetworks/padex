
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// Featured article data
const FEATURED_ARTICLE = {
  id: 1,
  title: "Understanding Annuities: A Comprehensive Guide",
  excerpt: "What are your retirement goals? For most people, it's making sure the money lasts throughout their retirement. Learn the secrets of having a sustainable income for the rest of your life.",
  author: "Financial Advisor Team",
  date: "May 15, 2023",
  readTime: "8 min read",
  category: "Retirement Planning",
  imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  content: `
    <p>Retirement planning is one of the most important financial tasks you'll undertake. At its core, the goal is simple: ensure you have enough money to live comfortably after you stop working. But the path to get there can be complex.</p>
    
    <p>Annuities are financial products designed specifically to provide guaranteed income during retirement. Unlike other retirement vehicles, annuities are insurance products that can offer protection against outliving your savings.</p>
    
    <h3>What is an Annuity?</h3>
    
    <p>An annuity is a contract between you and an insurance company. You make a lump-sum payment or series of payments, and in return, the insurer agrees to make periodic payments to you beginning immediately or at some point in the future.</p>
    
    <p>Annuities are primarily used as a means of securing steady cash flow during retirement. They can also be used to create a source of regular income from a lump sum of money, which can be useful in estate planning.</p>
    
    <h3>Types of Annuities</h3>
    
    <p>There are several types of annuities, each with its own set of features:</p>
    
    <ul>
      <li><strong>Fixed Annuities:</strong> Offer a guaranteed payment amount for the duration of the annuity.</li>
      <li><strong>Variable Annuities:</strong> Payments vary based on the performance of the investment portfolio.</li>
      <li><strong>Indexed Annuities:</strong> Payments are tied to the performance of a market index like the S&P 500.</li>
      <li><strong>Immediate Annuities:</strong> Begin payments shortly after the initial investment.</li>
      <li><strong>Deferred Annuities:</strong> Payments begin at a future date, allowing time for the investment to grow.</li>
    </ul>
    
    <h3>Who Should Consider Annuities?</h3>
    
    <p>Annuities can be a good fit for individuals who:</p>
    
    <ul>
      <li>Are nearing retirement or already retired</li>
      <li>Want guaranteed income for life</li>
      <li>Have maxed out other retirement accounts</li>
      <li>Are concerned about outliving their savings</li>
      <li>Want to complement Social Security and pension benefits</li>
    </ul>
    
    <h3>Factors to Consider</h3>
    
    <p>Before investing in an annuity, consider:</p>
    
    <ul>
      <li>Fees and expenses</li>
      <li>Surrender charges for early withdrawal</li>
      <li>The financial strength of the insurance company</li>
      <li>How the annuity fits into your overall retirement plan</li>
      <li>Tax implications</li>
    </ul>
    
    <h3>Getting Started</h3>
    
    <p>If you're considering an annuity as part of your retirement strategy, it's important to work with a qualified financial advisor who can help you understand the complexities and determine if an annuity is right for you.</p>
    
    <p>At Illuminated Links, we can guide you through the process and help you make informed decisions about your retirement planning.</p>
  `
};

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead 
        title="Resource Center | Illuminated Links"
        description="Explore our resource center for insightful articles on insurance, retirement planning, and financial well-being."
      />
      <NavBarDemo />
      
      <ServiceHero title="Resources" />
      
      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-900">Featured Article</h1>
            <p className="text-xl text-gray-600">
              Gain valuable insights into retirement planning and financial security
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-6">
              <img 
                src={FEATURED_ARTICLE.imageUrl}
                alt={FEATURED_ARTICLE.title} 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  {FEATURED_ARTICLE.category}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{FEATURED_ARTICLE.title}</h2>
              <p className="text-gray-600 mb-4">{FEATURED_ARTICLE.excerpt}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{FEATURED_ARTICLE.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{FEATURED_ARTICLE.readTime}</span>
                </div>
              </div>
            </div>
            
            <div 
              className="prose max-w-none mb-6" 
              dangerouslySetInnerHTML={{ __html: FEATURED_ARTICLE.content }}
            />
            
            <div className="flex justify-center mt-8">
              <Button className="group">
                Request More Information
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
