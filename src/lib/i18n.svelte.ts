/**
 * i18n.svelte.ts — Paraglide-JS v2 language state manager for Svelte 5 Runes
 */
import { setLocale, locales, baseLocale } from '$lib/paraglide/runtime.js';
import * as m from '$lib/paraglide/messages';

export type AvailableLanguageTag = (typeof locales)[number];
export const availableLanguages = locales as readonly AvailableLanguageTag[];
export const DEFAULT_LANG: AvailableLanguageTag = baseLocale as AvailableLanguageTag;

const STORAGE_KEY = 'lang';

function getStoredLanguage(): AvailableLanguageTag {
	if (typeof window === 'undefined') return DEFAULT_LANG;
	const stored = localStorage.getItem(STORAGE_KEY) as AvailableLanguageTag | null;
	if (stored && (availableLanguages as readonly string[]).includes(stored)) {
		return stored;
	}
	return DEFAULT_LANG;
}

export const i18n = (() => {
	let current = $state<AvailableLanguageTag>(DEFAULT_LANG);

	function init() {
		const preferred = getStoredLanguage();
		current = preferred;
		setLocale(preferred);
	}

	function switchTo(tag: AvailableLanguageTag) {
		current = tag;
		setLocale(tag);
		if (typeof window !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, tag);
		}
	}

	return {
		get current() {
			return current;
		},
		init,
		switchTo
	};
})();
