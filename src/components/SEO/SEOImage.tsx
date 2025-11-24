import Image, { ImageProps } from 'next/image';

interface SEOImageProps extends Omit<ImageProps, 'alt' | 'title'> {
  alt: string;
  title: string;
  src: string;
}

/**
 * SEO-optimized Image component that requires both alt and title
 * Alt: Descriptive text for screen readers and when image fails to load
 * Title: Keyword-rich tooltip text that appears on hover
 */
export function SEOImage({ alt, title, ...props }: SEOImageProps) {
  // Validate in development
  if (process.env.NODE_ENV === 'development') {
    if (!alt || alt.trim() === '') {
      console.error(`❌ SEO Error: Image missing alt text for ${props.src}`);
    }
    if (!title || title.trim() === '') {
      console.error(`❌ SEO Error: Image missing title attribute for ${props.src}`);
    }
    if (alt.length < 10) {
      console.warn(`⚠️ SEO Warning: Alt text too short for ${props.src}. Should be descriptive (10+ chars).`);
    }
  }

  return <Image alt={alt} title={title} {...props} />;
}