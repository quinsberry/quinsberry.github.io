// @ts-check
import path from 'node:path';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

import { lazyImagesRehypePlugin, readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from '@/lib/markdown-plugins';
import { ExternalScripts } from '@/consts';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap(),
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
		ifPartytown(),
	],
	markdown: {
		remarkPlugins: [readingTimeRemarkPlugin],
		rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
	},
	vite: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
	},
});

function ifPartytown() {
	const shouldAddPartytown = Object.values(ExternalScripts).some((item) => !!item.partytown);
	return shouldAddPartytown
		? partytown({
				config: { forward: ['dataLayer.push'] },
			})
		: null;
}
