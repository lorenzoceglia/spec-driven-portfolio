import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Section component
 * 
 * A semantic section element for organizing page content.
 * Accepts children and optional className for customization.
 * Styled with Tailwind CSS for padding and container spacing.
 */
export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`px-6 py-8 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
