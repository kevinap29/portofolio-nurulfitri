<script lang="ts">
	import { portfolioContent } from '$lib/data/content';
	import { i18n } from '$lib/i18n.svelte';
	import { Mail, FileText } from 'lucide-svelte';
	import LinkedIn from '../icons/LinkedIn.svelte';
	import Button from '../ui/button.svelte';

	const { profile } = portfolioContent;
</script>

<section class="container mx-auto px-6 py-16 md:py-24 lg:py-32 flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left lg:justify-between">
	<!-- Profile Image/Avatar -->
	<div class="relative group">
		<div class="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
		<div class="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-surface shadow-2xl">
			<img 
				src={profile.avatarUrl} 
				alt={profile.name} 
				class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
			/>
		</div>
	</div>

	<!-- Profile Content -->
	<div class="flex-1 max-w-2xl">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
			<span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
				{profile.name}
			</span>
		</h1>
		
		<h2 class="text-xl md:text-2xl font-medium text-foreground-muted mb-6 leading-relaxed">
			{profile.headline}
		</h2>

		<p class="text-lg text-foreground-muted mb-8 leading-relaxed">
			{profile.bio[i18n.current]}
		</p>

		<div class="flex flex-wrap items-center justify-center lg:justify-start gap-4">
			<Button href="#contact" variant="primary" class="gap-2">
				<Mail class="w-4 h-4" />
				{i18n.current === 'id' ? 'Hubungi Saya' : 'Contact Me'}
			</Button>
			
			<Button 
				href="/resume" 
				variant="outline" 
				class="gap-2"
			>
				<FileText class="w-4 h-4" />
				{i18n.current === 'id' ? 'Unduh Resume' : 'Download Resume'}
			</Button>

			<div class="flex items-center gap-3 ml-2 border-l border-surface-border pl-6 py-2">
				{#each profile.socials as social}
					<a 
						href={social.url} 
						target="_blank" 
						rel="noopener noreferrer"
						class="text-foreground-muted hover:text-primary transition-colors"
						aria-label={social.platform}
					>
						{#if social.icon === 'linkedin'}
							<LinkedIn class="w-6 h-6" />
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Custom styles if needed beyond Tailwind */
</style>
