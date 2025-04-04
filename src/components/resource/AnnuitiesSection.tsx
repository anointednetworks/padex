
import React from 'react';
import ResourceSection from './ResourceSection';
import ResourceParagraph from './ResourceParagraph';
import { ResourceList } from './ResourceList';

export const AnnuitiesSection: React.FC = () => {
  return (
    <ResourceSection title="Annuities">
      <ResourceParagraph>
        An annuity is an agreement where you pay a premium (either a lump sum or multiple payments) to an insurance
        company, and in return, they promise to make payments to you either now or in the future. The interest your
        money earns while it's in the annuity grows tax-deferred, meaning you don't pay taxes on it until you start
        receiving payouts or take withdrawals. These payments can continue for a set period or for the rest of your life,
        helping ensure you have income even if you live longer than expected.
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
