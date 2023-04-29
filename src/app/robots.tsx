import type { MetadataRoute } from 'next';

import { env } from '@/env';

/**
 * Template metadata for robots.txt
 * @see https://beta.nextjs.org/docs/api-reference/metadata#robots-file
 * @returns {MetadataRoute.Robots}
 */

export default function robots(): MetadataRoute.Robots {
  const host = env.NEXT_PUBLIC_APP_URL as string;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
      crawlDelay: 2,
    },
    sitemap: `${host}/sitemap.xml`,
    host: host,
  };
}
