<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import ThemeToggle from './ThemeToggle.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { portfolioContent } from '$lib/data/content';
	import Button from '$lib/components/ui/button.svelte';
	import { FileText } from 'lucide-svelte';

	import { i18n } from '$lib/i18n.svelte';

	const navLinks = $derived([
		{ name: i18n.current === 'id' ? 'Tentang' : 'About', href: '#about' },
		{ name: i18n.current === 'id' ? 'Pengalaman' : 'Experience', href: '#experience' },
		{ name: i18n.current === 'id' ? 'Kontak' : 'Contact', href: '#contact' }
	]);
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container mx-auto flex h-16 items-center justify-between px-4">
		<div class="flex items-center gap-6">
			<a href="/" class="text-xl font-bold tracking-tight">
				{portfolioContent.profile.name}
			</a>
			<div class="hidden md:flex items-center gap-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
					>
						{link.name}
					</a>
				{/each}
			</div>
		</div>

		<div class="flex items-center gap-2 md:gap-4">
			<a href="/resume">
				<Button variant="outline" size="sm" class="gap-2">
					<FileText class="h-4 w-4" />
					<span class="hidden sm:inline">{i18n.current === 'id' ? 'Resume' : 'Resume'}</span>
				</Button>
			</a>
			<div class="h-6 w-px bg-border/50"></div>
			<LanguageSwitcher />
			<ThemeToggle />
		</div>
	</div>
</nav>
