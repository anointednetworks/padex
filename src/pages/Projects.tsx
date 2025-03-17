
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

// Sample article data
const ARTICLES = [
  {
    id: 1,
    title: "Understanding Annuities: A Comprehensive Guide",
    excerpt: "What are your retirement goals? For most people, it's making sure the money lasts throughout their retirement. Learn the secrets of having a sustainable income for the rest of your life.",
    author: "Financial Advisor Team",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Retirement Planning",
    imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Life Insurance: Protecting What Matters Most",
    excerpt: "Life insurance isn't just about planning for the inevitable. It's about ensuring your loved ones are protected financially when you can no longer be there for them. Discover why life insurance is a crucial part of financial planning.",
    author: "Protection Specialists",
    date: "June 3, 2023",
    readTime: "6 min read",
    category: "Life Insurance",
    imageUrl: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Medicare Solutions: Navigating Healthcare in Retirement",
    excerpt: "Medicare can be complex and overwhelming. Our comprehensive guide breaks down the different parts of Medicare, eligibility requirements, and how to choose the best plan for your healthcare needs.",
    author: "Medicare Experts",
    date: "July 12, 2023",
    readTime: "10 min read",
    category: "Medicare",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Health Insurance: Finding the Right Coverage",
    excerpt: "With so many health insurance options available, how do you know which one is right for you and your family? Our guide helps you understand the different types of health insurance and what to look for in a policy.",
    author: "Healthcare Advisors",
    date: "August 9, 2023",
    readTime: "7 min read",
    category: "Health Insurance",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

const ArticleCard = ({ article }) => {
  return (
    <BackgroundGradient className="rounded-xl">
      <Card className="w-full border-none bg-card/80 backdrop-blur-sm">
        <img 
          src={article.imageUrl}
          alt={article.title} 
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
              {article.category}
            </span>
          </div>
          <CardTitle className="text-xl font-bold">{article.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-2">
            {article.excerpt}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full group">
            Read Article
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </BackgroundGradient>
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
          Featured Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="px-8">
            View All Articles
          </Button>
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
