<script lang="ts">
	import { portfolioContent } from '$lib/data/content';
	import { i18n } from '$lib/i18n.svelte';
	import { Building2, Calendar, MapPin } from 'lucide-svelte';

	const { experience } = portfolioContent;
</script>

<section class="container mx-auto px-6 py-12 md:py-24" id="experience">
	<div class="max-w-4xl mx-auto">
		<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
			<div>
				<h2 class="text-3xl md:text-4xl font-bold mb-2">
					{i18n.current === 'id' ? 'Pengalaman Profesional' : 'Professional Experience'}
				</h2>
				<p class="text-foreground-muted">
					{i18n.current === 'id' 
						? 'Perjalanan karir saya dalam administrasi dan operasional retail.' 
						: 'My career journey in administration and retail operations.'}
				</p>
			</div>
		</div>

		<div class="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-border before:to-transparent">
			{#each experience as item, i}
				<div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
					<!-- Icon / Dot -->
					<div class="flex items-center justify-center w-10 h-10 rounded-full border border-surface-border bg-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
						<Building2 class="w-5 h-5 text-primary" />
					</div>

					<!-- Content Card -->
					<div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-surface-border p-6 rounded-sm shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300">
						<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
							<h3 class="text-xl font-bold text-foreground">{item.role[i18n.current]}</h3>
							<div class="flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
								<Calendar class="w-3.5 h-3.5" />
								{item.period[i18n.current]}
							</div>
						</div>

						<div class="flex flex-col gap-1 mb-4">
							<div class="font-semibold text-lg text-foreground-muted">{item.company}</div>
							{#if item.location}
								<div class="flex items-center gap-1.5 text-sm text-foreground-muted/80">
									<MapPin class="w-3.5 h-3.5" />
									{item.location}
								</div>
							{/if}
						</div>

						{#if item.description && item.description[i18n.current]}
							<ul class="space-y-2">
								{#each item.description[i18n.current] as bullet}
									<li class="flex gap-3 text-foreground-muted leading-relaxed">
										<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></span>
										<span>{bullet}</span>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
