
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';
import { Image } from '@/components/ui/image';

export const HealthInsuranceSection: React.FC = () => {
  return (
    <ResourceSection title="Introduction to Health Insurance">
      <div className="flex justify-center mb-6">
        <Image 
          src="/lovable-uploads/d45294c2-9387-4227-b60a-caf10c5552b6.png" 
          alt="Health Insurance Concept" 
          className="max-w-full h-auto md:max-w-2xl" 
          objectFit="contain"
        />
      </div>
      <ResourceParagraph>
        Why Do You Need Health Insurance?
        Today, the cost of insurance is high, and still increasing. Who will pay your bills if you have a serious accident or a major illness?  Let's discuss insurance you don't have to die to use.  It allows you to pay your bills while recuperating, without stress.  It is also an option to consider for some Long-Term Care.
      </ResourceParagraph>
      <ResourceParagraph>
        Health Insurance transfers the financial risk of life's events to an insurance company. A sound insurance strategy can help protect your family from the financial consequences of those events. A strategy can include personal insurance, liability insurance, and life insurance.
      </ResourceParagraph>
    </ResourceSection>
  );
};
