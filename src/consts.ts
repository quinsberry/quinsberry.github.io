export const SITE_TITLE = "Eugene's Blog";
export const SITE_DESCRIPTION = 'A blog by Eugene Kolesnyk';

export type Themes = 'light' | 'dark' | 'system';
export const UI = {
	theme: 'system' as Themes,
};

interface I18N {
	language: 'en';
	textDirection: 'ltr' | 'rtl';
}
export const I18N: I18N = {
	language: 'en',
	textDirection: 'ltr',
};

export const ExternalScripts = {
	googleAnalytics: {
		id: process.env.GOOGLE_ANALYTICS_ID,
		partytown: true,
	},
};
