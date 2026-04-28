/**
 * theme.svelte.ts — Svelte 5 Rune-based theme manager
 */
const STORAGE_KEY = 'theme';

export const theme = (() => {
	let isDark = $state(false);

	function init() {
		if (typeof window === 'undefined') return;

		const stored = localStorage.getItem(STORAGE_KEY);
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (stored === 'dark' || (!stored && prefersDark)) {
			isDark = true;
			document.documentElement.classList.add('dark');
		} else {
			isDark = false;
			document.documentElement.classList.remove('dark');
		}
	}

	function toggle() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem(STORAGE_KEY, 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem(STORAGE_KEY, 'light');
		}
	}

	return {
		get isDark() {
			return isDark;
		},
		init,
		toggle
	};
})();
