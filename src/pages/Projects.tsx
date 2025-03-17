
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

// Single featured article
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

const FeatureArticle = ({ article }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <BackgroundGradient className="rounded-xl mb-10">
        <Card className="w-full border-none bg-card/80 backdrop-blur-sm">
          <img 
            src={article.imageUrl}
            alt={article.title} 
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                {article.category}
              </span>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold">{article.title}</CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-2">
              {article.excerpt}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <div 
              className="prose dark:prose-invert max-w-none" 
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </CardContent>
          <CardFooter className="flex justify-center py-6">
            <Button variant="outline" className="group">
              Request More Information
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </Card>
      </BackgroundGradient>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead 
        title="Resource Center | Illuminated Links"
        description="Explore our resource center for insightful articles on insurance, retirement planning, and financial well-being."
      />
      <NavBarDemo />
      
      <ServiceHero title="Resources" />
      
      <div className="flex-grow container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight text-foreground">
          Featured Article
        </h2>
        
        <FeatureArticle article={FEATURED_ARTICLE} />
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
