<script lang="ts">
	import { i18n, type AvailableLanguageTag } from '$lib/i18n.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { Globe, Loader2 } from 'lucide-svelte';
	import { locales } from '$lib/paraglide/runtime';

	let isSwitching = $state<string | null>(null);

	function handleSetLocale(lang: string) {
		if (i18n.current === lang) return;

		isSwitching = lang;

		// Simulate a small delay for visual feedback if the switch is too fast
		setTimeout(() => {
			i18n.switchTo(lang as AvailableLanguageTag);
			isSwitching = null;
		}, 300);
	}
</script>

<div class="flex items-center gap-1">
	<Globe class="h-4 w-4 text-muted-foreground" />
	{#each locales as lang}
		<Button
			variant={i18n.current === lang ? 'default' : 'ghost'}
			size="sm"
			onclick={() => handleSetLocale(lang)}
			disabled={isSwitching !== null}
			class="uppercase text-xs min-w-[40px] transition-all duration-200 {i18n.current !== lang
				? 'hover:text-primary hover:bg-primary/10'
				: ''}"
		>
			{#if isSwitching === lang}
				<Loader2 class="h-3 w-3 animate-spin" />
			{:else}
				{lang}
			{/if}
		</Button>
	{/each}
</div>
