import { ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
  className?: string;
}

/**
 * Footer component
 * 
 * A semantic footer element that serves as the page footer.
 * Accepts children and optional className for customization.
 * Styled with Tailwind CSS for padding, background, and border.
 */
export function Footer({ children, className = '' }: FooterProps) {
  return (
    <footer className={`bg-slate-800 text-white px-6 py-4 border-t border-slate-700 ${className}`}>
      {children}
    </footer>
  );
}
