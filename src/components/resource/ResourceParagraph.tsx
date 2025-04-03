
import React from 'react';

interface ResourceParagraphProps {
  children: React.ReactNode;
}

export const ResourceParagraph: React.FC<ResourceParagraphProps> = ({ children }) => {
  return (
    <p className="text-gray-700 mb-4">{children}</p>
  );
};
