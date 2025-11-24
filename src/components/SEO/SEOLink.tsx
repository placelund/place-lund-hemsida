import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface SEOLinkProps extends LinkProps {
  children: ReactNode;
  title: string;
  ariaLabel?: string;
  className?: string;
}

/**
 * SEO-optimized Link component that requires title and aria-label
 * Title: Descriptive text that appears on hover (SEO + UX)
 * Aria-Label: Accessibility label for screen readers (defaults to title if not provided)
 */
export function SEOLink({
  children,
  title,
  ariaLabel,
  className = '',
  ...props
}: SEOLinkProps) {
  // Use ariaLabel if provided, otherwise fall back to title
  const effectiveAriaLabel = ariaLabel || title;

  // Validate in development
  if (process.env.NODE_ENV === 'development') {
    if (!title || title.trim() === '') {
      console.error(`❌ SEO Error: Link missing title attribute for ${props.href}`);
    }
    if (title.length < 5) {
      console.warn(`⚠️ SEO Warning: Link title too short for ${props.href}. Should be descriptive (5+ chars).`);
    }
  }

  return (
    <Link
      title={title}
      aria-label={effectiveAriaLabel}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}