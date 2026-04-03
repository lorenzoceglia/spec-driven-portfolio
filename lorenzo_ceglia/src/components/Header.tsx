import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

/**
 * Header component
 * 
 * A semantic header element that serves as the top page header.
 * Accepts children and optional className for customization.
 * Styled with Tailwind CSS for padding, background, and border.
 */
export function Header({ children, className = '' }: HeaderProps) {
  return (
    <header className={`bg-slate-800 text-white px-6 py-4 border-b border-slate-700 ${className}`}>
      {children}
    </header>
  );
}
