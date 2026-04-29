<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
		url?: string;
		type?: string;
	}

	let {
		title = 'Nurul Fitri | Marketing Administration Portfolio',
		description = 'Portfolio of Nurul Fitri, a Marketing Administration and Retail Operations specialist.',
		image = '/images/og-preview.png',
		url = $page.url.href,
		type = 'website'
	}: Props = $props();

	// Computed properties based on current language if props are not explicitly provided
	const siteTitle = $derived(title);
	const siteDescription = $derived(description);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{siteTitle}</title>
	<meta name="title" content={siteTitle} />
	<meta name="description" content={siteDescription} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={siteTitle} />
	<meta property="twitter:description" content={siteDescription} />
	<meta property="twitter:image" content={image} />

	<!-- Additional Tags -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#0f172a" />
	<meta name="author" content="Nurul Fitri" />
</svelte:head>
