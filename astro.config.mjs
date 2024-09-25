// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import { transformerNotationDiff, transformerNotationHighlight, transformerNotationFocus } from '@shikijs/transformers';

import {
	lazyImagesRehypePlugin,
	readingTimeRemarkPlugin,
	responsiveTablesRehypePlugin,
} from './src/lib/markdown-plugins';
import { ExternalScripts } from './src/consts';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
	site: 'https://ekolesnyk.netlify.app',
	prefetch: true,
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
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'css-variables',
			transformers: [transformerNotationDiff(), transformerNotationHighlight(), transformerNotationFocus()],
		},
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
