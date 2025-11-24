import type { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://placelund.se';
const DEFAULT_IMAGE = '/images/og-default.jpg';

/**
 * Validate title length (30-65 characters)
 */
function validateTitle(title: string): void {
  if (title.length < 30 || title.length > 65) {
    console.warn(
      `❌ SEO Warning: Title "${title}" is ${title.length} characters. ` +
      `Must be 30-65 characters.`
    );
  }
}

/**
 * Validate description length (120-320 characters)
 */
function validateDescription(description: string): void {
  if (description.length < 120 || description.length > 320) {
    console.warn(
      `❌ SEO Warning: Description is ${description.length} characters. ` +
      `Must be 120-320 characters.`
    );
  }
}

/**
 * Generate complete metadata for a page with SEO validation
 */
export function generateMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  noindex = false,
}: SEOConfig): Metadata {
  // Validate in development
  if (process.env.NODE_ENV === 'development') {
    validateTitle(title);
    validateDescription(description);
  }

  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Place Lund Hotel',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: noindex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
        },
  };
}