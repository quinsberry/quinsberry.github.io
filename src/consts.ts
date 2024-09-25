export const SITE = {
	title: "Eugene's Blog",
	description: 'A blog by Eugene Kolesnyk',
	keywords: 'eugenekolesnyk, quinsberry, ekolesnyk',
	disableIndexing: false,
};

export type Themes = 'light' | 'dark' | 'system';
export const UI = {
	theme: 'system' as Themes,
	lightBackground: '#fff',
	darkBackground: '#000',
};

interface I18N {
	language: 'en';
	locale: 'en-US';
	textDirection: 'ltr' | 'rtl';
}
export const I18N: I18N = {
	language: 'en',
	locale: 'en-US',
	textDirection: 'ltr',
};

export const ExternalScripts = {
	googleAnalytics: {
		id: process.env.GOOGLE_ANALYTICS_ID,
		partytown: true,
	},
};
export const manifest = {
	name: SITE.title,
	short_name: SITE.title,
	description: SITE.description,
	theme_color: '#000000',
	background_color: '#ffffff',
	display: 'standalone',
	scope: '/',
	start_url: '/',
	icons: [
		{
			src: '/favicon.svg',
			sizes: 'any',
			type: 'image/svg+xml',
		},
	],
};
