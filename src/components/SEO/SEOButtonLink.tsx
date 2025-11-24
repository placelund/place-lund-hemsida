import Link from 'next/link';
import { ReactNode } from 'react';

interface SEOButtonLinkProps {
  href: string;
  children: ReactNode;
  title: string;
  ariaLabel?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

/**
 * SEO-optimized Button-styled Link component
 */
export function SEOButtonLink({
  href,
  children,
  title,
  ariaLabel,
  className = '',
  variant = 'primary'
}: SEOButtonLinkProps) {
  const effectiveAriaLabel = ariaLabel || title;

  const variantClasses = {
    primary: 'bg-[#004225] text-white hover:bg-[#42001D]',
    secondary: 'bg-[#42001D] text-white hover:bg-[#004225]',
    outline: 'border-2 border-[#004225] text-[#004225] hover:bg-[#004225] hover:text-white'
  };

  if (process.env.NODE_ENV === 'development') {
    if (!title || title.trim() === '') {
      console.error(`❌ SEO Error: Button link missing title for ${href}`);
    }
  }

  return (
    <Link
      href={href}
      title={title}
      aria-label={effectiveAriaLabel}
      className={`inline-block px-6 py-3 rounded-md font-medium transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}