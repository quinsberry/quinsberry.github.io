import type { RobotsTxtOptions } from 'astro-robots-txt';
import { SITE } from './src/consts';

const robotsConfig: RobotsTxtOptions = {
	policy: [
		{
			userAgent: '*',
			// The next line enables or disables the crawling on the `robots.txt` level
			disallow: SITE.disableIndexing ? '/' : '',
		},
	],
	sitemapBaseFileName: 'sitemap-index', // default 'sitemap-index'
};

export default robotsConfig;
