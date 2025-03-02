
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex-grow py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 tracking-tight text-gray-900">Resource Center</h1>
          <p className="text-xl text-gray-600 mb-12">
            Access our collection of guides, tools, and resources to help you navigate employee benefits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <FileText className="h-6 w-6 mb-2 text-blue-500" />
                <CardTitle>Benefits Guides</CardTitle>
                <CardDescription>Comprehensive guides for understanding employee benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  <li>2024 Employee Benefits Overview</li>
                  <li>Health Insurance Selection Guide</li>
                  <li>Retirement Planning Essentials</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download All Guides
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <BookOpen className="h-6 w-6 mb-2 text-green-500" />
                <CardTitle>Webinars & Training</CardTitle>
                <CardDescription>Educational content to better understand benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  <li>Benefits 101: Getting Started</li>
                  <li>Maximizing Your Health Coverage</li>
                  <li>Financial Wellness Programs</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Webinars</Button>
              </CardFooter>
            </Card>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Latest Resources</CardTitle>
              <CardDescription>Recently added materials and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium">2024 Benefits Compliance Update</h3>
                  <p className="text-sm text-gray-500 mt-1">Updated March 2024</p>
                  <p className="text-gray-600 mt-2">Key changes to regulatory requirements and compliance considerations for the current year.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-medium">Open Enrollment Planning Tool</h3>
                  <p className="text-sm text-gray-500 mt-1">Added February 2024</p>
                  <p className="text-gray-600 mt-2">Interactive tool to help plan and execute successful open enrollment periods.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Browse All Resources</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <NavBarDemo />
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
