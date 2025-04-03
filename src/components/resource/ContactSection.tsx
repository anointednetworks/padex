
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';

export const ContactSection: React.FC = () => {
  return (
    <ResourceSection title="Contact Us">
      <ResourceParagraph>
        We would love to hear from you! Please reach out with any questions or feedback.
      </ResourceParagraph>
    </ResourceSection>
  );
};
