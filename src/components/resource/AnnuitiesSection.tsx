
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';
import { ResourceList } from './ResourceList';

export const AnnuitiesSection: React.FC = () => {
  return (
    <ResourceSection title="Annuities">
      <ResourceParagraph>
        An annuity is an agreement where you pay a premium to an insurance company, and in return, they promise to make payments to you either now or in the future. The interest your money earns grows tax-deferred until you start receiving payouts.
      </ResourceParagraph>
      
      <ResourceParagraph>
        Types of annuities include:
      </ResourceParagraph>
      
      <ResourceList
        items={[
          "Fixed Annuities: Guaranteed payments regardless of market performance",
          "Variable Annuities: Payments depend on investment performance",
          "Indexed Annuities: Returns tied to market index with downside protection"
        ]}
      />
      
      <ResourceParagraph>
        Annuities can provide income you cannot outlive, helping ensure financial security throughout retirement. Consult a financial advisor to determine if an annuity fits your retirement plan.
      </ResourceParagraph>
    </ResourceSection>
  );
};
