
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';

export const AnnuitiesSection: React.FC = () => {
  return (
    <ResourceSection title="Annuities">
      <ResourceParagraph>
        What are your retirement goals? For most people, it's making sure the money lasts through their retirement.
      </ResourceParagraph>
      <ResourceParagraph>
        Do you know the secret about having an income for the rest of your life? Ask me how.
      </ResourceParagraph>
    </ResourceSection>
  );
};
