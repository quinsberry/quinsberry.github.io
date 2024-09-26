import type { WebmanifestOptions } from 'astro-webmanifest';
import { I18N, SITE, UI } from './src/consts';

export const webmanifestConfig: WebmanifestOptions = {
	icon: 'public/favicons/favicon.svg',
	config: {
		outfile: 'site.webmanifest', // default - 'manifest.webmanifest'
		insertAppleTouchLinks: false,
		insertFaviconLinks: false,
		insertThemeColorMeta: false,
		insertManifestLink: false,
	},

	name: SITE.title,
	short_name: SITE.title,
	description: SITE.description,
	categories: [...SITE.keywords.split(', '), 'blog', 'software engineering', 'web development'],
	lang: I18N.locale,
	dir: I18N.textDirection,

	start_url: '/',

	theme_color: UI.darkBackground,
	background_color: UI.darkBackground,

	display: 'standalone',

	orientation: 'portrait',

	// screenshots: [
	// 	{
	// 		src: 'screenshot1.webp',
	// 		sizes: '1280x720',
	// 		type: 'image/webp',
	// 		platform: 'wide',
	// 		label: 'Homescreen of Awesome App',
	// 	},
	// 	{
	// 		src: 'screenshot2.webp',
	// 		sizes: '1280x720',
	// 		type: 'image/webp',
	// 		platform: 'wide',
	// 		label: 'List of Awesome Resources available in Awesome App',
	// 	},
	// ],
};
