
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const ContactSection: React.FC = () => {
  return (
    <ResourceSection title="Contact Us">
      <ResourceParagraph>
        We would love to hear from you! Please reach out with any questions or to schedule a session.
      </ResourceParagraph>
      <div className="mt-4">
        <Link to="/contact">
          <Button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
            Contact Us
          </Button>
        </Link>
      </div>
    </ResourceSection>
  );
};
