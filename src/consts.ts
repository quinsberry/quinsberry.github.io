// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';


export const UI = {
	theme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
} as const;


interface I18N {
	language: 'en';
	textDirection: 'ltr' | 'rtl';
}
export const I18N: I18N = {
	language: 'en',
	textDirection: 'ltr',
};