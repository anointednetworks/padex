
import mammoth from 'mammoth';

/**
 * Extracts text from a docx file using mammoth.js
 */
export const extractTextFromDocx = async (arrayBuffer: ArrayBuffer): Promise<string> => {
  try {
    // Use mammoth.js to convert the docx to HTML
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  } catch (error) {
    console.error('Error extracting text:', error);
    throw new Error('Failed to extract text from document');
  }
};

/**
 * Parses extracted text into resource sections
 */
export const parseResourceSections = (text: string): { title: string; content: string[] }[] => {
  const lines = text.split('\n').filter(line => line.trim());
  const sections: { title: string; content: string[] }[] = [];
  let currentSection: { title: string; content: string[] } | null = null;

  // Improved heading detection - look for patterns typical in Word documents
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check if this line looks like a heading:
    // 1. Short lines (less than 60 chars)
    // 2. Lines that end with a colon
    // 3. Lines that are all uppercase or title case
    // 4. Lines followed by blank lines
    // 5. Exclude numbered lists
    const isHeading = (
      (line.length < 60 && 
       (/[A-Z]/.test(line[0]) || line.endsWith(':')) && 
       !line.endsWith('.') &&
       !line.match(/^[0-9]+\./)) ||
      (line.toUpperCase() === line && line.length > 3 && line.length < 30) || // ALL CAPS headings
      (i < lines.length - 1 && lines[i+1].trim() === '') // Heading followed by blank line
    );
    
    if (isHeading) {
      // If we were building a section, add it to our list
      if (currentSection && currentSection.content.length > 0) {
        sections.push(currentSection);
      }
      
      // Start a new section
      currentSection = {
        title: line.replace(/:$/, ''), // Remove trailing colon if present
        content: []
      };
    } else if (currentSection) {
      // Add this line to the current section if it's not empty
      if (line.trim() !== '') {
        currentSection.content.push(line);
      }
    } else {
      // No section started yet but we have content
      currentSection = {
        title: 'Introduction',
        content: [line]
      };
    }
  }
  
  // Don't forget to add the last section
  if (currentSection && currentSection.content.length > 0) {
    sections.push(currentSection);
  }

  return sections;
};

/**
 * Generates JSX output for resource sections
 */
export const generateResourceJSX = (resourceSections: { title: string; content: string[] }[]): string => {
  if (resourceSections.length === 0) return '';
  
  return resourceSections.map(section => (
    `<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">${section.title}</h2>
  ${section.content.map(paragraph => `<p className="text-gray-700 mb-4">${paragraph}</p>`).join('\n  ')}
</div>`
  )).join('\n\n');
};

/**
 * Generates HTML output for resource sections
 */
export const generateResourceHTML = (resourceSections: { title: string; content: string[] }[]): string => {
  if (resourceSections.length === 0) return '';
  
  return `<!DOCTYPE html>
<html>
<head>
  <title>Resource Content</title>
  <style>
    .section {
      margin-bottom: 40px;
    }
    .section-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      color: #1a202c;
    }
    .paragraph {
      margin-bottom: 16px;
      color: #4a5568;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Resource Content</h1>
  ${resourceSections.map(section => `
  <div class="section">
    <h2 class="section-title">${section.title}</h2>
    ${section.content.map(paragraph => `<p class="paragraph">${paragraph}</p>`).join('\n    ')}
  </div>`).join('')}
</body>
</html>`;
};
