<script lang="ts">
	import { i18n, type AvailableLanguageTag } from '$lib/i18n.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { Globe } from 'lucide-svelte';
	import { locales } from '$lib/paraglide/runtime';

	function handleSetLocale(lang: string) {
		i18n.switchTo(lang as AvailableLanguageTag);
	}
</script>

<div class="flex items-center gap-1">
	<Globe class="h-4 w-4 text-muted-foreground" />
	{#each locales as lang}
		<Button
			variant={i18n.current === lang ? 'default' : 'ghost'}
			size="sm"
			onclick={() => handleSetLocale(lang)}
			class="uppercase text-xs"
		>
			{lang}
		</Button>
	{/each}
</div>
