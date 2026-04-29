# i18n & Theme System

The portfolio supports multiple languages and a dynamic dark/light mode system.

## Internationalization (i18n)
Managed in `src/lib/i18n.svelte`.
- **State**: Reactive `$state` for the current locale ('id' | 'en').
- **Persistence**: Saves the user's preference to `localStorage`.
- **Implementation**: The UI reactively updates whenever `i18n.current` changes, pulling the correct string from the `content.ts` data structure.

## Theme Management
Managed in `src/lib/theme.svelte`.
- **State**: Reactive `$state` for the mode ('light' | 'dark').
- **System Preference**: Respects the user's OS-level theme preference by default.
- **Tailwind Integration**: Toggles the `.dark` class on the `document.documentElement` for seamless integration with Tailwind's `dark:` utility classes.

## SEO Management
Managed via the `<SEO />` component in `src/lib/components/SEO.svelte`.
- Centralizes all `<meta>`, Open Graph, and Twitter Card tags.
- Dynamically updates based on the current page URL and props passed from individual routes.
