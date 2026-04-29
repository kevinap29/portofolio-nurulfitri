<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { theme } from '$lib/theme.svelte';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();

	$effect(() => {
		i18n.init();
		theme.init();
	});
</script>

<svelte:head>
	<link rel="icon" href="images/avatar.jpg" />
</svelte:head>

<div class="relative min-h-screen bg-background font-sans antialiased">
	<div class="no-print">
		<Navbar />
	</div>
	<main class="pt-16">
		{@render children()}
	</main>
	<footer class="no-print border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
		<div class="container mx-auto px-4">
			<p>
				&copy; {new Date().getFullYear() === 2026 ? '2026' : `2026 - ${new Date().getFullYear()}`}
				@mainapidev | @kevinap29. All rights reserved.
			</p>
		</div>
	</footer>
</div>
