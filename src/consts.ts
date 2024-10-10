export const SITE = {
	website: "https://quinsberry.github.io/",
	title: "Eugene's Blog",
	description: 'A blog by Eugene Kolesnyk',
	keywords: 'eugenekolesnyk, quinsberry, ekolesnyk',
	disableIndexing: false,
};

export type Themes = 'light' | 'dark' | 'system';
export const UI = {
	theme: 'system' as Themes,
	lightBackground: '#fff',
	darkBackground: 'hsl(224 71.4% 4.1%)',
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
		id: process?.env.GOOGLE_ANALYTICS_ID,
		partytown: true,
	},
};
