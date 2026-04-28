<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { i18n } from '$lib/i18n.svelte';
</script>

<div class="container mx-auto px-4 py-20 text-center">
	<h1 class="text-4xl font-extrabold tracking-tight sm:text-6xl">
		<!-- Dependency on i18n.current ensures reactivity -->
		{#key i18n.current}
			{m.hello()}
		{/key}
	</h1>
	<p class="mt-4 text-xl text-muted-foreground">
		Welcome to Nurul Fitri's Portfolio.
	</p>
</div>
